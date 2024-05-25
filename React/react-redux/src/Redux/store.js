import { createStore } from "redux";
import rootReducer from "./reducers/rootreducer";

const store= createStore(rootReducer);

export default store;