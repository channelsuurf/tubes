import Provider from '../provider'
import config from '../../config'

class YouTubeAPIProvider extends Provider {
  // opts
  // - part
  // - maxHeight
  // - maxWidth
  async fetchVideo (id, opts = {}) {
    // Setup the API call
    const url = `${config.YOUTUBE_API_PATH}/videos`
    const params = {
      key: config.YOUTUBE_API_KEY,
      id: id,
      // See: https://developers.google.com/youtube/v3/docs/videos
      part: opts.part || 'id,player,snippet,statistics,status',
      ...(opts.maxHeight ? { 'maxHeight': opts.maxHeight } : {}), // Optional
      ...(opts.maxWidth ? { 'maxWidth': opts.maxWidth } : {}) // Optional
    }

    // Endpoint Returns:
    // - 200: Video found and returned
    // - 400: Video chart not found (N/A)
    // - 403: Forbidden (N/A)
    // - 404: Video not found (N/A - If the video isn't found, returns a 200 w/ an empty array)
    try {
      // Make the call
      const response = await this.client.get(url, {params})
      // YouTube returns an 'items' array
      const data = response.data.items
      // If the array is empty, then no video was found with the provided 'id'
      if (data.length === 0) {
        return null
      }

      // Otherwise, the array should have 1 element – the video data
      return data[0]
    } catch (e) {
      console.error(e)
      return null
    }
  }
}

export default YouTubeAPIProvider
