import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//createAsyncThunk returns a promise life cycle
//createAsyncThunk is middleware

export const fetchUsers = createAsyncThunk("getUsers",async(url,thunkAi)=>{
    try{
        let response =  await axios.get(url);
        let userData = response.data;
        return userData; 
    }
    catch(err)
    {
        console.log(err);
        return thunkAi.rejectWithValue("unable to get the data");
    }
})

export const userSlice = createSlice(
    {
        name:"users",
        initialState:{
            users:[],
            ispending:false,
            isError:false,
            ErrorMsg:''
        },
        //used to update the state based on components data used to update the state when data is received from the react component by creating the action creator functions
        // reducers:{},
        //used to update the state when api is called
        //used when the data is received form outside of the component 
        extraReducers:{
            [fetchUsers.fulfilled]:(state,action)=>{
                state.ispending = false;
                state.isError = false;
                state.ErrorMsg = '';
                state.users = action.payload;
            },

            [fetchUsers.pending]:(state,action)=>{
                state.ispending = true;
            },
            
            [fetchUsers.rejected]:(state,action)=>{
                state.isError = true;
                state.ErrorMsg = action.payload;
            }
        }
    }
)

// export const { users, ispending, isError,ErrorMsg } = userSlice.actions
export default userSlice.reducer;