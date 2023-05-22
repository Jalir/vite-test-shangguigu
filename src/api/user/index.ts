import request from '../../../utils/request'
import type { dataType, infoResponseData, loginResponseDataType } from '@/api/user/type'

enum API {
  LOGIN_URL = '/user/login',
  USER_INFO_URL = '/user/info'
}

export const reqLogin = (data: dataType) => request.post<any, loginResponseDataType>(API.LOGIN_URL, data)

export const reqUserInfo = () => request.get<any, infoResponseData>(API.USER_INFO_URL)
