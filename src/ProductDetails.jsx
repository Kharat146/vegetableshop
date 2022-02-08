import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaRupeeSign } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'
import Footer from './Footer';
import Navigation from './NavBar/Navigation';
import "./NavBar/Navigation.css";


const ProductDetails = (props) => {
    let history = useHistory()
    // const [pid, setPid]=useState();
    console.log(props);
    console.log(props.location.state)
    // setPid(props.location.state)
    const [count, setCount] = useState(0);
    const [cart, setCart] = useState([]);
    const style = {
        width: "10em"
    }
    const cardHeader = {
        backgroundColor: "#fff"
    }
    const cardStyle = {
        border: "none"
    }
    const cardprice = {
        color: "#cccccc"
    }
    const productAbout = {
        color: "#b5b5b5",
        fontSize: "20px"
    }
    const IncreseCount = () => {
        setCount(count + 1);
        console.log(count);
    }
    const decreseCount = () => {
        setCount(count - 1);
        console.log(count);
    }
    const NodecreseCount = () => {
        setCount(0);
        console.log(count);
    }

    useEffect(() => {


        axios.get("http://localhost:3000/fruit").then(response => {
            console.log(response.data);
            setCart(response.data)

        })

    }, []);
    const onSubmitFc = () => {
        history.push("/orderplaced")
    }

    return <>
      
        <Navigation/>

        <section className="main-card--cointainer row">
            <form action="" onSubmit={onSubmitFc} >


          
            {cart.filter((el) => {
                return el.id === props.location.state.id;
            }).map((dd) => {
                return (

                    <>

                        <div className="card col-lg-6 offset-3 my-3 shadow  rounded">
                            <div className="card-body row">
                                <div className="col-lg-6">
                                    <img src={dd.productImage} style={style} alt="" />
                                </div>
                                <div className="col-lg-6 card" style={cardStyle}>
                                    <div className="card-header " style={cardHeader}>

                                        <h1 className='text-center '>{dd.productName}</h1>
                                        <div className="row">
                                            <h4 className='text-secondary col-lg-6'><FaRupeeSign className='mx-3' />{dd.productPrice}.</h4>
                                            <h5 className="text-right  col-lg-6 text-end" style={cardprice}>{dd.productValue}*</h5>

                                        </div>
                                    </div>
                                    <div className="card-body">
                                        {/* <button className='btn btn-danger'>Delete  </button> */}
                                        <p style={productAbout}>{dd.productAbout}</p>
                                        <div className="row">
                                            <button className='btn-warning col-lg-2 mx-3' onClick={count == 0 ? NodecreseCount : decreseCount}>-</button>
                                            <button className='btn border col-lg-4  mx-4'>{count}</button>
                                            <button className='btn-danger col-lg-2  mx-2' onClick={IncreseCount}>+</button>
                                        </div>
                                    </div>

                                    {/* <div className="card-footer"> */}

                                    <button className='btn btn-success mx-1'>BUY IT NOW </button>

                                </div>
                            </div>
                        </div>



                    </>

                )
            })}
            </form>
        </section>

        <Footer/>

    </>;
};

export default ProductDetails;
