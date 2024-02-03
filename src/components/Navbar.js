import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

const Navbar = () => {
    const data = useSelector((state) => state.signUp.account);
    const [userData, setUserData] = useState({});
    const {id} = useParams();
    
    useEffect(() =>{
        const fetchAccount = () =>{
            const userAccount = data.find((userInfo) => userInfo.id === id);
            setUserData(userAccount);
        }
        fetchAccount();
        console.log(userData);
    }, [id, data])

    return (
        <nav className='navbar' style={{backgroundColor: "#7077A1"}}>
            <div className='container'>
                <Link className="navbar-brand fw-bolder text-white" to="/">ChainTech Network</Link>
                <div className='collapse navbar-collapse'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <Link className='nav-link active' aria-current="page" to="/home">Home</Link>
                        </li>
                    </ul>
                </div>
                <div className='d-flex align-items-center column-gap-3'>
                    <p className='m-0 fw-bold text-white'>Welcome</p>
                    <Link to="/userDetails" className=' rounded-circle flex-shrink-0 text-decoration-none' style={{ width: 50, height: 50 }}>
                        <img className='object-fit-fill w-100' src="/" alt="image"></img>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
