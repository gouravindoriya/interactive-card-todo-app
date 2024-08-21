import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import {createBrowserRouter,RouterProvider } from 'react-router-dom'
import store from './store/store.js'
import CreateAccount from './components/Signup/CreateAccount.jsx'
import Login from './components/Signup/Login.jsx'
import Home from './components/Background/Home.jsx'
import Protected from "./components/AuthLayout.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (  
        <Protected >
          <Home />
        </Protected>)
      },
      {
        path: "/login",
        element: (
          <Protected authentication={false}>
            <Login />
          </Protected>
        )
      },
      {
        path: "/createaccount",
        element: (
          <Protected authentication={false}>
            <CreateAccount />
          </Protected>
        )
      }
    
    ]}])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
        {/* <App /> */}
        <RouterProvider router={router} />
    </Provider>
  
  </StrictMode>,
)
