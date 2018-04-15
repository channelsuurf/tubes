import Provider from '../provider'
import config from '../../config'

class VimeoAPIProvider extends Provider {
  // Retrieves a public access token from the Vimeo API.
  // The access token must be passed with all requests to the Vimeo API.
  // See: https://developer.vimeo.com/api/authentication
  //
  // NOTE: Must be called before any other Vimeo API requests are sent
  async authenticate () {
    // Don't re-authenticate if we have a token
    if (this.accessToken !== undefined) {
      return
    }

    // Setup the API call
    const params = {
      'grant_type': 'client_credentials'
    }
    const headers = {
      'Authorization': Buffer.from(`${config.VIMEO_CLIENT_ID}:${config.VIMEO_CLIENT_SECRET}`).toString('base64')
    }
    // Make the call
    const response = await this.client.post(config.VIMEO_AUTH_PATH, {params, headers})
    // TODO: Re-try if there's an error making the request or we don't get what we expect back
    // Store the access token in memory
    this.accessToken = response['access_token']
  }

  async fetchVideo (id, opts = {}) {
    // See: https://developer.vimeo.com/api/reference/videos
    const url = `${config.VIMEO_API_PATH}/videos/${id}`
    const params = {
      'access_token': this.accessToken
    }
    const headers = {
      // See: https://developer.vimeo.com/api/start 3. 'Make API calls to Vimeo' d. 'Set your API Version'
      'Accept': 'application/vnd.vimeo.video+json;version=3.4'
    }

    // Endpoint Returns:
    // - 200: Video found and returned
    // - 404: Video not found
    try {
      // Make the call
      const response = await this.client.get(url, {params, headers})
      // Returns object w/ the video data
      return response.data
    } catch (e) {
      // If the request didn't succeed, or we didn't get a 404 back, log the error
      if (!e.response || e.response !== 404) {
        // TODO: Use a log provider
        console.error(e)
      }

      return null
    }
  }
}

export default VimeoAPIProvider
