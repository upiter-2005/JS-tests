import { useState } from 'react';

import { googleLogout } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from './AuthContext';
import { ROUTES } from '../../share/routes';
import type { AuthProviderProps, CredentialResponse } from '../../types/authTypes';

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const navigate = useNavigate();
  const [token, setToken] = useState<CredentialResponse>({});

  const setupToken = () => {
    const credentialHash = localStorage.getItem('token');
    if (credentialHash) {
      const decodedToken: CredentialResponse = jwtDecode<CredentialResponse>(credentialHash);
      setToken(decodedToken);
    } else {
      navigate(ROUTES.LOGIN);
    }
  };

  const cleanToken = () => {
    googleLogout();
    localStorage.removeItem('token');
    navigate(ROUTES.LOGIN);
  }

  return <AuthContext.Provider value={{ token, setupToken, cleanToken }}>{children}</AuthContext.Provider>;
};
