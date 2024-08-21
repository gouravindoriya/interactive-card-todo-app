
import Background from './components/Background/Background'
import Foreground from './components/Background/Foreground'
import Login from './components/Signup/Login'
import CreateAccount from './components/Signup/CreateAccount'
import { useDispatch } from 'react-redux'
import  authService from './Appwrite/Authservice'
import { useEffect } from 'react'
import {login,logout} from './store/AuthSlice'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
function App() {
  const [Loading,setLoading]=useState(false);
  // const dispatch=useDispatch();
  // useEffect(()=>{
  //  authService.getCurrentUser()
  //  .then((userdata)=>{
  //   if(userdata)dispatch(login({userdata}));
  //   else{
  //     dispatch(logout());
  //   }
  //  })
  //  .finally(()=>setLoading(false));
  // },[])
  
  return !Loading?(
   
  //  <div>"checking you are valid user" : `${authStatus}`</div>
   
   <Outlet/>
  ):null
}

export default App
