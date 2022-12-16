import {composeWithDevTools} from "redux-devtools-extension"
import {rootReducer} from "./rootReducer"
import {legacy_createStore} from "redux"

//create the store based on reducer
//composeWithDevtools() is used to debugging the redux store
let store=legacy_createStore(rootReducer,composeWithDevTools())
export {store}