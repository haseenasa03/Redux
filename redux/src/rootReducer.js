//if i want to use multiple states then multiple reducer is required
//and for that we have to rootreducer,without rootreducer also we can use
import { combineReducers } from "redux";
import {messageReducer} from "./redux-files/message.reducer";

let rootReducer=combineReducers({message:messageReducer})
export {rootReducer}