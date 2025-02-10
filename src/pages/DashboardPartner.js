import React from 'react';

const DashboardPartner = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      {/* Welcome Section */}
      <div className="bg-white w-full max-w-3xl rounded-lg shadow-lg p-8 text-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Welcome to the Partner Dashboard!
        </h1>
        <p className="text-gray-600 mt-2">
          We're excited to collaborate with you. New features are on their way!
        </p>
      </div>

      {/* Coming Soon Section */}
      <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white w-full max-w-3xl rounded-lg shadow-lg py-24 px-8 text-center">
        <h2 className="text-4xl font-extrabold">Coming Soon</h2>
        <p className="text-lg mt-4">
          The Partner Dashboard is under construction. Stay tuned for updates and exciting tools!
        </p>
      </div>
    </div>
  );
};

export default DashboardPartner;


// import React from 'react'
// import DashboardView from '../Components/DashboardView'

// export default function DashboardPartner() {
//   return (
//     <div>
//       <DashboardView/>
//     </div>
//   )
// }
