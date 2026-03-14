import type { CredentialResponse } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

import type { CredentialResponseType } from '../pages/Home';
import { ROUTES } from '../share/routes';

export function useAuthSuccess() {
    const navigate = useNavigate();
    const handleSuccess = (credentialResponse: CredentialResponse) => {
        const crd = credentialResponse.credential;
        if (crd) {
            const decoded: CredentialResponseType = jwtDecode(crd);
            localStorage.setItem('token', crd);
            if (decoded) navigate(ROUTES.HOME);
        }
    };

    return { handleSuccess };
}
