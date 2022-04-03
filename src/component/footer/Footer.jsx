import React from 'react';
import { useHistory } from 'react-router-dom'
import {GoLocation} from "react-icons/go"
import {HiOutlineMail} from "react-icons/hi"
import {BsTelephoneX} from "react-icons/bs"

export  const Footer = () => {

const footerStyle={
    height:"auto",
   
}

let history = useHistory();

const home = () =>{
        history.push("/")
}
const admin = () =>{
    history.push("/admin")
}
const userLogin = () =>{
    history.push("/userlogin")
}
const userRegistration = () =>{
    history.push("/userregitration")
}
const linkStyle={
    cursor: "pointer"
}

  return <div>

    <section className="footer bg-dark text-light mt-5" style={footerStyle} >
        <div className="container row">
            <div className="col-6 col-sm-4 text-center  my-2 ">
                <h4 className='my-5'>GET IN TOUCH</h4>
                <h6 className='my-4' > <GoLocation/> Aurangabad , Maharastra.</h6>
                <h6 className='my-4' > <HiOutlineMail/> kharatajay998@gmail.com</h6>
                <h6 className='my-4' > <BsTelephoneX/> +918999702238</h6>
             
            </div>
            <div className="col-6 col-sm-4 my-2 text-center ">
                <h4 className='my-5'>CATEGORIES</h4>
                <h6 className='my-3' >food</h6>
                <h6 className='my-3' >vegetables</h6>
                <h6 className='my-3' >Grocery</h6>
                <h6 className='my-3' >Eggs</h6>
                <h6 className='my-3' >Household Care</h6>
            </div>
            <div className="col-6 col-sm-4 my-2 text-center">
                <h4 className='my-5'>USEFUL LINKS</h4>
                <h6 onClick={home} style={linkStyle} className='my-3'  >Home</h6>
                <h6 onClick={admin} style={linkStyle} className='my-3' >Admin Login</h6>
                <h6 onClick={userLogin} style={linkStyle} className='my-3' >User Registration</h6>
                <h6 onClick={userRegistration} style={linkStyle} className='my-3' >User Login</h6>
            </div>
           
           
        </div>
    </section>

    <p className='text-center bg-light'>2021 @copyright . Developed by <span className='text-success'> Ajay Kharat </span> </p>
  </div>;
  
};
export default Footer
