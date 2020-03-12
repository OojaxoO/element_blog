import request from '../utils/request'
var qs = require('qs');

export function getBlogs(args) {
  let argStr = qs.stringify(args)  
  return request({
    url: `/blog/?${argStr}`,
    method: 'get',
  })
}

export function getBlog(id) {
  return request({
    url: `/blog/${id}`,
    method: 'get',
  })
}

export function updateBlog(data) {
  return request({
    url: `/blog/${data.id}`,
    method: 'post',
    data: data
  })
}

export function createBlog(data) {
  return request({
    url: "/blog/",
    method: 'post',
    data: data
  })
}