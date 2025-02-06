import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import HomeOutlet from './pages/HomeOutlet';
import AboutUs from './pages/AboutUs';
// import Login from './pages/Login';
import SignUp from './pages/SignUp';
import DashboardPartner from './pages/DashboardPartner';
import OtpVerification from './pages/OtpVerification';
import DashboardUser from './pages/DashboardUser';
import Services from './pages/Services';
import { useEffect } from 'react';
import Product from './pages/Product';

function App() {

  useEffect(()=>{
    document.body.style.zoom = "100%";
  },[])

  const router = createBrowserRouter([
    {
      path:"/",
      element:<HomeOutlet/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:"/about-us",
          element:<AboutUs/>
        },
        {
          path:"/auth/secure/otp-verify",
          element:<OtpVerification/>
        },
        {
          path:"/auth/:options",
          element:<SignUp/>
        },
        {
          path:"/partner",
          element:<DashboardPartner/>
        },
        {
          path:"/our-services/:options",
          element:<Services/>
        },
        {
          path:"/product/:options",
          element:<Product/>
        }
      ]
    },
    {
      path:'/user-dashboard',
      element:<DashboardUser/>
    }
  ]);

  return (
    <div className="App h-screen overflow-auto">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;