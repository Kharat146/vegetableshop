
import './App.css';
import Home from './component/home/Home';
import Admin from './component/Admin/Admin'
import AdminLogin from './component/Admin/AdminLogin';
import AdminProduct from './component/Admin/AdminProduct';
import UserLogin from './component/login/UserLogin';
import UserRegitration from './component/login/UserRegitration';
import {  Route, Switch,BrowserRouter as Router } from 'react-router-dom';
import ProductDetails from './component/productDetails/ProductDetails';
// import UserData from './component/login/';
import  {Footer} from './component/footer/Footer';
import { OrderPlaced } from './component/productDetails/OrderPlaced';


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
        {/* <Route path="/userdata" component={UserData } /> */}
        <Route path="/footer" component={Footer } />
        <Route path="/orderplaced" component={OrderPlaced } />


        {/* <Route path="/productcart" element={<ProductCart />} /> */}
      </Router>
      </Switch>




    </>
  );
}

export default App;
