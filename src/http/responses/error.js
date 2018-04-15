const BaseError = (res, status, message) => {
  res
    .status(status)
    .json({
      errors: (Array.isArray(message) ? message : [message])
    })
}

// 400
export const BadRequestError = (res) => {
  BaseError(res, 400, 'Bad Request')
}

// 404
export const NotFoundError = (res) => {
  BaseError(res, 404, 'Not Found')
}

// 422
export const UnprocessableEntityError = (res) => {
  BaseError(res, 422, 'Unprocessable Entity')
}

// 422
export const UnknownProviderError = (res) => {
  BaseError(res, 422, 'Unknown Provider')
}
