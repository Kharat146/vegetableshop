import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Admin from './Admin/Admin'
import AdminLogin from './Admin/AdminLogin';
import AdminProduct from './Admin/AdminProduct';
import UserLogin from './UserLogin';
import UserRegitration from './UserRegitration';
import {  Route, Switch,BrowserRouter as Router } from 'react-router-dom';
import ProductCart from './ProductCart';
import ProductDetails from './ProductDetails';
import UserData from './UserData';
import  Footer from './Footer';

function App() {

  return (
    <>
      <Switch>
      <Router>

      
        <Route exact path="/" component={Home } />
        <Route path="/admin" component={Admin } />
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
