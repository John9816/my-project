import request from '../utils/request'
export default{

  roleList(){
        return request({
          url:'/api/admin/role/list',
          method:'get'
        })
  },
  powerAllList(){
    return request({
      url:'/api/admin/power/list',
      method:'get'
    })
  },
  roleManage(roleId,idStr){
    return request({
      url:'/api/admin/role/manage/'+roleId+'/'+idStr,
      method:'post'
    })
  },
  getPersonnelList(page,size,status){
    return request({
      url: '/api/admin/personnelList/'+page+'/'+size,
      method: 'get',
      params:{
        status:status,
        keyWords:''
      }
    })
  },

  roleIssue(userId,roleId){
    return request({
      url:'/api/admin/role/issue/'+userId+'/'+roleId,
      method:'post'
    })
  },

  carouselList(){
    return request({
      url:'/api/portal/list/carousel',
      method:'get'
    })
  },

  carouselDelete(id){
    return request({
      url:'/api/admin/delete/carousel/'+id,
      method:'post'
    })
  },

  saveAbout(settings){
    return request({
      url:'/api/admin/save/about',
      method:'post',
      data:settings
    })
  },
  getAbout(){
  return request({
    url:'/api/admin/get/about',
    method:'get'
  })
},


}
