import React, { useRef } from 'react';
import './SendMoneyPage.scss';
import { MdArrowBackIos, MdSend } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { scrollpageon } from '../../../Redux/Actions/UtilsActions';
import { useNavigate } from 'react-router-dom';
import SwitchButton from '../../../Components/SwitchButton/SwitchButton';
import BankListData from '../../../Data/BankListData';
import { app_name } from '../../../Configs/AppName';

const SendMoneyPage = () => {
    const dispatch = useDispatch();
    dispatch(scrollpageon());
    const navigate = useNavigate();
    document.title = `${app_name()} | Wallet | Send Money`;
    const sm_btn_ref = useRef();

    const handleSendMoney = (e) => {
        e.preventDefault();
        console.log('send money')
    }

    return (
        <div className='send_money_page_main'>
            <div className='s_m_p_wrapper'>
                <div className='s_m_p_h'>
                    <MdArrowBackIos color='rgb(74, 74, 173)' onClick={() => navigate(-1)} size={25} className='s_m_p_h_a' />
                    <h1>Send Money</h1>
                </div>
                <form className='s_m_p_b'>
                    <h6>Amount in Naira</h6>
                    <input type={'number'} placeholder={'10000'} required />
                    <h6>10 Digits Account Number</h6>
                    <input type={'number'} placeholder={'0123456789'} required />
                    <h6>Choose Bank</h6>
                    <select onChange={() => sm_btn_ref.current.focus()}>
                        {BankListData.map((item) => <option key={item.id}>{item.name}</option>)}
                    </select>
                    <h6>Purpose</h6>
                    <input type={'text'} placeholder='Payment for the new chair...' />
                    <div className='s_m_p_b_sb'>
                        <SwitchButton name={'sendmoney'} handleSwitchTrue={() => console.log('sendmoneytrue')} handleSwitchFalse={() => console.log('sendmoneyfalse')} />
                        <p>Save for later</p>
                    </div>
                    <button ref={sm_btn_ref} type='submit' className='s_m_p_btn' onClick={handleSendMoney}>
                        <p>Continue</p>
                        <MdSend color='white' size={25} />
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SendMoneyPage;
