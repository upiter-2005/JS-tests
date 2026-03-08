import { Button } from "@mui/material";
import { googleLogout } from "@react-oauth/google";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LogoutBtn: React.FC = () => {
    const navigate = useNavigate();
    const [isAuth, setIsAuth] = useState<string | null>(null);
    
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) { 
          setIsAuth(token);
        }
      }, [])
      
    const logout = () => {
        googleLogout();
        localStorage.removeItem("token");
        navigate("/login")
    }
    if(!isAuth) return;
    return (
        <Button onClick={logout}>Logout</Button>
    );
};

export default LogoutBtn;
