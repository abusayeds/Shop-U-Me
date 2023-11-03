
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './layouts/Main';
import Products from './component/Products/Products';

import About from './component/About/About';
import Order from './component/Order/Order';
import Inventory from './component/Inventory/Inventory';
import { orderAndProductLoader } from './loader/OrderAndProductsLoader';






function App() {

  const router =createBrowserRouter([
     {
     path:'/',
     element: <Main></Main>,
     children:[
        {
          path: '/',
          loader: orderAndProductLoader,
          element: <Products></Products>
        },
        {
          path:'about',
          element: <About></About> 
        },
        {
          path:'/order',
          loader: orderAndProductLoader,
          element:<Order></Order>
        },
        {
          path: 'inventory',
          element: <Inventory></Inventory>
        }
     ]
      
     
     }
  ])
  return (
    <div>
      <RouterProvider
      router={router}
      ></RouterProvider>
  
    </div>
  );
}

export default App;
