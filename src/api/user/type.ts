// 获取请求传入的参数的type
export interface dataType {
  username: string;
  password: string;
}

// 获取login请求返回的数据的type
interface loginDataType {
  token: string
}

// 获取login请求返回的数据的type
export interface loginResponseDataType {
  code: number;
  data: loginDataType
}

interface checkUserDataType {
  userId: number,
  avatar: string
  username: string,
  password: string,
  desc: string,
  roles: string[],
  buttons: string[],
  routes: string[],
  token: string,
}

interface infoDataType {
  checkUser: checkUserDataType
}

// 获取info请求返回的数据的type
export interface infoResponseData {
  code: number;
  data: infoDataType
}