import { useEffect, useState } from 'react';

import { Container, Box } from '@mui/material';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

import UserData from '../components/UserData';
import { ROUTES } from '../share/routes';

export interface CredentialResponseType {
    email: string;
    family_name: string;
    given_name: string;
    name: string;
    picture: string;
}

const Home: React.FC = () => {
    const [isAuth, setIsAuth] = useState<boolean>();
    const [decodeData, setDecodeData] = useState<CredentialResponseType>();
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuth = () => {
            const credentialHash = localStorage.getItem('token');
            if (credentialHash) {
                setIsAuth(true);
                const decodedToken: CredentialResponseType =
                    jwtDecode<CredentialResponseType>(credentialHash);
                setDecodeData(decodedToken);
            } else {
                navigate(ROUTES.LOGIN);
            }
        };
        checkAuth();
    }, [navigate]);

    return (
        <Container maxWidth="md">
            <Box
                sx={{
                    minHeight: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                }}
            >
                {isAuth && decodeData && <UserData decodeData={decodeData} isAuth={isAuth} />}
            </Box>
        </Container>
    );
};

export default Home;
