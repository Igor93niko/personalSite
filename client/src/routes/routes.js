import { Routes,Route} from "react-router-dom";
import ListRoutes from "./listRoutes";

export const useRoutes = () => {
  return(
    <Routes>
      {ListRoutes.map(route=>{
        return(
          <Route element={route.element} path={route.path} key={route.path}/>
        )})}
    </Routes>
  )
}