import express from 'express'
import isURL from 'validator/lib/isURL'

import { fetchVideo } from '../../providers'
import { parseURL } from '../../providers/parse'
import {
  SuccessResponse
} from '../responses'
import {
  BadRequestError,
  NotFoundError,
  UnknownProviderError
} from '../responses/error'

const router = express.Router()

router
  .route('/fetch')
  .post(async (req, res, next) => {
    if (!req.body.url || !isURL(req.body.url)) {
      BadRequestError(res)
    }

    const parsed = await parseURL(req.body.url)
    if (!parsed) {
      UnknownProviderError(res)
    }

    const data = fetchVideo(parsed.provider, parsed.id)
    if (!data) {
      NotFoundError(res)
    }

    SuccessResponse(res, data, parsed)
  })

router
  .route('/parse')
  .post(async (req, res, next) => {
    if (!req.body.url || !isURL(req.body.url)) {
      BadRequestError(res)
    }

    const parsed = await parseURL(req.body.url)
    if (!parsed) {
      UnknownProviderError(res)
    }

    SuccessResponse(res, parsed)
  })

router
  .route('/:provider/:id')
  .get((req, res, next) => {
    const data = fetchVideo(req.params.provider, req.params.id)
    if (!data) {
      if (data === undefined) {
        UnknownProviderError(res)
      }
      NotFoundError(res)
    }

    SuccessResponse(res, data)
  })

router
  .route('/oembed/fetch')
  .post(async (req, res, next) => {
    if (!req.body.url || !isURL(req.body.url)) {
      BadRequestError(res)
    }

    const parsed = await parseURL(req.body.url)
    if (!parsed) {
      UnknownProviderError(res)
    }

    const data = fetchVideo(parsed.provider, parsed.id, true)
    if (!data) {
      NotFoundError(res)
    }

    SuccessResponse(res, data, parsed)
  })

router
  .route('/oembed/parse')
  .post((req, res, next) => {
    if (!req.body.url || !isURL(req.body.url)) {
      BadRequestError(res)
    }

    // TODO: parse the URL and return a URL which can be visited to retrieve the oembed data
  })

export default router
