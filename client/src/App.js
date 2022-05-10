import {BrowserRouter as Router} from "react-router-dom";
import { useRoutes } from "./routes/routes";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
function App() {
  const router = useRoutes();
  return (
    <Router>
      <Navbar/>
      {router}
      <Footer/>
    </Router>
  );
}

export default App;
