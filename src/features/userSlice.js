import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState ={
    userRole:'',
    isLoading:false,
    isSidebarOpen: false,
    user:""
};


export const loginUser = createAsyncThunk(
    'user/loginUser', async (user) => {
        return user
    }
)

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        toggleSidebar:(state)=>{
            state.isSidebarOpen = !state.isSidebarOpen;
        },
         logOutUser:(state)=>{
            state.user=null
            state.userRole=''
        },
    },    
    extraReducers:{       
       [loginUser.pending]:(state)=>{
            state.isLoading = true
        },
        [loginUser.fulfilled]:(state,{payload})=>{
            const user = payload
            state.user =user
                   state.userRole=""
                  },
        [loginUser.rejected]:(state, {payload})=>{
            state.isLoading=false
          
        }
    }
})

export const {toggleSidebar, logOutUser}=userSlice.actions;
export default userSlice.reducer;