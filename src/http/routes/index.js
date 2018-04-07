import express from 'express'

import {
  BadRequestError
} from '../responses/error'

const router = express.Router()

router
  .route('/fetch')
  .post((req, res, next) => {
    if (!req.body.url) {
      BadRequestError(res)
    }

    // TODO:
    // - parse the URL, fetch its data, and return that data
  })

router
  .route('/parse')
  .post((req, res, next) => {
    if (!req.body.url) {
      BadRequestError(res)
    }

    // TODO:
    // - parse the URL and return the parsed object form
  })

router
  .route('/:provider/:id')
  .get((req, res, next) => {
    // TODO:
    // - fetch the data at the given provider and id
  })

export default router
