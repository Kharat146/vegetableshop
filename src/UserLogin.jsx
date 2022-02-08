import React, { useEffect, useState } from 'react'
import Navigation from './NavBar/Navigation';
import axios from 'axios';
import './Admin/Admin.css'
import { useHistory } from 'react-router-dom';
import Footer from './Footer';

export default function UserLogin() {
    let history = useHistory();

    const [userData, setuserData] = useState({
        "name": '',
        "pass": ''
    });
    const [fn, setFn] = useState("");
    const [regitrationData, setRegitrationData] = useState([]);
    const [length, setLength] = useState();
    const styleP = {
        fontSize: "18px",
        cursor: "pointer"
    }

    useEffect(() => {


        axios.get(" http://localhost:3000/UserRegistration").then(response => {
            console.log("user data");

            setRegitrationData(response.data);
            setLength(response.data.length);

        })

    }, []);

    const onSubmitHandler = (e) => {


        {
            regitrationData.map((dd) => {

                if (userData.name == dd.firstName && userData.pass == dd.password) {
                    alert("login successful");
                    history.push("/");
                }

            })
        }

        e.preventDefault();
    }

    const Register = () => {
        history.push("/userregitration");
    }
    return <div>
        <Navigation />
        <section className="form my-4 offset-2 col-lg-6 ">
            <div className="container offset-2">
                <div className="row row-css no-gutters">
                    <div className="col-lg-3 offset-1 img">
                        <img src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg"
                            className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-7 offset-1 pt-3">
                        <h1 className="font-weight-bold py-3">User Login</h1>
                        <h4>Sign into your Account</h4>
                        <form action="" onSubmit={onSubmitHandler}>
                            <div className="form-row">
                                <div className="col-lg-10">
                                    <input type="text" placeholder="Name" className="form-control my-3 p-4" value={userData.name} onChange={(e) => { setuserData({ ...userData, name: e.target.value }) }} />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-lg-10">
                                    <input type="pass" placeholder="********" className="form-control my-3 p-4" value={userData.pass} onChange={(e) => { setuserData({ ...userData, pass: e.target.value }) }} />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-lg-10">
                                    <button type="submit" className="btn1 my-3">Login</button>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-lg-12 row">

                                    <p style={styleP} className='col-6'>Don't have an account? </p>
                                    <span onClick={Register} className='text-primary col-6' style={styleP}>Register here</span>
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
