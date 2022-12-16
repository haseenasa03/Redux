//action type

const GM="GM"
const GN="GN"

//action
//action is a function it return actionable object
let gmAction=()=>
{
    return {type:GM}
}
let gnAction=()=>
{
    return {type:GN}

}
export {gmAction,gnAction,GM,GN}
