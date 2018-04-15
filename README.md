# tubes

> The Internet is a series of tubes.

Tubes is an online video API proxy service. It is a standalone service that allows you to easily fetch video metadata from multiple online video service providers without the need to directly integrate those APIs into your application.

Given a video URL, tubes will attempt to parse and match it to a known provider and then fetch its metadata.

It supports both 3rd party API and [oEmbed](https://oembed.com/) providers.

### Supported Providers

#### API
- [Vimeo](https://developer.vimeo.com/api/reference/videos)
- [YouTube](https://developers.google.com/youtube/v3/docs/videos)

#### oEmbed
- Vimeo: [`https://vimeo.com/api/oembed.json`](https://developer.vimeo.com/apis/oembed)
- YouTube: `https://www.youtube.com/oembed`

### Disclaimer

Note, the use of 3rd party APIs is subject to their particular terms of service, usage agreements, branding guidelines, and/or best practices:
- [Vimeo Guidelines for Developers](https://developer.vimeo.com/guidelines)
- [YouTube API Services Terms of Service](https://developers.google.com/youtube/terms/api-services-terms-of-service)

## Getting Started

### Usage

#### API

Coming Soon.

#### Deployment

Tubes is intended to be used as an internal service, run under a private network. No attempt is made to prevent malicious actors from using up your API quotas. Additionally, some API terms may forbid or limit public indirect access to their API.

`npm start` will build and run the production server. You can set the port the service runs on with the `PORT` environment variable:

```
PORT=8080 npm start
```

A `Dockerfile` is also provided for use in a container environment.

### Development

Coming Soon.

### Testing

Coming Soon.

### Contributing

Coming Soon.

### License

Coming Soon.
