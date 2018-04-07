// YouTube Regex
// Valid YoUTube URLs:
// - TODO
//
// /^(?:https?:\/\/|\/\/)? | Optional URL scheme. Either http, or https, or protocol-relative
// (?:www\.|m\.)?          | Optional www or m subdomain
// (?:                     | Group for host alternatives
//   youtu\.be\/           |   Either youtu.be
//   |youtube\.com\/       |   or youtube.com
//     (?:                 |   Group for path alternatives
//       embed\/           |     Either /embed/
//       |v\/              |     or /v/
//       |watch\?v=        |     or /watch?v=
//       |watch\?.+&v=     |     or /watch?other_param&v=
//     )                   |   End path alternatives
// )                       | End host alternatives
// ([\w-]{11})             | 11 characters (Length of YouTube video ids)
// (?![\w-])/              | Rejects if id is too long
// i                       | Case-insensitive
// See: http://stackoverflow.com/a/10524505
export const YouTubeRegex = /^(?:https?:\/\/|\/\/)?(?:www\.|m\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})(?![\w-])/i

// Vimeo Regex
// Valid Vimeo URLs:
// - https://vimeo.com/2
// - https://vimeo.com/40004005
// - https://vimeo.com/ondemand/tinact/84954874
// - https://www.vimeo.com/channels/staffpicks/40004005
// - https://vimeo.com/groups/motion/videos/224196285
// - https://vimeo.com/album/3953264/video/166790294
// - https://player.vimeo.com/video/40004005
//
// /^(?:https?:\/\/|\/\/)?            | Optional URL scheme. Either http, or https, or protocol-relative
// (?:www\.|player\.)?                | Optional www or player subdomain
// vimeo.com\/                        | vimeo.com/
// (?:                                | Group for words before video id
//    (?:.*videos?\/)                 |     video/ or videos/ with anything before them
//    |(?:(?:channels|ondemand).+\/)  |     or channels with anything after or ondemand with anything after up to /
// )?                                 | Match 0 or 1 of them
// (\d+)/                             | Id's are numeric, start at 1, and increment
// i                                  | Case-insensitive
export const VimeoRegex = /^(?:https?:\/\/|\/\/)?(?:www\.|player\.)?vimeo.com\/(?:(?:.*videos?\/)|(?:(?:channels|ondemand).+\/))?(\d+)/i
