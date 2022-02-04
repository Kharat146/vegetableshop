import React, { useState } from 'react'
import axios from 'axios';

export default function FormR() {

    const [task, setTask] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        number: ''
    });

    const onSUbmitHandler = (e) => {

        axios.post("http://localhost:3000/RegistrationData", task)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })

        e.preventDefault();

        // console.log(task)

    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <form onSubmit={onSUbmitHandler}>
                        <div className="card shadow bg-white rounded">
                            <div className="card-header">
                                <h3 className="text-center">Form</h3>
                            </div>
                            <div className="card-body">
                                <input type="text" placeholder="enter first name" className=" form-control" value={task.firstName} onChange={(e) => { setTask({ ...task, firstName: e.target.value }) }} />
                                <input type="text" placeholder="enter last name" className=" form-control" value={task.lastName} onChange={(e) => { setTask({ ...task, lastName: e.target.value }) }} />
                                <input type="email" placeholder="enter email name" className=" form-control" value={task.email} onChange={(e) => { setTask({ ...task, email: e.target.value }) }} />
                                <input type="password" placeholder="enter password" className=" form-control" value={task.password} onChange={(e) => { setTask({ ...task, password: e.target.value }) }} />
                                <input type="number" placeholder="enter mobile number" className=" form-control" value={task.number} onChange={(e) => { setTask({ ...task, number: e.target.value }) }} />
                                <button type="submit" className="btn  btn-success mt-2 form-control">submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>


        </div>
    )
}
