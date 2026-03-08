import { Container, Box, Typography } from "@mui/material";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import LogoutBtn from "../components/LogoutBtn";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const [isAuth, setIsAuth] = useState<string | null>(null);
  const [decodeData, setDecodeData] = useState<credentialResponseType>();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsAuth(token);
      const decodedToken: credentialResponseType =
        jwtDecode<credentialResponseType>(token);
      setDecodeData(decodedToken);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {isAuth && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h4" gutterBottom>
              {decodeData?.family_name} {decodeData?.given_name}
            </Typography>
            <div>{decodeData?.email}</div>
            <div>
              <img src={decodeData?.picture} alt="Auth image" />
            </div>
            <LogoutBtn />
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default Home;
