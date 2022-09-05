import React, { useRef } from 'react';
import './BuyAirtimePage.scss';
import { MdArrowBackIos, MdSend } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { scrollpageon } from '../../../Redux/Actions/UtilsActions';
import { useNavigate, useParams } from 'react-router-dom';
import { app_name } from '../../../Configs/AppName';

const BuyAirtimePage = () => {
    const id = useParams('id').id;
    const dispatch = useDispatch();
    dispatch(scrollpageon());
    const navigate = useNavigate();
    document.title = `${app_name()} | Wallet | Airtime | ${id}`;
    const sm_btn_ref = useRef();

    const handleBuyAirtime = (e) => {
        e.preventDefault();
        console.log(`Purchasing ${id}'s Data`)
    }

    return (
        <div className='buy_airtime_page_main'>
            <div className='b_a_p_wrapper'>
                <div className='b_a_p_h'>
                    <MdArrowBackIos color='rgb(74, 74, 173)' onClick={() => navigate(-1)} size={25} className='b_a_p_h_a' />
                    <h1>{id} Airtime</h1>
                </div>
                <form className='b_a_p_b'>
                    <h6>Enter Amount in Naira</h6>
                    <input
                        type={'number'}
                        placeholder={'5000'}
                        required={true}
                    />
                    <h6>Enter your Phone Number</h6>
                    <input
                        type={'number'}
                        placeholder={'08012341234'}
                        required={true}
                        maxLength={11}
                        max={11}
                    />
                    <h5>No Additional Fee</h5>
                    <button ref={sm_btn_ref} type='submit' className='b_a_p_btn' onClick={handleBuyAirtime}>
                        <p>Buy Now</p>
                        <MdSend color='white' size={25} />
                    </button>
                </form>
            </div>
        </div>
    )
}

export default BuyAirtimePage;
