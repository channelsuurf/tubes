const Response = (res, status, payload) => {
  res
    .status(status)
    .json({...payload})
}

const StructuredResponse = (res, status, data, meta = undefined) => {
  Response(res, status, { status, data, meta })
}

// 200
export const SuccessResponse = (res, data, meta = undefined) => {
  StructuredResponse(res, 200, data, meta)
}
