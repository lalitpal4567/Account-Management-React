import React from 'react'
import { Link } from 'react-router-dom'
import "./Homepage.css"

const Homepage = () => {
    return (
        <div className='container-fluid vh-100 text-center pb-3' style={{backgroundColor: "#7BD3EA"}}>
            <div className='container'>
            <p className='pt-3' style={{ fontSize: 30 }}>Thanks for visiting ChainTech Network</p>
            <p className=' fw-semibold' style={{fontSize: 25, color: "#F2F7A1"}}>We provide quality services that meets excellence. Our dedicated team provides top-tier services tailored to your needs.
                With us, expect reliability, integrity, and results that exceed expectations. Explore our offerings and
                experience the ChainTech Network difference today. </p>
            <p className=' fw-semibold' style={{fontSize: 20, color: "#000000"}}>To use our service please login</p>
            <ul className=' list-unstyled d-sm-flex justify-content-center column-gap-4'>
                <li className='rounded-5'>
                    <Link to="/signIn" className='btn border-0 px-5 w-100 mb-2'>Login</Link>
                </li>
                <li className='rounded-5'>
                    <Link to="/signUp" className='btn border-0 px-5 w-100'>Register</Link>
                </li>
            </ul>
            </div>
        </div>
    )
}

export default Homepage
