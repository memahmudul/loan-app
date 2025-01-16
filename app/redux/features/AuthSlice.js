import {createSlice} from '@reduxjs/toolkit';


const initialState = {
  userData: null,
};




const AuthSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {

    authenticate:(state,action)=>{
    
      state.userData = action.payload
    },

   

    updateUserStatus:(state,action)=>{
      state.userData.status=action.payload
    },

    
   
    updateUserPhoto:(state,action)=>{
    

  
      state.userData.photo=action.payload

    },


 





    logout: (state, action) => {
    
      state.userData=null
    },


  },
  extraReducers: builder => {

   
  },
});
export const {authenticate,logout,updateUserStatus,updateUserPhoto} = AuthSlice.actions;
export default AuthSlice.reducer;
