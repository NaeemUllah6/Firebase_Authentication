import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Cookies from "js-cookie";

const useAuthRedirect = () => {
  const navigate = useNavigate();
  const location = useLocation(); 

  useEffect(() => {
    const token = Cookies.get("token");

    if (token) {
      
      if (location.pathname === "/login") {
        navigate("/dashboard");
      }
    } else {
      
      if (location.pathname !== "/login") {
        navigate("/login");
      }
    }
  }, [navigate, location]);
};

export default useAuthRedirect;

