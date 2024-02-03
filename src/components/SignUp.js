import React, { useEffect, useState } from 'react'
import "./SignUp.css"
import { useDispatch, useSelector } from 'react-redux';
import { createAccount } from '../redux/reducers/createAccountSlice';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.signUp.account)
    const navigate = useNavigate();
    const [confirmPassword, setConfirmPassword] = useState('');


    // states for storing input field values
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        contactNo: '',
        password: '',
    });

    // function to handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // function to store confirm password
    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    // function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // check if passwords match
        if (formData.password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        // dispatch action to store formData in Redux state
        dispatch(createAccount(formData))

        // You can also reset the form here if needed
        setFormData({
            email: '',
            firstName: '',
            lastName: '',
            contactNo: '',
            password: '',
        });

        // upon successfull registration, will be redirected to Login page
        navigate("/signIn")
    }

    return (
        <div className='row px-0'>
            <div className='col d-none d-sm-block p-3 pe-sm-0'>
                <img className=' object-fit-cover w-100 h-100 rounded-start-4' src="/images/loginImage.jpg"></img>
            </div>
            <div className='col col-md-6 col-lg-7 p-3 ps-sm-0'>
                <p className='fw-bold text-center bg-primary text-white py-2 mb-0 login-css ' style={{ fontSize: 30 }}>Registration</p>
                <form className='p-3 bg-dark-subtle form-css' onSubmit={handleSubmit}>
                    <div className='mb-2'>
                        <label className='form-label'>Email Address</label>
                        <input
                            type="email"
                            className='form-control'
                            name="email"
                            aria-describedby='emailHelp'
                            placeholder='enter email'
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                        ></input>
                    </div>
                    <div className=' d-md-flex column-gap-2'>
                        <div className='mb-2 flex-grow-1'>
                            <label className='form-label'>First Name</label>
                            <input
                                type="text"
                                className='form-control'
                                name="firstName"
                                aria-describedby='firstName'
                                placeholder='enter first name'
                                required
                                value={formData.firstName}
                                onChange={handleInputChange}
                            ></input>
                        </div>
                        <div className='mb-2 flex-grow-1'>
                            <label className='form-label'>Last Name</label>
                            <input
                                type="text"
                                className='form-control'
                                name="lastName"
                                aria-describedby='lastName'
                                placeholder='enter last name'
                                required
                                value={formData.lastName}
                                onChange={handleInputChange}
                            ></input>
                        </div>
                    </div>
                    <div className='d-md-flex column-gap-2'>
                        <div className='mb-2 flex-grow-1'>
                            <label className='form-label'>Contact No.</label>
                            <input
                                type="tel"
                                className='form-control'
                                name="contactNo"
                                aria-describedby='contactHelp'
                                placeholder='enter mobile'
                                value={formData.contactNo}
                                onChange={handleInputChange}
                            ></input>
                            <div className='form-text'>(Not mandatory)  You contact no. will not be shared with anyone.</div>
                        </div>
                    </div>
                    <div className='mb-2'>
                        <label className='form-label'>Password</label>
                        <input
                            type="password"
                            className='form-control'
                            name="password"
                            aria-describedby='password'
                            placeholder='enter password'
                            required
                            value={formData.password}
                            onChange={handleInputChange}
                        ></input>
                    </div>
                    <div className='mb-2'>
                        <label className='form-label'>Confirm Password</label>
                        <input
                            type="password"
                            className='form-control'
                            aria-describedby='confirmPassword'
                            placeholder='enter password'
                            required
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                        ></input>
                    </div>
                    <button type="submit" className='btn btn-success w-100'>Create Account</button>
                </form>
            </div >
        </div >
    )
}

export default SignUp
