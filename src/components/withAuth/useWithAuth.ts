import { useTypedSelector } from '../../hook/useTypedSelector';
import { selectIsAuth } from '../../store/auth/selectors';

const useWithAuth = () => {
  const isAuth = useTypedSelector(selectIsAuth);

  return {
    isAuth,
  };
};

export default useWithAuth;
