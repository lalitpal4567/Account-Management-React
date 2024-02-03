import React, { useEffect, useState } from 'react'
import "./SignIn.css"
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';


const SignIn = () => {
  const userData = useSelector((state) => state.signUp.account);
  const [loginData, setLoginData] = useState({ email: "", password: "" })
  const [isLogin, setLogin] = useState(false);
  const [userId, setUserId] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    // check if userId is defined and navigate to UserDetails page
    if (userId !== undefined) {
      navigate(`/userDetails/${userId}`);
    }
  }, [userId, navigate]);

  // function to store input values into the states
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  // function to perform final submission of form
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = userData.find(user => user.email === loginData.email);

    // check whether a user exists or not
    if (user) {
      if (user.password === loginData.password) {
        alert("login successfully")
        setLogin(true);
        setUserId(user.id);
      } else {
        alert("wrong password")
      }
    } else {
      alert("email not found")
    }

    // clear form fields after submission
    setLoginData({
      email: "",
      password: "",
    })
  }

  // function to clear or reset the form fields
  const handleReset = () => {
    setLoginData({ email: "", password: "" });
  }
  
  return (
    <div className='row gx-0'>
      <div className='col d-none d-sm-block p-2 overflow-hidden pe-0 ' style={{ maxHeight: 302 }}>
        <img className='object-fit-cover w-100 h-100 rounded-start-4' src="./images/image2.jpg" />
      </div>
      <div className='col p-2 ps-sm-0'>
        <p className='fw-bold text-center bg-primary text-white py-2 mb-0 login-css' style={{ fontSize: 30 }}>Login</p>
        <form className='p-3 bg-dark-subtle form-css' onSubmit={handleSubmit}>
          <div className='mb-2'>
            <label className='form-label'>Email Address</label>
            <input
              type="email"
              className='form-control'
              aria-describedby='emailHelp'
              placeholder='enter email'
              name="email"
              required
              value={loginData.email}
              onChange={handleInputChange}
            ></input>
          </div>
          <div className='mb-2'>
            <label className='form-label'>Password</label>
            <input
              type="password"
              className='form-control'
              aria-describedby='password'
              placeholder='enter password'
              name="password"
              required
              value={loginData.password}
              onChange={handleInputChange}
            ></input>
          </div>
          {isLogin && <p>Login Successfully</p>}
          <div className='d-flex column-gap-3'>
            <button type="button" className='btn btn-primary flex-grow-1' onClick={handleReset}>Reset</button>
            <button type='submit' className='btn btn-primary flex-grow-1'>Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignIn
