import logo from './logo.svg';
import './App.css';
import About from './About';
import Home from './Home';
import Contact from './Contact';
import Navbar from './Navbar';
import Navitem from './Navitem';
import Service from './Service';
import Admin from './Admin';
import AdminLogin from './AdminLogin';
import AdminProduct from './AdminProduct';
import UserLogin from './UserLogin';
import UserRegitration from './UserRegitration';
import {  Route, Switch,BrowserRouter as Router } from 'react-router-dom';
import ProductCart from './ProductCart';
// import { useState, useEffect } from 'react';
// import { Routes } from 'react-router-dom'
// import Navigation from './FlipcartClone/Navigation';
// import Navbar from './Navbar'
import axios from 'axios';
import ProductDetails from './ProductDetails';
import UserData from './UserData';
import  Footer from './Footer';
// import Admin from './Admin';

function App() {

  // const [data, setData] = useState("");

  // useEffect(() => {
  //   axios.get("  http://localhost:3000/fruit").then((res) => {
  //     console.log(res);

  //     console.log(res.data.main);

  //     setData(res.data);
  //     console.log("this is cart");

  //     console.log({data});

  //   })
  // }, [])

  return (
    <>
      {/* <Home /> */}
      {/* <Navigation/> */}
      {/* <Home /> */}
      {/* <Router>
        <Routes>
          <Route path="/" element={<Navitem />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router> */}

      <Switch>
      <Router>

        {/* <Route path="/" element={<Home  />} /> */}
        <Route exact path="/" component={Home } />
        <Route path="/admin" component={Admin } />
        <Route path="/service" component={Service } />
        <Route path="/contact" component={Contact } />
        <Route path="/adminlogin" component={AdminLogin } />
        <Route path="/adminproduct" component={AdminProduct } />
        <Route path="/userlogin" component={UserLogin } />
        <Route  path="/userregitration" component={UserRegitration } />
        <Route path="/productdetails" component={ProductDetails } />
        <Route path="/userdata" component={UserData } />
        <Route path="/footer" component={Footer } />

        {/* <Route path="/productcart" element={<ProductCart />} /> */}
      </Router>
      </Switch>




    </>
  );
}

export default App;
