
import './App.css';
import Header from './Header';
import Home from "./Home";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Checkout from "./Checkout";
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
function App() {
      const [{},dispatch] = useStateValue();
      useEffect(()=>{
        auth.onAuthStateChanged(authUser=>{
          console.log("user is ",authUser)
          if(authUser){
            dispatch({
              type: 'SET_USER',
              user: authUser
            })
          }
          else{
            dispatch({
              type: 'SET_USER',
              user: null
            })
          }
        });
      },[])
  return (

        <Router>
              <div className="App">
                <Switch>
                <Route path="/checkout">
                    <Header/>
                    <Checkout/>
                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/payment">
                    <Header/>
                    <h1>i am a payment page</h1>
                </Route>
                
                  <Route path="/">
                    <Header/>
                    <Home/>
                  </Route>

                </Switch>
            </div>
        </Router>
  );
}

export default App;
