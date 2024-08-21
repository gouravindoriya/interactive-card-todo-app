import { useState } from 'react';
import authService from '../../Appwrite/Authservice';
import imgsrc from './../../assets/nature.jpg'; // If you need the image
import { login } from '../../store/AuthSlice';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(""); // Corrected to lowercase 'error'
    
    const dispatch = useDispatch(); // Initialize dispatch
    const navigate = useNavigate(); // Initialize navigate

    async function onFormSubmit(e) {
        e.preventDefault();
        setError(""); // Reset error state

        try {
            await authService.logout(); // Ensure the user is logged out before attempting login
            
            const session = await authService.login({ email, password });
            if (session) {
                const userData = await authService.getCurrentUser();
                if (userData) { 
                    dispatch(login({ userData ,status:true}));
                   
                    navigate("/"); // Navigate to the home page
                }
            }
        } catch (error) {
            setError(error.message); // Set error message if login fails
        }
    }

    return (
      <>
        <div className="w-screen h-screen grid grid-cols-1">
          {/* <div className="bg-blue-500 w-full h-full">
            <img src={imgsrc} className='h-full'/>
          </div> */}
          <div className="w-full h-screen bg-slate-700 flex justify-center items-center">
            <form onSubmit={onFormSubmit} className="p-20 space-y-6 w-[70%] h-full flex justify-center flex-col items-center">
              
              {error && <p className="text-red-500">{error}</p>} {/* Display error message if any */}

              <div className="w-full">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="w-full">
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    onChange={(e) => setPassword(e.target.value)}
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
                  className="text-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Login
                </button>
              </div>

              <Link className="text-blue-600 p-2 hover:text-blue-200" to="/createaccount">
                I don't have an account: Create a new one
              </Link>
            </form>
          </div>
        </div>
      </>
    );
}
