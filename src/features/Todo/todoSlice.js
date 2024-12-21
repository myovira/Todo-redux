import { createSlice } from "@reduxjs/toolkit";

const todoSlice=createSlice({
    name:"todo",
    initialState: {
        tasks:[]
    },
    reducers:{

        addTodo: (state, action)=>{

            //console.log("action looks like",action);
            state.tasks.push(action.payload);//{id: nanoid(), todo: "learn something new today", done:false}
        },

        deleteTodo : (state, action)=>{
           const id =action.payload;

           state.tasks=state.tasks.filter(task =>task.id !== id);

        },

        doneTodo : (state, action) =>{
            const id =action.payload;

            state.tasks = state.tasks.map(task =>{
                 if (task.id ===id){
                    task.done =!task.done;
                 }
                 return task;
            });
        },
    },
});

export const{addTodo, deleteTodo, doneTodo}=todoSlice.actions;
export const todoReducer=todoSlice.reducer;