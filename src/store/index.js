import { createStore } from "redux";
import dataReducer from "./Data";

 const store = createStore(dataReducer)
 export default store