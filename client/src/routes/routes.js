import { Routes,Route} from "react-router-dom";
import ListRoutes from "./listRoutes";
import AuthPages from "../pages/AuthPages";
export const useRoutes = (isAuth) => {

  if (isAuth){
    return(
      <Routes>
        {ListRoutes.map(route=>{
          return(
            <Route element={route.element} path={route.path} key={route.path}/>
          )})}
      </Routes>
    )
  }
  return(
    <Routes>
      {ListRoutes.map(route=>{
        return(
          <Route element={route.private?<AuthPages/>:route.element} path={route.path} key={route.path}/>
        )})}
    </Routes>
  )

}