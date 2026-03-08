import { Container, Box, Button } from "@mui/material";

const Login: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button variant="contained" size="large">
          Авторизироваться через Google
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
