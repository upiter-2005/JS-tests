import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navigation';
import Home from './pages/Home';
import Login from './pages/Login';
import { ROUTES } from './share/routes';

function App() {
    return (
        <div>
            <Navbar />

            <Routes>
                <Route path={ROUTES.home} element={<Home />} />
                <Route path={ROUTES.login} element={<Login />} />
            </Routes>
        </div>
    );
}

export default App;
