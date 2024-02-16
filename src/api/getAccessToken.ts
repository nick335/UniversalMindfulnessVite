import Cookies from "js-cookie"
import showToast from "../utilsFunction/showToast"

export const getAccessToken =  () => {
  console.log('working')
  const Token = Cookies.get('adminToken')

  if(Token){
    return Token
  }
  else {
    showToast('session expired log in again', 'error')
    return null
  }
}