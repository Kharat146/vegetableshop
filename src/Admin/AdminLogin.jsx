import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import {GrProductHunt} from 'react-icons/gr'
import Navigation from '../NavBar/Navigation';
import Footer from '../Footer';

export default function AdminLogin() {
    let history = useHistory();
    const [task, setTask] = useState({
        productName: '',
        productCategory: '',
        productCat: '',
        productImage: '',
        productPrice: '',
        productValue: ''
    });
   
    const onSubmitHandler = (e) => {
        axios.post("http://localhost:3000/fruit", task)
            .then(Response => {
                console.log(Response);
            })
            .catch(error => {
                console.log(error);
            })
            alert("Product Add Successfully!!");
            setTask({
                productName: '',
                productCategory: '',
                productImage: '',
                productPrice: '',
                productValue: '',
                productAbout:''
            })
            history.push("/adminproduct");

        e.preventDefault();

    }

    return <>
    <Navigation/>
        <section class="form my-5 offset-2 col-lg-6 ">
        <div class="container offset-2">
            <div class="row row-css no-gutters">
                <div class="col-lg-10 offset-1 pt-3">
                    <h4 className='text-center'><GrProductHunt className='mx-3'/>ADD YOUR PRODUCT</h4>
                    <form action=""  onSubmit={onSubmitHandler}>
                        <div class="form-row">
                            <div class="col-sm-12 row">
                                <div className="col-sm-5">
                                    <h5 className='mt-4'>Enter Product Name :-</h5>
                                </div>
                                <div className="col-sm-7">
                                <input type="text" placeholder="Product Name" class="form-control my-3" value={task.productName}  onChange={(e) => { setTask({ ...task, productName: e.target.value }) }}  />
                                </div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="col-sm-12 row">
                                <div className="col-sm-5">
                                    <h5 className='mt-4'>Enter Product Category :-</h5>
                                </div>
                                <div className="col-sm-7">
                                <select name="" id="" className='form-control mt-3' style={{ fontSize: "20px" }} value={task.productCategory} onChange={(e) => { setTask({ ...task, productCategory: e.target.value }) }} >
                                    <option value="food">product Category</option>
                                    <option value="food">food</option>
                                    <option value="vegetables">vegetables</option>
                                    <option value="Grocery">Grocery</option>
                                    <option value="Eggs">Eggs</option>
                                    <option value="Household Care">Household Care</option>
                        </select> </div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="col-sm-12 row">
                                <div className="col-sm-5">
                                    <h5 className='mt-4'>Enter Product Image :-</h5>
                                </div>
                                <div className="col-sm-7">
                                <input type="url" placeholder="Product Image URL" class="form-control my-3"  value={task.productImage} onChange={(e) => { setTask({ ...task, productImage: e.target.value }) }} />
                                </div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="col-sm-12 row">
                                <div className="col-sm-5">
                                    <h5 className='mt-4'>Enter Product Price :-</h5>
                                </div>
                                <div className="col-sm-7">
                                <input type="Number" placeholder="Product Price " class="form-control my-3" value={task.productPrice}  onChange={(e) => { setTask({ ...task, productPrice: e.target.value }) }}  />
                                </div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="col-sm-12 row">
                                <div className="col-sm-5">
                                    <h5 className='mt-4'>Enter Product Valume :-</h5>
                                </div>
                                <div className="col-sm-7">
                                <input type="text" placeholder="Product Valume" class="form-control my-3" value={task.productValue}  onChange={(e) => { setTask({ ...task, productValue: e.target.value }) }}  />
                                </div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="col-sm-12 row">
                                <div className="col-sm-5">
                                    <h5 className='mt-4'>Enter Product Description :-</h5>
                                </div>
                                <div className="col-sm-7">
                               <textarea placeholder='Description' class="form-control" cols="45" rows="3"  value={task.productAbout}  onChange={(e) => { setTask({ ...task, productAbout: e.target.value }) }} ></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="col-lg-10">
                                <button type="submit" class="btn1 my-3">ADD PRODUCT</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <Footer/>

    </>
}
