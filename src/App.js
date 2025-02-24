import { createBrowserRouter, RouterProvider, useLocation, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import HomeOutlet from './pages/HomeOutlet';
import AboutUs from './pages/AboutUs';
import SignUp from './pages/SignUp';
import DashboardPartner from './pages/DashboardPartner';
import OtpVerification from './pages/OtpVerification';
import DashboardUser from './pages/DashboardUser';
import Services from './pages/Services';
import { useEffect } from 'react';
import Product from './pages/Product';
import DashBoardContant2 from './Components/DashBoardContant2';
import IndividualServicePage from './pages/IndividualServicePage';

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
          element:<IndividualServicePage/>
        },
        {
          path:"/our-services/product/:service",
          element:<IndividualServicePage/>
        }
       
      ]
    },
    {
      path:'/user-dashboard',
      element:<DashboardUser/>
      
    },
    {
      path:'/services/:id',
      element:<DashBoardContant2/>
    }
  ]);

  return (
    <div className="App h-screen overflow-auto">
      <RouterProvider router={router} future={{ scrollRestoration: true }}/>
  
    </div>
  );
}

export default App;