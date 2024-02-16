import Cookies from 'js-cookie';
import { Navigate } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';

interface props {
  children: JSX.Element[] | JSX.Element
}

const PrivateRoute = ({ children }: props) => {
  const isLoggedIn = Cookies.get('adminToken')
  if(!isLoggedIn) {
    return <Navigate to='/admin' replace/>
  }
  return children;
}

export default PrivateRoute
