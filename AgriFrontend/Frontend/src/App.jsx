
import './App.css'
import { Button } from './components/ui/button'
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import AppLayout from "./layout/app-layout"
import Landing from './pages/Landing'
import AboutUs from './pages/aboutus'
import Login from './pages/login'
import SignUp from './pages/signup'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Profile from './pages/profile';

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
      },
      {
        path:'/Profile',
        element:<Profile/>
      }
    ],
  },
]);


function App() {

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
              position="top-left"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
              />    

      </>
  )
}

export default App
