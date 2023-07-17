import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home"
import Products from "./pages/products/Products";
import User from "./pages/user/user";
import "./styles/global.scss"
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

function App() {

  const Layout =()=>{
    return (
      <div className="main">
        
        <Navbar/>
        <div className="container">
        <div className="menuContainer">
          <Menu/>
        </div>
        <div className="contentContainer">
          <Outlet/>
        </div>
        </div>
        <Footer/>
      </div>
    )
    };
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/users",
          element:<User/>
        },
        {
          path:"/products",
          element:<Products/>
        }
      ]

    }
    
  ]);


  return <RouterProvider router={router}/>
}

export default App
