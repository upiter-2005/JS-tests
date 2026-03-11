import { Box, CardMedia, Typography } from '@mui/material';

import LogoutBtn from './LogoutButton';
import type { CredentialResponseType } from '../pages/Home';

interface IUserData {
    decodeData: CredentialResponseType;
    isAuth: boolean;
}

const UserData: React.FC<IUserData> = ({ decodeData, isAuth = false }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Typography variant="h4" gutterBottom>
                {decodeData.family_name} {decodeData.given_name}
            </Typography>
            <div>{decodeData.email}</div>
            <div>
                <CardMedia
                    component="img"
                    height="140"
                    image={decodeData.picture}
                    alt="user avatar"
                />
            </div>
            {isAuth && <LogoutBtn />}
        </Box>
    );
};

export default UserData;
