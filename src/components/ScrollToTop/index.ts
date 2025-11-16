import { useEffect } from "react"; 
import { useLocation } from "react-router"; 
 
const ScrollToTop = () => { 
  const location = useLocation(); 
  console.log(location.pathname)
 
  useEffect(() => { 
    window.scrollTo(0, 0); 
  }, [location.pathname, location.search]); 
 
  return null;
} 
export default ScrollToTop;