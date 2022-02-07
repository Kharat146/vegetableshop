import React, { useEffect, useState } from 'react'
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
import { MdDeleteOutline} from 'react-icons/md'
import { FaEdit} from 'react-icons/fa'
import Navigation from '../NavBar/Navigation';
import {BiRupee} from 'react-icons/bi'



export default function AdminProduct() {

    const [menuData, setMenuData] = useState([]);;
    useEffect(() => {
        axios.get("http://localhost:3000/fruit").then(Response => {
            console.log("menu data");
            console.log(Response.data);
            setMenuData(Response.data);


        })
    }, [menuData]);

    const deleteItem=(del)=>{
    console.log(del);
        axios.delete(`http://localhost:3000/fruit/${del}`).then(Response=>{
                alert("item deleted")
    })
    }

    return <>
    <Navigation/>
            <h1 className='text-center m-5'>Your's Product</h1>
       

        <section className="main-card--cointainer row">
            {menuData.map((dd) => {
                return (

                    <>
                        {/* <div className="row"> */}


                        <div className="card col-8 col-sm-8 ml-sm-5 ml-3 .mx-md-5  col-md-4 col-lg-2  m-5 my-3 shadow bg-white rounded">
                        <div className="card-heading text-end text-secondary"> {dd.productCategory}*</div>
                            <div className="card-body">
                                <img src={dd.productImage} alt="" />
                                <h4>{dd.productName}</h4>

                            </div>
                            <div className="card-footer">
                                <h5 className="text-right text-secondary">{dd.productValue}</h5>
                                <h3><BiRupee/>{dd.productPrice} </h3>
                                <button className='btn btn-danger' onClick={()=>{
                                    deleteItem(dd.id)
                                }}>Delete <MdDeleteOutline/> </button>
                                <button className='btn btn-success mx-1'>Update <FaEdit/></button>
                            </div>
                        </div>
                        {/* </div> */}

                    </>

                )
            })}
        </section>



    </>;
}
