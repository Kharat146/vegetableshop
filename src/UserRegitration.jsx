import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import './UserRegitration.css';

export default function UserRegitration() {
    // const [admin, setAdmin] = useState({});
    let history = useHistory();
    const [task, setTask] = useState({
        firstName: '',
        LastName: '',
        email: '',
        password: '',
        number: '',
        address: ''
    });

    const onSUbmitHandler2 = (e) => {
       if(task){
        axios.post("http://localhost:3000/UserRegistration", task)
            .then(Response => {
                console.log(Response);
            })
            .catch(error => {
                console.log(error);
            })
        alert("Registration  Successfully!!");
        setTask({
            firstName: '',
            LastName: '',
            email: '',
            password: '',
            number: '',
            address: ''

        })
        history.push("/adminproduct");

       }
       else{
           alert("hhh")
       }
        e.preventDefault();

    }

    return <>

        {/* <h1>this is User Regitration</h1>
        <div className="container">
            <div className="card col-lg-7 shadow bg-white rounded">

                <form onSubmit={onSUbmitHandler2}>
                    <div className="card-header">
                        <h3 className="text-center">Form</h3>
                    </div>
                    <div className="card-body">
                        <input type="text" style={{ fontSize: "20px" }} placeholder="enter product name" className=" form-control" value={task.productName} onChange={(e) => { setTask({ ...task, productName: e.target.value }) }} />
                        <select name="" id="" className='form-control mt-3' style={{ fontSize: "20px" }} value={task.productCategory} onChange={(e) => { setTask({ ...task, productCategory: e.target.value }) }} >
                            <option value="FreshFruits">product Category</option>
                            <option value="FreshFruits">FreshFruits</option>
                            <option value="FreshVegetables">FreshVegetables</option>
                            <option value="CutAndSprouts">CutAndSprouts</option>
                            <option value="ExoticsCorner">ExoticsCorner</option>
                        </select>

                        <input type="url" style={{ fontSize: "20px" }} placeholder="Image url" className=" form-control mt-4" value={task.productImage} onChange={(e) => { setTask({ ...task, productImage: e.target.value }) }} />
                        <input type="number" style={{ fontSize: "20px" }} placeholder="enter product price" className=" form-control" value={task.productPrice} onChange={(e) => { setTask({ ...task, productPrice: e.target.value }) }} />
                        <input type="text" style={{ fontSize: "20px" }} placeholder="enter product price" className=" form-control" value={task.productValue} onChange={(e) => { setTask({ ...task, productValue: e.target.value }) }} />
                        <button type="submit" style={{ fontSize: "20px" }} className="btn  btn-success mt-2 form-control">submit</button>
                    </div>
                </form>
            </div>
        </div> */}
        {/* ............................ */}

        <section className="get_in_touch">
            <h1 className="title">get in touch</h1>
            <form action="" onSubmit={onSUbmitHandler2}>
                <div className="container">
                    <div className="contact-form row">
                        <div className="form-field col-lg-6">
                            <input type="text" id="name" className="input-text" value={task.firstName} onChange={(e) => { setTask({...task, firstName : e.target.value})}} />
                            <label for="name" className="label">first name</label>
                        </div>
                        <div className="form-field col-lg-6">
                            <input type="text" id="last" className="input-text" value={task.LastName} onChange={(e) => { setTask({...task, LastName : e.target.value})}} />
                            <label for="last" className="label"> last name</label>
                        </div>
                        <div className="form-field col-lg-6">
                            <input type="email" id="email" className="input-text" value={task.email} onChange={(e) => { setTask({...task, email :e.target.value})}}/>
                            <label for="email" className="label">email</label>
                        </div>

                        <div className="form-field col-lg-6">
                            <input type="number" id="phone" className="input-text" value={task.number} onChange={(e) => { setTask({...task, number:e.target.value})}} />
                            <label for="phone" className="label"> contact number</label>
                        </div>

                        <div className="form-field col-lg-6">
                            <input type="password" id="password" className="input-text" value={task.password} onChange={(e) => { setTask({...task, password:e.target.value})}} />
                            <label for="password" className="label">password</label>
                        </div>
                        <div className="form-field col-lg-6">
                            <input type="text" id="password" className="input-text" value={task.address} onChange={(e) => { setTask({...task, address:e.target.value})}} />
                            <label for="address" className="label">address</label>
                        </div>
                        <div className="form-field col-lg-12">
                            <input type="submit" className="submit-btn" />
                        </div>
                    </div>
                </div>
            </form>
        </section >
    </>


}
