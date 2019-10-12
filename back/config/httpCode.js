// TODO: httpCodeHash.code
module.exports = {
  continue: { code: 100, message: 'Continue' },
  ok: { code: 200, message: 'OK' },
  created: { code: 201, message: 'Created' },
  noContent: { code: 204, message: 'No Content' },
  movedPermanently: { code: 301, message: 'Moved Permanently' },
  found: { code: 302, message: 'Found' },
  notModified: { code: 304, message: 'Not Modified' },
  badRequest: { code: 400, message: 'Bad Request' },
  unauthorized: { code: 401, message: 'Unauthorized' },
  forbidden: { code: 403, message: 'Forbidden' },
  notFound: { code: 404, message: 'Not Found' },
  conflict: { code: 409, message: 'Conflict' },
  unprocessable: { code: 422, message: 'Unprocessable Entity' },
  serverError: { code: 500, message: 'serverError' },
  otherServerError: { code: 502, message: 'Bad Gateway' },
  errors,
}