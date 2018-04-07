import YouTubeAPIProvider from './api/YouTube'
import VimeoAPIProvider from './api/Vimeo'

import YouTubeEmbedProvider from './oembed/YouTube'
import VimeoEmbedProvider from './oembed/Vimeo'

const YouTubeAPI = new YouTubeAPIProvider()
const VimeoAPI = new VimeoAPIProvider()

const YouTubeEmbed = new YouTubeEmbedProvider()
const VimeoEmbed = new VimeoEmbedProvider()

export {
  YouTubeAPI,
  VimeoAPI,
  YouTubeEmbed,
  VimeoEmbed
}
