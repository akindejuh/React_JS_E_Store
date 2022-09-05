import React, { useState } from 'react';
import './SignupPage.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { hidefooter, scrollpageoff } from '../../../Redux/Actions/UtilsActions';
import googleicon from '../../../Images/Home/google.png';
import { login } from '../../../Redux/Actions/AuthActions';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../Configs/Firebase';
import ClipLoader from "react-spinners/ClipLoader";
import { app_name } from '../../../Configs/AppName';

const SignupPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    dispatch(scrollpageoff());
    dispatch(hidefooter());
    document.title = `${app_name()} | SignUp`;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [c_Password, setC_Password] = useState('');
    const [warning, setWarning] = useState('');
    const [showSpinner, setShowSpinner] = useState(false);

    const handleSignup = async () => {
        setShowSpinner(true);
        setWarning('');
        if (email.length !== 0 && password.length !== 0 && c_Password.length !== 0) {
            if (password.length < 6 || c_Password.length < 6) {
                setWarning('Password must not be less than 6 characters!!!');
            } else {
                if (password === c_Password) {
                    try {
                        const t_email = email.trimEnd();
                        const t_password = password.trimEnd();
                        createUserWithEmailAndPassword(auth, t_email, t_password)
                            .catch((error) => {
                                setShowSpinner(false);
                                if (error.code === "auth/network-request-failed") {
                                    setWarning('Network Error!!!');
                                } else if (error.code === "auth/email-already-in-use") {
                                    setWarning('Email is already in use!!!');
                                } else {
                                    setWarning('SignUp failed, please try again!!!');
                                }
                            })
                            .then((res) => {
                                if (res.user.uid !== null) {
                                    dispatch(login());
                                    navigate('/');
                                    setShowSpinner(false);
                                } else {
                                    setShowSpinner(false);
                                    setWarning('SignUp failed, please try again!!!');
                                }
                            })
                    } catch (err) {
                        setShowSpinner(false);
                        setWarning('SignUp failed, please try again!!!');
                    }
                } else {
                    setShowSpinner(false);
                    setWarning('Passwords do not match!!!');
                }
            }
        } else {
            setShowSpinner(false);
            setWarning('Please fill in the required inputs...');
        }
    }

    return (
        <div className='signup_main'>
            <div className='signup_container'>
                <div className='signup_image'><div className='signup_image_opacity'></div></div>
                <form className='signup_form' onSubmit={(e) => e.preventDefault()}>
                    <h1>{app_name()}</h1>
                    <p>Welcome to {app_name()}</p>
                    <h5>Email</h5>
                    <input
                        type={'email'}
                        placeholder={'Email'}
                        required
                        value={email}
                        onChange={(e) => { setEmail(e.target.value); setWarning('') }}
                    />
                    <h5>Password</h5>
                    <input
                        placeholder='Minimum of 6 characters'
                        type={'password'}
                        required
                        min={6}
                        value={password}
                        onChange={(e) => { setPassword(e.target.value); setWarning('') }}
                    />
                    <h5>Confirm Password</h5>
                    <input
                        placeholder='Minimum of 6 characters'
                        min={6}
                        type={'password'}
                        required
                        value={c_Password}
                        onChange={(e) => { setC_Password(e.target.value); setWarning('') }}
                    />
                    {!showSpinner && <button type='submit' onClick={handleSignup}>Sign Up</button>}
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5px', marginBottom: '5px' }}>
                        {showSpinner && <ClipLoader color={'rgb(74, 74, 173)'} loading={showSpinner} size={30} />}
                    </div>
                    <p style={{ color: "red", fontSize: "12px", marginBottom: '5px' }}>{warning}</p>
                    <p className='signup_or'><span>or</span></p>
                    <div className='signup_form_google'>
                        <img src={googleicon} alt={'google-icon'} />
                        <span className='signup_google_text'>Sign up with Google</span>
                    </div>
                    <h3>already have an account, <span onClick={() => navigate('/login')} style={{ color: 'rgb(130, 130, 214)', cursor: 'pointer' }}>login</span></h3>
                </form>
            </div>
        </div>
    )
}

export default SignupPage;