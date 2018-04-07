import { YouTubeRegex, VimeoRegex } from './regexes'

const matchesYouTube = (url) => {
  return new Promise((resolve, reject) => {
    const matches = url.match(YouTubeRegex)
    if (matches && matches[1]) {
      resolve({
        provider: 'youtube',
        id: matches[1],
        url: `https://www.youtube.com/watch?v=${matches[1]}`
      })
    } else {
      reject(new Error(`No YouTube URL Match`))
    }
  })
}

const matchesVimeo = (url) => {
  return new Promise((resolve, reject) => {
    const matches = url.match(VimeoRegex)
    if (matches && matches[1]) {
      resolve({
        provider: 'vimeo',
        id: matches[1],
        url: `https://vimeo.com/${matches[1]}`
      })
    } else {
      reject(new Error('No Vimeo URL Match'))
    }
  })
}

const matchesAny = (url) => {
  return Promise
    .any([
      matchesYouTube(url),
      matchesVimeo(url)
    ])
    .catch(Promise.AggregateError, () => undefined) // Returns 'undefined' if no URLs match
}

export const parseUrl = (url, decode = false) => {
  const decodedUrl = (decode ? decodeURI(url) : url)
  return matchesAny(decodedUrl)
}
