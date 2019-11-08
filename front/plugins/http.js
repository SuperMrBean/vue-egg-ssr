import axios from 'axios'
const qs = require('qs')
axios.defaults.baseURL = '../'
axios.defaults.timeout = 1000 * 60
axios.defaults.transformRequest = [data => qs.stringify(data)]
const myAxios = axios.create({
  // ...
})
myAxios.interceptors.request.use(
  function(config) {
    // 在发送请求之前做些什么
    return config
  },
  function(error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)
myAxios.interceptors.response.use(
  function(response) {
    return response.data
  },
  function(error) {
    // ...
  }
)
const http = ({ url, method, params, ...options }) => {
  let userRequestData = !!['PUT', 'POST', 'PATCH'].find(
    postMethod => method.toUpperCase() === postMethod
  )

  let axiosParams = Object.assign(
    {
      method,
      url,
      data: userRequestData ? params : null,
      params: userRequestData ? null : params,
      headers: {},
      transformRequest: []
    },
    options
  )
  const contentTypeKey =
    Object.keys(axiosParams.headers).find(
      key => key.toLowerCase() === 'content-type'
    ) || ''
  const contentType = contentTypeKey ? axiosParams.headers[contentTypeKey] : ''
  if (contentType.toLowerCase() !== 'application/json') {
    const transformRequest = [data => qs.stringify(data)]
    axiosParams.transformRequest = transformRequest
  }
  return myAxios(axiosParams)
}
export default http
