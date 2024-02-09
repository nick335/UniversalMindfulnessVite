import Cookies from "js-cookie"

export const getAccessToken = async () => {
  const Token = Cookies.get('admin')

  if(Token){
    const AdminToken = JSON.parse(Token)
    return AdminToken.accessToken
  }
}