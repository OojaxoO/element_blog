import request from '../utils/request'
var qs = require('qs');

export function getInfo(args) {
  let argStr = qs.stringify(args)  
  return request({
    url: `/login_info/?${argStr}`,
    method: 'get',
  })
}