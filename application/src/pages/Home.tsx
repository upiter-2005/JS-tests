import { Container, Box, Typography } from "@mui/material";

const Home: React.FC = () => {
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
        <Typography variant="h1" gutterBottom>
          Home page
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;
