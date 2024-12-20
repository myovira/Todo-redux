import { createSlice } from "@reduxjs/toolkit";

const todoSlice=createSlice({
    name:"todo",
    initialState: {
        tasks:[]
    },
    reducers:{

        addTodo: (state, action)=>{

            console.log("action looks like",action);
            state.tasks.push(action.payload);//{id: nanoid(), todo: "learn something new today", done:false}
        },


    },
});

export const{addTodo}=todoSlice.actions;
export const todoReducer=todoSlice.reducer;