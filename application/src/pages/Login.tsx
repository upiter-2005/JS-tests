import { Container, Box } from "@mui/material";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {

  const navigate = useNavigate();
  const handleSuccess = (credentialResponse: any) => {
    const decoded: credentialResponseType = jwtDecode(credentialResponse.credential);
    localStorage.setItem("token", credentialResponse.credential);
    if(decoded) navigate("/");
  };

  const handleError = () => {
    console.log("Login Failed");
  };

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
        <GoogleLogin
          onSuccess={handleSuccess}
          onError={handleError}
        />
      </Box>
    </Container>
  );
};

export default Login;
