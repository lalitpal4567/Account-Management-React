import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { updateUserDetails } from '../redux/reducers/createAccountSlice';

const UserAccountDetails = () => {
    const user = useSelector((state) => state.signUp.account);
    const [userDetail, setUserDetail] = useState({});
    const [isEditMode, setIsEditMode] = useState(false);
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        const fetchData = () => {
            const userData = user.find((data) => data.id === id)
            setUserDetail(userData);
        }
        fetchData();
    }, [id, user])

    // function to enable editing or update
    const handleEditClick = () => {
        setIsEditMode(true);    // enable edit mode
    }

    // function to save the changes in user account details
    const handleSaveClick = () => {
        setIsEditMode(false); // disable edit mode
        dispatch(updateUserDetails(userDetail));
    }

    // function to store form input values into the state
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserDetail({ ...userDetail, id, [name]: value });
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col d-flex justify-content-center py-3 py-sm-5 px-3'>
                    <div className=' rounded-circle border-1 border-black border overflow-hidden' style={{ width: 150, height: 150 }}>
                        <img src="/images/avatar.svg" className='object-fit-contain w-100 h-100' alt="user photo" />
                    </div>
                </div>
                <div className='w-100 d-sm-none'></div>
                <div className='col py-4 py-sm-5 px-3'>
                    <form>
                        <div className='mb-3 d-sm-flex align-items-center'>
                            <label className='m-0 ' style={{minWidth: 90}}>Email</label>
                            <input
                                type="email"
                                className='form-control'
                                value={userDetail.email}
                                disabled
                            ></input>
                        </div>
                        <div className='mb-3 d-sm-flex align-items-center'>
                            <label className='m-0 flex-shrink-0' style={{minWidth: 90}}>First name</label>
                            <input
                                type="text"
                                className='form-control'
                                value={userDetail.firstName}
                                name= "firstName"
                                disabled={!isEditMode}
                                onChange={handleInputChange}
                            ></input>
                        </div>
                        <div className='mb-3 d-sm-flex align-items-center'>
                            <label className='m-0 flex-shrink-0' style={{minWidth: 90}}>Last name</label>
                            <input
                                type="text"
                                className='form-control'
                                value={userDetail.lastName}
                                name="lastName"
                                disabled={!isEditMode}
                                onChange={handleInputChange}
                            ></input>
                        </div>
                        <div className='mb-3 d-sm-flex align-items-center'>
                            <label className='m-0' style={{minWidth: 90}}>Mobile</label>
                            <input
                                type="tel"
                                className='form-control'
                                value={userDetail.contactNo}
                                name="contactNo"
                                disabled={!isEditMode}
                                onChange={handleInputChange}
                            ></input>
                        </div>
                    </form>
                    {isEditMode ? (
                        <button className="btn btn-primary" onClick={handleSaveClick}>Save</button>
                    ) : (
                        <button className="btn btn-primary" onClick={handleEditClick}>Edit</button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default UserAccountDetails
