import './App.css';
import { createBrowserRouter, RouterProvider } from'react-router-dom';
import  ROUTES from "./router/Router"
import Hero from './component/hero/Hero';
import SendOrder from './component/SendOrder';
// import CustomerOrder from './component/hero/CustomerOrder';

const router =  createBrowserRouter([
  ...ROUTES,

]);
function App() {
  return (
    <div className="App">
     <RouterProvider router={router}>
      <Hero />
     </RouterProvider>
    <SendOrder></SendOrder>

     {/* <CustomerOrder /> */}
     
    </div>
  );
}

export default App;
