import Main from "../pages/Main";
import Animation from "../pages/Animation";
import Questions from "../pages/Questions";


const ListRoutes = [
  {element:<Main/>,path:'/',private:false},
  {element:<Animation/>,path:'/animation',private:false},
  {element:<Questions/>,path:'/admin',private:true},
]

export default ListRoutes;