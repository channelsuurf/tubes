const BaseError = (res, status, message) => {
  res
    .status(status)
    .json({
      errors: (Array.isArray(message) ? message : [message])
    })
}

export const BadRequestError = (res) => {
  BaseError(res, 400, 'Bad Request')
}

// 404
export const NotFoundError = (res) => {
  BaseError(res, 404, 'Not Found')
}
