import { useEffect, useState, type ReactNode } from 'react';

import type { CredentialResponse } from '@react-oauth/google';
import { googleLogout } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from './AuthContext';
import { ROUTES } from '../../share/routes';
import type { CredentialResponseData } from '../../types/authTypes';
 interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const navigate = useNavigate();
  const [token, setToken] = useState<CredentialResponseData>({});

  const cleanToken = () => {
    googleLogout();
    localStorage.removeItem('token');
    navigate(ROUTES.LOGIN);
  };

  const handleSuccess = (credentialResponseData: CredentialResponse) => {
    const crd = credentialResponseData.credential;
    if (crd) {
      const decoded: CredentialResponse = jwtDecode(crd);
      localStorage.setItem('token', crd);
      if (decoded) navigate(ROUTES.HOME);
    }
  };

  useEffect(() => {
      const setupToken =  () => {
        const credentialHash = localStorage.getItem('token');
        if (credentialHash) {
          const decodedToken: CredentialResponseData = jwtDecode<CredentialResponseData>(credentialHash);
          setToken(decodedToken);
        } else {
          navigate(ROUTES.LOGIN);
        }
      }
      setupToken()
  }, [])

  return (
    <AuthContext.Provider value={{ token, cleanToken, handleSuccess }}>
      {children}
    </AuthContext.Provider>
  );
};
