import React from 'react';
import './KYCVerifyPage.scss';
import { useDispatch } from 'react-redux';
import { scrollpageon, showfooter } from '../../../Redux/Actions/UtilsActions';
import { MdArrowBackIos } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { app_name } from '../../../Configs/AppName';

const KYCVerifyPage = () => {
    const dispatch = useDispatch();
    dispatch(scrollpageon());
    dispatch(showfooter());
    const navigate = useNavigate();

    document.title = `${app_name()} | KYC | Verification`;
    const screen_width = useSelector(state => state.ScreenWidth)

    return (
        <div className='kyc_v_main'>
            <div className='kyc_v_m_container'>
                <div className='kyc_v_m_h'>
                    <span className='kyc_v_m_h_a' onClick={() => navigate(-1)}>
                        <MdArrowBackIos size={30} color={'rgb(74, 74, 173)'} />
                    </span>
                    <h1>Quick KYC</h1>
                </div>
                <h6>We have sent you a Verification link, please check your email.</h6>
                <p>No worries, you can close this page and return to it later.</p>
                <button onClick={() => navigate('/kyc/final')}>Proceed <span><MdArrowBackIos color='white' size={screen_width < 900 ? 15 : 18} /></span></button>
            </div>
        </div>
    )
}

export default KYCVerifyPage;
