import { Toolbar, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

import { ROUTES } from '../share/routes';

const Navbar: React.FC = () => {
    return (
        <Toolbar>
            <Box sx={{ display: 'flex', gap: 2 }}>
                <Button color="primary" component={Link} to={ROUTES.HOME}>
                    Home
                </Button>
                <Button color="primary" component={Link} to={ROUTES.LOGIN}>
                    Login
                </Button>
            </Box>
        </Toolbar>
    );
};
export default Navbar;
