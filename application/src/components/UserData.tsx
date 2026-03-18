import { Box, CardMedia, Typography } from '@mui/material';

import LogoutBtn from './LogoutButton';
import type { CredentialResponse } from '../types/authTypes';

interface UserData {
  decodeData: CredentialResponse;
}

const UserData: React.FC<UserData> = ({ decodeData }) => {
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
        <CardMedia component="img" height="140" image={decodeData.picture} alt="user avatar" />
      </div>
      <LogoutBtn />
    </Box>
  );
};

export default UserData;
