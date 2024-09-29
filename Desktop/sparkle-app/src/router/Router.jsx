// import Hero from '../component/hero/Hero'
import Login from '../auth/Login'
import Signup from '../auth/Signup'
import Rider from '../component/Rider'
import Home from '../component/Home'
import Market from '../component/Market'
import Service from '../component/Services'
import Hero from '../component/hero/Hero'


const ROUTES =[{


  path:"/",
  element: <Hero />,
  Children:[

    {
      path:"/",
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
  path:"/login",
  element:<Login />
},
{
  path:"/signup",
  element:<Signup />
}
]




export default ROUTES;
