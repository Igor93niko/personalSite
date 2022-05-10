import {BrowserRouter as Router} from "react-router-dom";
import { useRoutes } from "./routes/routes";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { useAuth } from "./hooks/authHooks";
import { AuthContext } from "./context/authcontext";
import Loader from "./components/Loader/Loader";
function App() {

  const {login,logout,token,ready} = useAuth();
  const isAuth = !!token;
  const router = useRoutes(isAuth);
  if (!ready){
    return(<Loader/>)
  }
  return (
    <AuthContext.Provider value={{
      login,
      logout,
      token,
      isAuth
    }}>
      <Router>
        <Navbar/>
        {router}
        <Footer/>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
