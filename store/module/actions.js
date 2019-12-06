// import request from '@/service'

export const banner = async (store, params) => {
  return await request.get('/api/v1/get_banner', { params: params })
}