import http from '@/plugins/http'
function getBanner() {
  return http({
    url: 'http://web.wxdriver.com/web/banner/getList',
    method: 'get'
  })
}
function getArticleList(params) {
  return http({
    url: 'http://web.wxdriver.com/web/list/getList',
    method: 'get',
    params
  })
}
function getArticle(params) {
  return http({
    url: 'http://web.wxdriver.com/web/list/getArticle',
    method: 'get',
    params
  })
}

export { getBanner, getArticleList, getArticle }
