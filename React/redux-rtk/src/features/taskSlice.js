import { createSlice } from "@reduxjs/toolkit";

const taskSlice= createSlice({
    name:'tasks',
    initialState:[],
    reducers:{
        addTask:(state,action)=>{
            state.push({id:Date.now(),text:action.payload,completed:false})
        },
        removeTask:(state,action)=>{
            return state.filter(task=>task.id!==action.payload)
        },
        toggleTask:(state,action)=>{
            console.log('triggered');
            const task=state.find(task=>task.id==action.payload);
            if(task){
                task.completed=!task.completed
            }
        }
    }
});

export const {addTask,removeTask,toggleTask}=taskSlice.actions;
export default taskSlice.reducer;