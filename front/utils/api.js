import http from '@/plugins/axios'
function getBanner(params = {}, ...options) {
  return http({
    url: 'http://127.0.0.1:7001/web/banner/getList',
    method: 'get',
    params,
    options
  })
}
export { getBanner }
