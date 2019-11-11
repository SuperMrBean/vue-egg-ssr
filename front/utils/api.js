import http from '@/plugins/http'
function getBanner() {
  return http({
    url: 'http://127.0.0.1:7001/web/banner/getList',
    method: 'get'
  })
}
function getArticleList(params) {
  return http({
    url: 'http://127.0.0.1:7001/web/list/getList',
    method: 'get',
    params
  })
}
function getArticle(params) {
  return http({
    url: 'http://127.0.0.1:7001/web/list/getArticle',
    method: 'get',
    params
  })
}

export { getBanner, getArticleList, getArticle }
