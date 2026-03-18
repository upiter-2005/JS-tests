import { useState } from 'react';

import type { CredentialResponse } from '@react-oauth/google';
import { googleLogout } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from './AuthContext';
import { ROUTES } from '../../share/routes';
import type { AuthProviderProps, CredentialResponseData } from '../../types/authTypes';

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const navigate = useNavigate();
  const [token, setToken] = useState<CredentialResponseData>({});

  const setupToken = () => {
    const credentialHash = localStorage.getItem('token');
    if (credentialHash) {
      const decodedToken: CredentialResponseData = jwtDecode<CredentialResponseData>(credentialHash);
      setToken(decodedToken);
    } else {
      navigate(ROUTES.LOGIN);
    }
  };

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

  return (
    <AuthContext.Provider value={{ token, setupToken, cleanToken, handleSuccess }}>
      {children}
    </AuthContext.Provider>
  );
};
