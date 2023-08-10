import { createSlice} from "@reduxjs/toolkit";

const initialState ={
    isSidebarOpen: true,
    user:"Surya"
};

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        toggleSidebar:(state)=>{
            state.isSidebarOpen = !state.isSidebarOpen;
        },
         },    
})

export const {toggleSidebar, logOutUser}=userSlice.actions;
export default userSlice.reducer;