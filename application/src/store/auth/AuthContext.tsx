import { createContext } from 'react';

import type { AuthDataContext } from '../../types/authTypes';

export const AuthContext = createContext<AuthDataContext | undefined>(undefined);
