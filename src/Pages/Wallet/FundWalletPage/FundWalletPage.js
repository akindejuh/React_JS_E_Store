import React from 'react';
import './FundWalletPage.scss';
import { AiOutlineBank } from 'react-icons/ai';
import { MdArrowBackIos, MdOutlinePayment, MdCall, MdGroup } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { scrollpageon } from '../../../Redux/Actions/UtilsActions';
import { useNavigate } from 'react-router-dom';
import { app_name } from '../../../Configs/AppName';

const FundWalletPage = () => {
    const dispatch = useDispatch();
    dispatch(scrollpageon());
    const navigate = useNavigate();
    document.title = `${app_name()} | Wallet | Fund Wallet`;

    return (
        <div className='fund_wallet_page_main'>
            <div className='f_w_p_wrapper'>
                <div className='f_w_p_h'>
                    <MdArrowBackIos color='rgb(74, 74, 173)' onClick={() => navigate(-1)} size={25} className='f_w_p_h_a' />
                    <h1>Fund Wallet</h1>
                </div>
                <div className='f_w_p_b'>
                    <AiOutlineBank color='rgb(74, 74, 173)' size={35} />
                    <h4>012102102</h4>
                    <h6>Wema Bank</h6>
                    <p className='f_w_p_b_info'>This is your virtual bank account. Any transfer to it will be automatically added to your wallet.</p>
                    <p className='f_w_p_or'><span>or</span></p>
                </div>
                <div className='f_w_p_btn_wrapper'>
                    <div className='f_w_p_btn'>
                        <MdOutlinePayment color='white' size={30} />
                        <p>Fund with Card</p>
                    </div>
                    <div className='f_w_p_btn'>
                        <MdCall color='white' size={30} />
                        <p>Fund with USSD</p>
                    </div>
                    <div className='f_w_p_btn'>
                        <MdGroup color='white' size={30} />
                        <p>Share Funding Link</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FundWalletPage;
