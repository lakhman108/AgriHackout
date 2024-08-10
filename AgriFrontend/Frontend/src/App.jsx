
import './App.css'
import { Button } from './components/ui/button'
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import AppLayout from "./layout/app-layout"
import Landing from './pages/Landing'
import AboutUs from './pages/aboutus'
import Login from './pages/login'
import SignUp from './pages/signup'
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
   
      {
        path: "/AboutUs",
        element: (
            <AboutUs />
        ),
      },
      {
        path:"/Login",
        element: <Login />,
      },
      {
        path:"/SignUp",
        element: <SignUp/>,
      }
    ],
  },
]);


function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
