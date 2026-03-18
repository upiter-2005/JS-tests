import type { ReactNode } from 'react';

import type { CredentialResponse } from '@react-oauth/google';

export interface CredentialResponseData {
  email?: string;
  family_name?: string;
  given_name?: string;
  name?: string;
  picture?: string;
}

export interface AuthDataContext {
  token: CredentialResponseData | null;
  setupToken: () => void;
  cleanToken: () => void;
  handleSuccess: (credentialResponseData: CredentialResponse) => void
}

export interface AuthProviderProps {
  children: ReactNode;
}
