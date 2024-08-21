import { useState } from 'react'
import authService from '../../Appwrite/Authservice';
import imgsrc from './../../assets/nature.jpg'
export default function CreateAccount() {
    let [email,setemail]=useState("");
    let [password,setpassword]=useState("");
    let [username,setusername]=useState("");
    async function onformSubmit(e){
        e.preventDefault();
        
        await authService.createAccount({email:email,password:password,name:username});
        setemail("")
        setusername("")
        setpassword("")
    }
    return (
      <>
       <div className="w-screen h-screen grid grid-cols-1">
        {/* <div className="bg-blue-500 w-full h-full">
          <img src={imgsrc}  width="100vw" height="100vh"/>
        </div> */}
        <div className=" w-full h-screen  bg-slate-700  flex justify-center items-center " >
         
           
  
          
            <form onSubmit={(e)=>{onformSubmit(e)}} className=" p-20 space-y-6 w-[70%] h-full flex justify-center flex-col items-center">
            <div className="w-full">
                <label htmlFor="username" className="block text-sm font-medium leading-6 text-white ">
                  Username 
                </label>
                <div className="mt-2">
                  <input
                  onChange={(e)=>{setusername(e.target.value)}}
                    id="username"
                    name="username"
                    type="text"
                    required
                    autoComplete="text"
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="w-full">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-white ">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                  onChange={(e)=>{setemail(e.target.value)}}
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div className="w-full  p-auto  center">
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                    Password
                  </label>
              
                </div>
                <div className="mt-2 ">
                  <input
                   onChange={(e)=>{setpassword(e.target.value)}}
                    id="password"
                    name="password" 
                    type="password"
                    required
                    autoComplete="current-password"
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="text-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Create Account
                </button>
              </div>
            </form>
  
            
          
        </div>
       </div>
        
      </>
    )
  }
  