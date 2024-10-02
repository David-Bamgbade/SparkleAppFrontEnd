import Login from '../auth/Login'
import Signup from '../auth/Signup'
import Rider from '../component/Rider'
import Home from '../component/Home'
import Market from '../component/Market'
import Service from '../component/Services'
import Hero from '../component/hero/Hero'
import LaundererSignup from '../auth/LaundererSignup'


const ROUTES =[{

  path:"/",
  element: <Hero />,
  Children:[

    {
      path:"/hero",
      element:<Home />
    }
  ]
},
{
  path: "/rider",
  element: <Rider />
},
{
  path: "/market",
  element: <Market />
},

{
  path: "/service",
  element: <Service />
},

{
  path:"/signup",
  element:<Signup />
},

{
  path:"/login",
  element:<Login />
},

{
  path: "/laundererSignup",
  element: <LaundererSignup />
}

]


export default ROUTES;
