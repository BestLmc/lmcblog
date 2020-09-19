import request from '../../http'

const home = {
  /**
   * 信息
   */
  getHomeInfo() {
    return request({
      url: '/home/getHomeInfo',
      method: 'get'
    })
  },
  
}
export { home };
