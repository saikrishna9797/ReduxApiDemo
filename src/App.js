
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Users from './components/Users';
import UsersCount from './components/UsersCount';


import RootLayout from './RootLayout';

function App() {

  const router  = createBrowserRouter([
    {
      path:"/",
      element:<RootLayout/>,
      children:
      [
        {
          path:"/users",
          element:<Users/>
        },
        {
          path:"/usercount",
          element:<UsersCount/>
        },
        
      ],
    }
  ])


  return (
    <div className="">
      <h1>user app</h1>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
