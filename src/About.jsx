import React, { useEffect, useState } from 'react'
import Navigation from './FlipcartClone/Navigation'
import './About.css'
import axios from 'axios';
import {useHistory} from 'react-router-dom';

export default function About() {
    let navigate = useHistory();
    const [data, setData] = useState({
        "name": '',
        "pass": ''
    });
    const [admin, setAdmin] = useState({});
    const [task, setTask] = useState({
        productName: '',
        productCategory: '',
        productCat: '',
        productImage: '',
        productPrice: '',
        productValue: ''
    });
    const [menuData, setMenuData] = useState([]);;
    const onSubmitHandler = (e) => {
        setAdmin(data);
        console.log("this is admin"+data.name);
        if(data.name == "ajay" && data.pass == 1234 ){
            navigate("/adminlogin")
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
    const onSUbmitHandler2 = (e) => {
        axios.post("http://localhost:3000/fruit", task)
            .then(Response => {
                console.log(Response);
            })
            .catch(error => {
                console.log(error);
            })
        e.preventDefault();

        // axios.get("http://localhost:3000/fruit")
        // .then(Response=>{
        //     console.log(Response);
        //     console.log("for menu data");
        // })
        // .catch(error=>{
        //     console.log(error);
        // })
        // e.preventDefault();
    }
    useEffect(() => {
        axios.get("http://localhost:3000/fruit").then(Response => {
            console.log("menu data");
            console.log(Response.data);
            setMenuData(Response.data);
            console.log(menuData);
            console.log(menuData[0]);

        })
    }, []);
    const redirect =()=>{
        console.log("this is admin"+admin.name);
            if(admin.name == "ajay" && admin.pass == 1234 ){
                        navigate("/adminlogin")
            }
            else{
                // navigate("/service")
            }
    
    }

    return (
        <>
            <Navigation />

            <div className="container ">
                <div className="container2">
                    {/* {menuData.map((dd) => {
                        return (
                            <> <h1>{dd.productName}</h1></>
                        )

                    })}; */}

                    <div className="card col-lg-7  " style={{ display: admin.name == "ajay" && admin.pass == 1234 ? "none" : "block" }}>
                        <div className="card-header">
                            <h1 >Admin Login</h1>

                        </div>
                        <div className="card-body">
                            <form action="" onSubmit={onSubmitHandler}>
                                <input type="text" style={{ fontSize: "20px" }} className='form-control' value={data.name} placeholder='enter your name' onChange={(e) => { setData({ ...data, name: e.target.value }) }} />
                                <input type="text" style={{ fontSize: "20px" }} className='form-control' value={data.pass} placeholder='enter your pass' onChange={(e) => { setData({ ...data, pass: e.target.value }) }} />
                                <button type="submit" style={{ fontSize: "20px" }} className="btn  btn-success mt-2 form-control" onClick={redirect}>submit</button>
                                {/* <button type="submit" style={{ fontSize: "20px" }} className="btn  btn-success mt-2 form-control" onClick={()=>{navigate (admin.name == "ajay" && admin.pass == 1234 ? "/adminlogin" : "/service")}}>submit</button> */}
                            </form>
                        </div>
                    </div>
                    {/* ----------------------------------------------- */}
                    {/* <div className=  (data.name =="ajay" && data.pass ==1234 )? "container " :"display"} > */}
                    {/* <div className="container col-lg-7  " style={{display: admin.name =="ajay" && admin.pass ==1234 ? "block":"none"}} > */}
                    {/* <div className="container " > */}
                    {/* <div className="row"> */}
                    <div className="card col-lg-7 shadow bg-white rounded" style={{ display: admin.name == "ajay" && admin.pass == 1274 ? "block" : "none" }}>

                        <form onSubmit={onSUbmitHandler2}>
                            <div className="card-header">
                                <h3 className="text-center">Form</h3>
                            </div>
                            <div className="card-body">
                                <input type="text" style={{ fontSize: "20px" }} placeholder="enter product name" className=" form-control" value={task.productName} onChange={(e) => { setTask({ ...task, productName: e.target.value }) }} />
                                <select name="" id="" value={task.productCategory} onChange={(e) => { setTask({ ...task, productCategory: e.target.value }) }} >
                                    <option value="FreshFruits">FreshFruits</option>
                                    <option value="FreshVegetables">FreshVegetables</option>
                                    <option value="CutAndSprouts">CutAndSprouts</option>
                                    <option value="ExoticsCorner">ExoticsCorner</option>
                                </select>
                                <select name="" id="" value={task.productCat} onChange={(e) => { setTask({ ...task, productCat: e.target.value }) }} >
                                    <option value="Fresh Fruits">Fresh Fruits</option>
                                    <option value="Fresh Vegetables">Fresh Vegetables</option>
                                    <option value="CutAnd Sprouts">Cut And Sprouts</option>
                                    <option value="Exotics Corner">Exotics Corner</option>
                                </select>
                                {/* <input type="text" style={{fontSize:"20px"}} placeholder="enter last name" className=" form-control" value={task.productCategory} onChange={(e) => { setTask({ ...task, lastName: e.target.value }) }} /> */}
                                {/* <input type="email" style={{fontSize:"20px"}} placeholder="enter email name" className=" form-control" value={task.email} onChange={(e) => { setTask({ ...task, email: e.target.value }) }} /> */}
                                <input type="url" style={{ fontSize: "20px" }} placeholder="Image url" className=" form-control" value={task.productImage} onChange={(e) => { setTask({ ...task, productImage: e.target.value }) }} />
                                <input type="number" style={{ fontSize: "20px" }} placeholder="enter product price" className=" form-control" value={task.productPrice} onChange={(e) => { setTask({ ...task, productPrice: e.target.value }) }} />
                                <input type="text" style={{ fontSize: "20px" }} placeholder="enter product price" className=" form-control" value={task.productValue} onChange={(e) => { setTask({ ...task, productValue: e.target.value }) }} />
                                <button type="submit" style={{ fontSize: "20px" }} className="btn  btn-success mt-2 form-control">submit</button>
                            </div>
                        </form>

                        <section className="main-card--cointainer">
                            {menuData.map((dd) => {
                                return (

                                    <>
                                        {/* <div class="container" key={dd.id}>
                                            <div class="row">
                                                <div class="card col-lg-8 col-sm-6">

                                                    <div class="card-body">
                                                        <span className="card-number card-circle subtle">{dd.id}</span>
                                                        <span className="card-author subtle">{dd.productCat}</span>
                                                        <h2 className="card-title">{dd.productName}</h2>
                                                        <span className="card-description subtle">
                                                            {dd.productPrice}
                                                        </span>
                                                        <div className="card-read">Read</div>
                                                        <img src={dd.image} alt="images" className="card-media" />
                                                        <span className="card-tag subtle"> Order Now</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                        <div className="card col-lg-5 shadow bg-white rounded">
                                            <div className="card-heading"> product</div>
                                            <div className="card-body">
                                                <img src={dd.productImage} alt="" />
                                                <h3>{dd.productName}</h3>
                                                <h4>{dd.productValue}</h4>

                                            </div>
                                            <div className="card-footer">
                                                <h3>{dd.productPrice} Rs.</h3>
                                                <button className='btn btn-success'>add to card</button>
                                            </div>
                                        </div>

                                    </>

                                )
                            })}
                        </section>


                    </div>


                </div>
            </div>


            {/* </div> */}
            {/* </div> */}



        </>
    )
}
