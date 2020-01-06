import request from '@/utils/request'

// 获取基本信息
export function getProfessorInformation (parems) {
  return request({
    url: '/AIshow/AIPlatform/AuthorInfo',
    method: 'post',
    params: parems
  })
}

// 获取网络图关系数据
export function getRelationData(parems) {
  return request({
    url: 'AIshow/AIPlatform/AuthorRelation',
    method: 'post',
    params: parems
  })
}

// 获取论文数据(时间递增)
export function getPapersData(parems) {
  return request({
    url: 'AIshow/AIPlatform/PaperInfoIncrease',
    method: 'post',
    params: parems
  })
}

// 获取论文数据(时间递减)
export function getPapersDataJian(parems) {
  return request({
    url: 'AIshow/AIPlatform/PaperInfoDESC',
    method: 'post',
    params: parems
  })
}
