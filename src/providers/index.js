import YouTubeAPIProvider from './api/YouTube'
import VimeoAPIProvider from './api/Vimeo'

import YouTubeEmbedProvider from './oembed/YouTube'
import VimeoEmbedProvider from './oembed/Vimeo'

const YouTubeAPI = new YouTubeAPIProvider()
const VimeoAPI = new VimeoAPIProvider()

const YouTubeEmbed = new YouTubeEmbedProvider()
const VimeoEmbed = new VimeoEmbedProvider()

// We use 'undefined' to indicate that the given provider isn't supported
// because 'null' will be returned if videos are not found by their provider
const fetchVideo = (provider, id, oembed = false, opts = {}) => {
  switch (provider.toLowerCase()) {
    case 'youtube':
      return oembed
        ? YouTubeEmbed.fetchVideo(id, opts)
        : YouTubeAPI.fetchVideo(id, opts)
    case 'vimeo':
      return oembed
        ? VimeoEmbed.fetchVideo(id, opts)
        : VimeoAPI.fetchVideo(id, opts)
    default:
      return undefined
  }
}

export {
  YouTubeAPI,
  VimeoAPI,
  YouTubeEmbed,
  VimeoEmbed,
  fetchVideo
}
