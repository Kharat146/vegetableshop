import React, { useEffect, useState } from 'react'
import Navigation from '../NavBar/Navigation'
import axios from 'axios';
import './Admin.css'
import {useHistory} from 'react-router-dom';

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
      <section class="form my-4 offset-2 col-lg-6 ">
        <div class="container offset-2">
            <div class="row row-css no-gutters">
                <div class="col-lg-4 offset-1 img">
                    <img src="http://icons.iconarchive.com/icons/iconshock/super-vista-general/256/administrator-icon.png"
                        class="img-fluid" alt="" />
                </div>
                <div class="col-lg-5 offset-1 pt-3">
                    <h1 class="font-weight-bold py-3">Logo</h1>
                    <h4>Sign into your Account</h4>
                    <form action=""  onSubmit={onSubmitHandler}>
                        <div class="form-row">
                            <div class="col-lg-10">
                                <input type="text" placeholder="Name" class="form-control my-3 p-4"  value={data.name}  onChange={(e) => { setData({ ...data, name: e.target.value }) }} />
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="col-lg-10">
                                <input type="pass" placeholder="********" class="form-control my-3 p-4"  value={data.pass}  onChange={(e) => { setData({ ...data, pass: e.target.value }) }} />
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="col-lg-10">
                                <button type="submit" class="btn1 my-3">Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>


  </div>;
}
