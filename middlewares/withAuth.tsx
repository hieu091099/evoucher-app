import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {navigate} from '../navigations/services';
import routes from '../utils/routes';
import Loading from '../components/Loading';

const withAuth = (WrappedComponent: any)  => {
  const EnhancedComponent = ({isLoggedIn, ...props}: any) => {
    useEffect(() => {
      if (isLoggedIn) {
        navigate(routes.MAIN_STACK, {screen: routes.MAIN.HOME});
      } else {
        navigate(routes.AUTH_STACK, {screen: routes.AUTH.LOGIN});
      }
    }, [isLoggedIn]);
    return <WrappedComponent {...props} />;
  };
  const mapStateToProps = (state: any) => ({
    isLoggedIn: state.auth.isLoggedIn,
  });
  return connect(mapStateToProps)(EnhancedComponent,);
};

export default withAuth;
