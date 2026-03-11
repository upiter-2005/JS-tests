import { Button } from '@mui/material';
import { googleLogout } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

const LogoutButton: React.FC = () => {
    const navigate = useNavigate();

    const logout = () => {
        googleLogout();
        localStorage.removeItem('token');
        navigate('/login');
    };

    return <Button onClick={logout}>Logout</Button>;
};

export default LogoutButton;
