import Home from "./pages/home/Home"
import Products from "./pages/products/Products";
import User from "./pages/user/user";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
       <Home/>
      ),
    }, 
    {
      path: "/user",
      element: (
       <User/>
      ),
    },
    {
      path: "/products",
      element: (
       <Products/>
      ),
    },
    
  ]);


  return <RouterProvider router={router}/>
}

export default App
