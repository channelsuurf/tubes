import path from 'path'

import express from 'express'

import routes from './http/routes'
import { handle404, handleError } from './http/middleware/error'

const API_ROOT = '/v1'
const DEFAULT_PORT = 3030

const api = express()

api.use(express.json()) // Body Parsing - JSON

// Define Routes
api.use(API_ROOT, routes)

// Catch 404 and forward to error handler
api.use(handle404)

// Error Handling Middleware
api.use(handleError)

api.set('port', normalizePort(process.env.PORT || DEFAULT_PORT))

function normalizePort (value) {
  const port = parseInt(value, 10)
  if (isNaN(port)) { return value } // Named Pipe
  if (port >= 0) { return port } // Port Number
  return false
}

export default api
