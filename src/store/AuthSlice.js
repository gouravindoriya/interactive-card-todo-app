import { createSlice } from "@reduxjs/toolkit";

const initialState={
    status:false,
    userData:{}
}
const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        login:(state,action)=>{
            state.status=true;
            state.userData=action.payload.userData;
        },
        logout:(state)=>{
            state.status=false;
            state.userData={}
        }
    }
})

// login or logout ko he actions bolte h 
export  const {login, logout } =authSlice.actions
export default authSlice.reducer