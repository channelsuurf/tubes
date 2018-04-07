const Response = (res, status, payload) => {
  res
    .status(status)
    .json({...payload})
}

const StructuredResponse = (res, status, data) => {
  Response(res, status, { status, data })
}

// 200
export const SuccessResponse = (res, data) => {
  StructuredResponse(res, 200, data)
}
