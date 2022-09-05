import React, { useState } from 'react';
import './LoginPage.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { scrollpageoff, hidefooter } from '../../../Redux/Actions/UtilsActions';
import { login } from '../../../Redux/Actions/AuthActions';
import googleicon from '../../../Images/Home/google.png';
import { auth } from '../../../Configs/Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import ClipLoader from "react-spinners/ClipLoader";
import { app_name } from '../../../Configs/AppName';

const LoginPage = () => {
    const dispatch = useDispatch();
    dispatch(scrollpageoff());
    dispatch(hidefooter());
    const navigate = useNavigate();
    document.title = `${app_name()} | Login`;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [warning, setWarning] = useState('');
    const [showSpinner, setShowSpinner] = useState(false);

    const handleLogin = async () => {
        setWarning('');
        setShowSpinner(true);
        if (email.length !== 0 && password.length !== 0) {
            if (password.length < 6) {
                setWarning('Password must not be less than 6 characters!!!');
                setShowSpinner(false);
            } else {
                const t_email = email.trimEnd();
                const t_password = password.trimEnd();
                await signInWithEmailAndPassword(auth, t_email, t_password)
                    .then((res) => {
                        if (res.user?.uid !== null) {
                            dispatch(login());
                            navigate('/');
                            setShowSpinner(false);
                        } else {
                            setShowSpinner(false);
                            setWarning('Login failed, please try again!!!');
                        }
                    })
                    .catch((error) => {
                        setShowSpinner(false);
                        if (error.code === "auth/network-request-failed") {
                            setWarning('Network Error!!!');
                        } else if (error.code === "auth/user-not-found") {
                            setWarning('User not found, please input your correct credentials!!!');
                        } else if (error.code === "auth/wrong-password") {
                            setWarning('Wrong password, please try again!!!');
                        } else {
                            setWarning('Login failed, please try again!!!');
                        }
                    })
            }
        } else {
            setShowSpinner(false);
            setWarning('Please fill out the required fields');
        }
    }

    return (
        <div className='login_main'>
            <div className='login_container'>
                <div className='login_image'><div className='login_image_opacity'></div></div>
                <form className='login_form' onSubmit={(e) => e.preventDefault()}>
                    <h1>{app_name()}</h1>
                    <p>Welcome to {app_name()}</p>
                    <h5>Email</h5>
                    <input
                        type={'email'}
                        required
                        value={email}
                        placeholder={'Email'}
                        onChange={(e) => { setEmail(e.target.value); setWarning('') }}
                    />
                    <h5>Password</h5>
                    <input
                        type={'password'}
                        required
                        min={6}
                        value={password}
                        placeholder={'Password'}
                        onChange={(e) => { setPassword(e.target.value); setWarning('') }}
                    />
                    <h4>Forgot Password? <span onClick={() => console.log('Recover password')} style={{ color: 'rgb(130, 130, 214)', cursor: 'pointer' }}>Recover it</span></h4>
                    {!showSpinner && <button type='submit' onClick={handleLogin}>Login</button>}
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5px', marginBottom: '5px' }}>
                        {showSpinner && <ClipLoader color={'rgb(74, 74, 173)'} loading={showSpinner} size={30} />}
                    </div>
                    <p style={{ color: "red", fontSize: "12px" }}>{warning}</p>
                    <p className='login_or'><span>or</span></p>
                    <div className='login_form_google'>
                        <img src={googleicon} alt={'google-icon'} />
                        <span className='login_google_text'>Sign in with Google</span>
                    </div>
                    <h3>don't have an account, <span onClick={() => navigate('/signup')} style={{ color: 'rgb(130, 130, 214)', cursor: 'pointer' }}>sign up</span></h3>
                </form>
            </div>
        </div>
    )
}

export default LoginPage;