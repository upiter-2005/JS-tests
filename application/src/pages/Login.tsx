import { useState } from 'react';

import { Container, Box } from '@mui/material';
import { GoogleLogin } from '@react-oauth/google';

import CustomizedSnackbars from '../components/Notification';
import { useAuthSuccess } from '../hooks/useAuthSuccess';

const Login: React.FC = () => {
  const { handleSuccess } = useAuthSuccess();
  const [openError, setOpenError] = useState(false);

  const handleError = () => {
    setOpenError(true);
  };

  return (
    <>
      <Container maxWidth="md">
        <Box
          sx={{
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
        </Box>
      </Container>
      <CustomizedSnackbars isOpen={openError} />
    </>
  );
};

export default Login;
