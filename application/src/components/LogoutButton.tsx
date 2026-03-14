import { Button } from '@mui/material';
import { googleLogout } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '../share/routes';

const LogoutButton: React.FC = () => {
    const navigate = useNavigate();

    const logout = () => {
        googleLogout();
        localStorage.removeItem('token');
        navigate(ROUTES.LOGIN);
    };

    return <Button onClick={logout}>Logout</Button>;
};

export default LogoutButton;
