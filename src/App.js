import React, {useState, useEffect} from 'react';
import './App.css';
import {HashRouter as Router, Route, Switch } from "react-router-dom"
import NavBar from './components/NavBar/NavBar';
import Products from "./containers/Pages/Products/Products"
import AboutUs from "./containers/Pages/About/About"
import Contacts from "./containers/Pages/Contacts/Contacts"
import Footer from './components/Footer/Footer';
import Home from './containers/Pages/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import Settings from "./containers/Pages/Settings/Settings"
import Cookies from "js-cookie"

function App() {

const [headingSize, setHeadingSize] = useState("") 
const [headingColor, setHeadingColor] = useState("") 
const [advertising, setAdvertising] = useState("") 

const readCookie=()=>{
  setHeadingSize(Cookies.get('headingColor'))
  setHeadingColor(Cookies.get('headingSize'))
  setAdvertising(Cookies.get('advertising'))
}

useEffect(()=>{
  readCookie();
},[])

  return (
    <div className={`${headingSize} ${headingColor} ${advertising}`}>
        <Router >
          <NavBar/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/products" component={Products} />
                <Route exact path="/about" component={AboutUs} />
                <Route exact path="/contacts" component={Contacts} />
                <Route exact path="/settings" component={()=><Settings readCookie={readCookie}/>}/>
                <Route exact component={NoMatch} />
            </Switch>
          <Footer/>
        </Router>
      </div>
  );
}

export default App;
