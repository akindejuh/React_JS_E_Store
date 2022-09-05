import React from 'react';
import './CouponsCard.scss';

import { FaFire } from 'react-icons/fa';

const CouponsCard = ({ coupon }) => {
    return (
        <div className='couponscard_main'>
            <div className='couponscard_main_h'>
                <h1>NGN <span>{coupon.price}</span> off</h1>
                <FaFire size={25} color={'rgb(74, 74, 173)'} />
            </div>
            <h6>{coupon.desc}</h6>
            <div className='couponscard_main_b'>
                <p>Expires in <span>{coupon.timeleft}</span>.</p>
                <span className='couponscard_main_btn'>Collect</span>
            </div>
        </div>
    )
}

export default CouponsCard;
