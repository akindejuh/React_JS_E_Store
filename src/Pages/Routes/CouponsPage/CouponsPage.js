import React, { useState } from 'react';
import './CouponsPage.scss';
import { useDispatch } from 'react-redux';
import { scrollpageon, showfooter } from '../../../Redux/Actions/UtilsActions';
import { MdArrowBackIos } from 'react-icons/md';
import CouponsCard from '../../../Cards/CouponsCard/CouponsCard';
import CouponsData from '../../../Temp/CouponsData';
import { useNavigate } from 'react-router-dom';
import { app_name } from '../../../Configs/AppName';

const CouponsPage = () => {
    const dispatch = useDispatch();
    dispatch(scrollpageon());
    dispatch(showfooter());
    document.title = `${app_name()} | Coupons`;
    const navigate = useNavigate();
    const [isMyCoupons, setIsMyCoupons] = useState(false);

    return (
        <div className='couponspage_main'>
            <div className='couponspage_main_h'>
                <MdArrowBackIos size={25}
                    color={'rgb(74, 74, 173)'}
                    className='couponspage_main_h_a'
                    onClick={() => navigate(-1)}
                />
                <h2>Coupons</h2>
            </div>
            <div className='couponspage_p_f'>
                <span className='couponspage_p_f_btn' onClick={() => setIsMyCoupons(true)} id={isMyCoupons ? 'couponspage_p_f_btn' : ''}>
                    <p>My Coupons</p>
                </span>
                <span className='couponspage_p_f_btn' onClick={() => setIsMyCoupons(false)} id={isMyCoupons ? '' : 'couponspage_p_f_btn'}>
                    <p>Get Coupons</p>
                </span>
            </div>
            <div className='couponspage_p_g'>
                <div className='couponspage_p_g_i'>
                    <p className='couponspage_p_g_i_p'>Use Coupons to get discounts on your purchases. Save as you shop.</p>
                    <button className='couponspage_p_g_i_btn'>Learn More</button>
                </div>
                {CouponsData.map((item) => <CouponsCard coupon={item} />)}
            </div>
        </div>
    )
}

export default CouponsPage;