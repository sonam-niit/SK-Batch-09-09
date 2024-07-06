import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './features/counterSlice';
import taskReducer from './features/taskSlice';

const store= configureStore({
    reducer:{
        counter: counterReducer,
        todos: taskReducer
    }
});

export default store;