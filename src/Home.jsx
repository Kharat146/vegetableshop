import React, { useEffect, useState } from 'react'
import Navigation from './NavBar/Navigation'
import './Home.css'
import { FaTelegramPlane } from 'react-icons/fa'
import { BsCartCheckFill } from 'react-icons/bs'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import {BiRupee} from 'react-icons/bi'
import {GrProductHunt} from 'react-icons/gr'
import Footer from './Footer'
// import { Routes, Route } from 'react-router-dom';
// import ProductCart from './ProductCart'


export default function Home(product) {

  const [cart, setCart] = useState([]);
  // const [data, setData] = useState("");
  const [cat, setcat] = useState("food");
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
                <h1 >Shop By Categories</h1>
              </div>
          
              <div className="row ">
                <div className="col-sm-2 item text-center mx-5 mt-5 py-2"  onClick={() => setcat("food")}>
                  <img className='mt-5' src="https://www.freepnglogos.com/uploads/vegetables-png/vegetables-download-vegetable-photos-png-image-pngimg-3.png" alt="" />
                  <h4 className='mt-5'>food</h4>
                </div>
                <div className="col-sm-2 item text-center mx-5 mt-5  py-2" onClick={() => setcat("vegetables")}>
                  <img className='mt-5' src="https://static.wixstatic.com/media/2cd43b_a31d4c6a72524636ade99b4600b0e602~mv2.png" alt="" />
                  <h4 className='mt-5' >vegetables</h4>

                </div>
                <div className="item col-sm-2 text-center mx-5 mt-5 py-2 " onClick={() => setcat("Grocery")}>
                  <img src="http://www.pngplay.com/wp-content/uploads/7/Grocery-Items-Transparent-Background.png" alt="" />
                  <h4 className='mt-4' >Grocery</h4>
                </div>
               
                <div className="col-sm-2 item text-center mx-5 mt-5 py-2" onClick={() => setcat("Household Care")}>
                  <img src="https://freepngimg.com/thumb/grocery/41619-7-groceries-free-download-image.png" alt="" />
                  <h4 className='mt-4'>Household Care</h4>
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
                    <div className="card-heading text-end text-secondary"><GrProductHunt className='mx-3 text-start'/> {dd.productCategory}*</div>
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
          {/* ----------------------Footer Section-------------------- */}
          <section>
          <Footer/>
          </section>




        </div>



      </div>


    
    </>
  )
}
