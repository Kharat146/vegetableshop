import React, { useEffect, useState } from 'react'
import Navigation from './FlipcartClone/Navigation'
import './Home.css'
import { FaTelegramPlane } from 'react-icons/fa'
import { BsCartCheckFill } from 'react-icons/bs'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import {BiRupee} from 'react-icons/bi'
// import { Routes, Route } from 'react-router-dom';
// import ProductCart from './ProductCart'


export default function Home(product) {

  const [cart, setCart] = useState([]);
  // const [data, setData] = useState("");
  const [cat, setcat] = useState("");
  let history = useHistory()

  useEffect(() => {
   
   
    axios.get("http://localhost:3000/fruit").then(response => {
      console.log(response.data);
      setCart(response.data)

    })

  }, []);

  const filterItem = [];
  const click = () => {
    history.push("/productdetails", { "id": "ok" })

}

  return (
    <>
      <Navigation />

      <div className="mainContainer">
        <div className="home">
        {/* ........................................ */}
          <section className="container contain">
            <div className="heading">
              <h3>NATURALLY ORGANIC</h3>
            </div>
            <div className="saleInfo">
              <h1>Sale Up to 30%</h1>
             </div>
            <div className="discription">
              <span>while the flour blends are the base for biodiversity in all bakes,</span>
              <span>mueslis are the key to super-boosting your rang and diversity score.</span>
            </div>
            <div className="button">
              <button >SHOP NOW</button>
            </div>
          </section>
          {/* .................................. */}
          <section className="extraInfo  ">
            <div className="inner-width ">
              <div className="extraInfoMain ">
                <div className="extrainfoimg">
                  <img src="//cdn.shopify.com/s/files/1/0035/5935/8509/files/Shipping-icon_100x.png?v=1615365127" alt="" />
                </div>
                <div className="infoSection">
                  <span>Free Worldwide Shipping</span>
                  <span>Free shipping on all orders over $100</span>
                </div>
              </div>
              <div className="extraInfoMain">
                <div className="extrainfoimg">
                  <img src="//cdn.shopify.com/s/files/1/0035/5935/8509/files/Shipping-icon-4_100x.png?v=1615365127" alt="" />
                </div>
                <div className="infoSection">
                  <span>Easy & Fast 30 Days Returns</span>
                  <span>Simply return it within 30 days for an exchange.</span>
                </div>
              </div>
              <div className="extraInfoMain">
                <div className="extrainfoimg">
                  <img src="//cdn.shopify.com/s/files/1/0035/5935/8509/files/Shipping-icon-2_100x.png?v=1615365127" alt="" />
                </div>
                <div className="infoSection">
                  <span>100% Secure Payment Checkout</span>
                  <span>We ensure secure payment with PEV</span>
                </div>
              </div>
              <div className="extraInfoMain">
                <div className="extrainfoimg">
                  <img src="//cdn.shopify.com/s/files/1/0035/5935/8509/files/Shipping-icon-3_100x.png?v=1615365127" alt="" />
                </div>
                <div className="infoSection">
                  <span>24/7 Customer Help & Support</span>
                  <span>Contact us 24 hours a day, 7 days a week</span>
                </div>
              </div>
            </div>
          </section>
          {/*............... categories.................. */}
          <div className=" categories-box">
            <div className="main-categori-box">
              <div className="categori-heading">
                <h1>Shop By Categories</h1>
              </div>
              <div className="wrapper">
                <div className="item">
                  <img src="https://images.farmiso.in/images/products/731626346384125_64.jpg" alt="" />
                  <h3 onClick={() => setcat("food")}>food</h3>
                </div>
                <div className="item">
                  <img src="https://images.farmiso.in/images/products/881626346489062_64.jpg" alt="" />
                  <h3 onClick={() => setcat("vegetables")}>vegetables</h3>

                </div>
                <div className="item">
                  <img src="https://images.farmiso.in/images/products/301626346470414_64.jpg" alt="" />
                  <h3 onClick={() => setcat("Grocery")}>Grocery</h3>
                </div>
                <div className="item">
                  <img src="https://images.farmiso.in/images/products/171626346300276_64.jpg" alt="" />
                  <h3 onClick={() => setcat("Eggs")}>Eggs</h3>
                </div>
                <div className="item">
                  <img src="https://images.farmiso.in/images/products/921631720423756_64.jpg" alt="" />
                  <h3 onClick={() => setcat("Household Care")}>Household Care</h3>
                </div>

              </div>

            </div>
          </div>
          {/* ---------------------product item ------------------------ */}
          <section className="main-card--cointainer row">
            {cart.filter((el) => {
              return el.productCategory === cat;
            }).map((dd) => {
              return (

                <>
                


                  <div className="card col-8 col-sm-8 ml-sm-5 ml-3 .mx-md-5  col-md-4 col-lg-2  m-5 my-3 shadow bg-white rounded" >
                    <div className="card-heading text-end text-secondary"> {dd.productCategory}*</div>
                    <div className="card-body">
                      <img src={dd.productImage} alt="" />
                      <h4>{dd.productName}</h4>

                    </div>
                    <div className="card-footer">
                      <h5 className="text-right text-secondary">{dd.productValue}</h5>
                      <h3><BiRupee/>{dd.productPrice} </h3>
                      {/* <button className='btn btn-danger'>Delete <MdDeleteOutline/> </button>
                                <button className='btn btn-success mx-1'>Update <FaEdit/></button> */}
                      <button className='btn btn-success px-4 mx-3 form-conrtol' onClick={() => {history.push("/productdetails", { "id": dd.id })}} > BUY IT NOW <BsCartCheckFill /></button>
                    </div>
                  </div>
                  {/* </div> */}

                </>

              )
            })}
          </section>





        </div>



      </div>



    </>
  )
}
