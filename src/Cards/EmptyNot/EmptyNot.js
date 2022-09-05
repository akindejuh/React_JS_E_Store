import React from 'react';
import './EmptyNot.scss';

const PaymentAlert = () => {
    return (
        <div className='emptynot_main'>
            <div className='emptynot_alert_1'>
                <div className='emptynot_a_icon'></div>
            </div>
            <div className='emptynot_alert_2'>
                <div className='emptynot_a_store'></div>
                <div className='emptynot_a_product'></div>
                <div className='emptynot_a_time'></div>
            </div>
        </div>
    )
}

export default PaymentAlert;