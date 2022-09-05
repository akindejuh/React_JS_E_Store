import React from 'react';
import './KYCFinalPage.scss';
import { useDispatch } from 'react-redux';
import { scrollpageon, showfooter } from '../../../Redux/Actions/UtilsActions';
import { MdArrowBackIos } from 'react-icons/md';
import { AiOutlineBank } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { app_name } from '../../../Configs/AppName';

const KYCFinalPage = () => {
    const dispatch = useDispatch();
    dispatch(scrollpageon());
    dispatch(showfooter());
    const navigate = useNavigate();

    document.title = `${app_name()} | KYC | Final Step`;
    const screen_width = useSelector(state => state.ScreenWidth);

    const handleKYCFinal = (e) => {
        e.preventDefault();
        console.log('KYC final')
    }

    return (
        <div className='kyc_f_main'>
            <div className='kyc_f_container'>
                <div className='kyc_f_c_1'>
                    <div className='kyc_f_c_h'>
                        <span className='kyc_f_c_h_a' onClick={() => navigate(-1)}>
                            <MdArrowBackIos size={30} color={'rgb(74, 74, 173)'} />
                        </span>
                        <h1>Quick KYC</h1>
                    </div>
                    <div className='kyc_f_info'>
                        <div className='kyc_f_i_icon'>
                            <AiOutlineBank size={35} color={'rgb(74, 74, 173)'} />
                        </div>
                        <div className='kyc_f_i_wrapper'>
                            <p className='kyc_f_i_w_txt'>Your BVN is only needed for the creation of your virtual account. We do not store this information.</p>
                            <a href='www.google.com' rel='noreferrer' target='_blank' className='kyc_f_i_w_btn'>Learn More</a>
                        </div>
                    </div>
                </div>
                <form className='kyc_f_c_2'>
                    <h6>Your Phone Number</h6>
                    <input type={'tel'} required max={11} placeholder='08012341234' />
                    <h6>Your BVN</h6>
                    <input type={'number'} required placeholder='0123456789' />
                    <h6>{'Referral Code (Optional)'}</h6>
                    <input type={'text'} placeholder='02fa24b56' />
                    <button type='submit' className='kyc_f_p_btn' onClick={handleKYCFinal}>
                        Proceed
                        <span><MdArrowBackIos size={screen_width < 900 ? 15 : 20} color='white' /></span>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default KYCFinalPage;
