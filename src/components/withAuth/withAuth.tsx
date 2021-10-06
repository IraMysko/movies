import useWithAuth from './useWithAuth';

const WithAuth = (component: any) => {
  const { isAuth } = useWithAuth();

  if (isAuth) {
    return component;
  }

  return null;
};

export default WithAuth;
