import Navbar from "./Navbar/Navbar"
import Message from "./Message/Message"
import { BrowserRouter,Switch,Route } from "react-router-dom"
import { Provider } from "react-redux"
import {store} from "./store"



let App=()=>
{
  return <>
  <Provider store={store}>
  <BrowserRouter>
  <Navbar/>
  <Switch>
    <Route path="/reduxEx" component={Message}/>
    </Switch>
    </BrowserRouter>
    </Provider>
    </>
}
export default App
