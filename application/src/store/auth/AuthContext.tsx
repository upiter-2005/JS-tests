import { createContext } from 'react';

import type { AuthDataContext } from '../../types/authTypes';

export const AuthContext = createContext<AuthDataContext>({
  token: null,
  setupToken: function (): void {},
  cleanToken: function (): void {},
  handleSuccess: function (): void {}
});
