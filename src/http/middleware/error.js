export const handle404 = (req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
}

export const handleError = (err, req, res, next) => {
  const isDevelopment = process.env.NODE_ENV !== 'production'

  res
    .status(err.status || 500)
    .json({
      errors: isDevelopment ? [err] : []
    })
}
