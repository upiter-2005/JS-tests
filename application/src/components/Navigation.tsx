import { Toolbar, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

 const Navbar:React.FC = () => {
  return (
      <Toolbar>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button color="primary" component={Link} to="/">
            Home
          </Button>
          <Button color="primary" component={Link} to="/login">
            Login
          </Button>
        </Box>
      </Toolbar>
  );
}
export default Navbar;