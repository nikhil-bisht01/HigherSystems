// import React, { useContext } from 'react';
// import { UserDataContext } from '../context/UserContext';
// import useVerifyToken from '../hooks/useVerifyToken';
// import { useNavigate } from 'react-router-dom';

// const DashboardUser = () => {
//   useVerifyToken();
//   const { user } = useContext(UserDataContext);
//   const navigate = useNavigate()
  
//   const handleLogout = () => {
//     localStorage.removeItem("higherIndia");
//     navigate("/");
//   }

//   return (
//     <div className="min-h-screen bg-[#FBFCF8] flex flex-col items-center py-12 px-4">
//       <div className='absolute right-5 top-5'>
//       <button onClick={()=>navigate("/")} className='bg-[#005AE6] mr-2 border-2 border-[#005AE6] px-4 py-2 rounded-lg text-white hover:bg-blue-700 transition duration-300 text-base'>Go To Home</button>
//       <button onClick={handleLogout} className='bg-[#005AE6] border-2 border-[#005AE6] px-4 py-2 rounded-lg text-white hover:bg-blue-700 transition duration-300 text-base'>Log Out</button>
//       </div>
//       {/* Welcome Section */}
//       <div className="bg-white w-full max-w-3xl rounded-lg shadow-lg p-8 mb-6">
//         <h1 className="text-2xl font-bold text-gray-800 text-center">
//           Welcome Back, <span className="text-blue-600">{user?.customer_name}</span>!
//         </h1>
//         <p className="text-gray-600 text-center mt-2">
//           We're glad to see you again. Stay tuned for exciting updates!
//         </p>
//       </div>

//       {/* Coming Soon Section */}
//       <div className="flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 text-white w-full max-w-3xl rounded-lg shadow-lg py-24 px-8">
//         <h2 className="text-4xl font-extrabold">Coming Soon</h2>
//         <p className="text-lg mt-4">
//           We're working hard to bring you new features. Stay connected for more updates!
//         </p>
//       </div>
//     </div>
//   );
// };

// export default DashboardUser;




import React, { useContext } from 'react';
import { UserDataContext } from '../context/UserContext';
import useVerifyToken from '../hooks/useVerifyToken';
import { useNavigate } from 'react-router-dom';
import DashboardView from '../Components/DashboardView'

export default function DashboardPartner() {
  useVerifyToken();
    const { user } = useContext(UserDataContext);
    console.log(user);
    
    const navigate = useNavigate()
    
    const handleLogout = () => {
      localStorage.removeItem("higherIndia");
      navigate("/");
    }
  return (
    <div>
      <DashboardView user={user}  onLogout={handleLogout}/>
    </div>
  )
}

