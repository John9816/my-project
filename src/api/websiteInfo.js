import request from '../utils/request'

export default {
  getUserCount () {
    return request({
      url: `api/admin/web_site_info/register_count`,
      method: 'get'
    })
  },
  getClubCount () {
    return request({
      url: `api/admin/web_site_info/club_count`,
      method: 'get'
    })
  },

  getActivityCount () {
    return request({
      url: `api/admin/web_site_info/activity_count`,
      method: 'get'
    })
  },

  getLoginLog () {
    return request({
      url: `api/admin/web_site_info/loginLog`,
      method: 'get'
    })
  },

  getSeoInfo () {
    return request({
      url: `/admin/web_site_info/seo`,
      method: 'get'
    })
  },
  getWebsiteTitle () {
    return request({
      url: `/admin/web_site_info/title`,
      method: 'get'
    })
  },

  updateSeoInfo (description, keywords) {
    return request({
      url: `/admin/web_site_info/seo?description=${description}&keywords=${keywords}`,
      method: 'put'
    })
  },

  updateWebsiteTitle (title) {
    return request({
      url: `/admin/web_site_info/title/${title}`,
      method: 'put'
    })
  }

}
