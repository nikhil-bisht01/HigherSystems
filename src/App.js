import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import HomeOutlet from './pages/HomeOutlet';

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<HomeOutlet/>,
      children:[
        {
          path:'/',
          element:<Home/>
        }
      ]
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
