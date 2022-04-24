import {BrowserRouter as Router} from "react-router-dom";
import { useRoutes } from "./routes/routes";
import Navbar from "./components/Navbar/Navbar";
function App() {
  const router = useRoutes();
  return (
    <Router>
      <Navbar/>
      {router}
    </Router>
  );
}

export default App;
