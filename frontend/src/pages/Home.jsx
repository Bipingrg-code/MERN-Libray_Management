import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
    const bannerImg = require('../images/banner.jpg')
    return (
        <div className='Home-Page text-white container-fluid'>
            <div className="container">
            <div className="row">
                <div className="col-lg-6 d-flex justify-content-center align-items-lg-start flex-column" style={{
                    height
                        : "91.5vh"
                }}>
                    <h2 style={{fontSize: "70px"}}>Book Store</h2>
                    <h3 style={{fontSize: "50px"}}>For You</h3>
                    <p className="mb-0" style={{color: "gray"}}>Check Out Book From Here</p>
                    <Link className='viewbook my-5' to='/books'>View Book</Link>
                </div>
                <div className="col-lg-6 d-flex justify-content-center align-items-center flex-column" style={{
                    height
                        : "91.5vh"
                }}>
                    <img src={bannerImg} alt="/" className='img-fluid mt-3 bannerimg'/>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Home