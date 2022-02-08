import React, { useEffect, useState } from 'react'
import Navigation from '../NavBar/Navigation'
import axios from 'axios';
import './Admin.css'
import {useHistory} from 'react-router-dom';
import Footer from '../Footer';

export default function Admin() {
    let history = useHistory();
    const [data, setData] = useState({
        "name": '',
        "pass": ''
    });
    const onSubmitHandler = (e) => {
        // setAdmin(data);
        console.log("this is admin"+data.name);
        if(data.name == "ajay" && data.pass == 1234 ){
            history.push("/adminlogin")
}
else{
    if(data.name==="ajay" && data.pass!=1234){
            alert("wrong pass")
    } 
    else if(data.name!="ajay" && data.pass===1234){

        alert("wrong name");
    }
    else{
        alert("name and pass inccorect")
    }
}
        e.preventDefault();
    }
  return <div>
   <Navigation />
      <section className="form  my-5 offset-2 col-lg-6 section">
        <div className="container offset-2">
            <div className="row row-css no-gutters">
                <div className="col-lg-4 offset-1 img">
                    <img src="http://icons.iconarchive.com/icons/iconshock/super-vista-general/256/administrator-icon.png"
                        className="img-fluid" alt="" />
                </div>
                <div className="col-lg-5 offset-1 pt-3">
                    <h1 className="font-weight-bold py-3">Admin</h1>
                    <h4>Sign into your Account</h4>
                    <form action=""  onSubmit={onSubmitHandler}>
                        <div className="form-row">
                            <div className="col-lg-10">
                                <input type="text" placeholder="Name" className="form-control my-3 "  value={data.name}  onChange={(e) => { setData({ ...data, name: e.target.value }) }} />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-lg-10">
                                <input type="pass" placeholder="********" className="form-control my-3 "  value={data.pass}  onChange={(e) => { setData({ ...data, pass: e.target.value }) }} />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-lg-10">
                                <button type="submit" className="btn1 my-3">Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <Footer/>
  </div>;
}
