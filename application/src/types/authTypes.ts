import type { ReactNode } from 'react';

export interface CredentialResponse {
  email?: string;
  family_name?: string;
  given_name?: string;
  name?: string;
  picture?: string;
}

export interface AuthDataContext {
  token: CredentialResponse | null;
  setupToken: () => void;
  cleanToken: () => void;
}

export interface AuthProviderProps {
  children: ReactNode;
}
