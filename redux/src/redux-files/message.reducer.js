import {GM,GN} from "./message.action"
//Reducer is a pure function it take two argument,state and action
//Reducer create or update store based on action type

let initialState={
    message:"hello"
}
let messageReducer=(state=initialState,action)=>
{
    console.log(action)
    console.log(action.type)
    switch(action.type)
    {
        case GM: 
        return {
            message:"good morning"
        }
        case GN:
            return {
                message:"good night"
            }
            default:return state
    }
}
export {messageReducer}