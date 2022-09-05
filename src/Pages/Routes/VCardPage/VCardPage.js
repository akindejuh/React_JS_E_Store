import React from 'react';
import './VCardPage.scss';
import { FaLock, FaClock, FaPen, FaDollarSign, FaCcMastercard } from 'react-icons/fa';
import { MdShield } from 'react-icons/md';
import CustomButton from '../../../Components/CustomButton/CustomButton';
import CustomRadio from '../../../Components/CustomRadio/CustomRadio';
import SwitchButton from '../../../Components/SwitchButton/SwitchButton';
import VCardButtonsData from '../../../Data/VCardButtonsData';
import UnrestrictedPaymentsData from '../../../Data/UnrestrictedPaymentsData';
import { useDispatch } from 'react-redux';
import { scrollpageon, showfooter } from '../../../Redux/Actions/UtilsActions';
import { auth } from '../../../Configs/Firebase';
import { app_name } from '../../../Configs/AppName';

const VCardPage = () => {
    const dispatch = useDispatch();
    dispatch(scrollpageon());
    dispatch(showfooter());
    const iconcolor = 'rgb(74, 74, 173)';
    const name = auth.currentUser?.displayName || 'User';
    document.title = `${app_name()} | Virtual Card`;
    const comingSoon = false;

    return (
        <div className='vcard_main'>
            {comingSoon &&
                <div className='tn_m_comingsoon'>
                    <h1>VCard</h1>
                    <h2>Coming Soon</h2>
                </div>
            }
            {!comingSoon &&
                <div className='tn_m_container'>
                    <div className='vcard_info_buttons'>
                        <div className='tn_i_card'>
                            <div className='tn_i_card_top'>
                                <span className='tn_i_card_top_1'>
                                    <p>{name.length >= 30 ? `${name.slice(0, 30)}...` : name}</p>
                                    <h4>0000 21343 1831 4753</h4>
                                </span>
                                <span className='tn_i_card_top_2'><FaLock color='rgb(170 ,170 ,170)' /></span>
                            </div>
                            <div className='tn_i_card_bottom'>
                                <div>
                                    <p>VALID TILL</p>
                                    <h3>12 / 22</h3>
                                </div>
                                <h4>Virtual Card</h4>
                            </div>
                        </div>
                        <div className='tn_buttons'>
                            {VCardButtonsData.map((item) => <CustomButton custombutton={item} />)}
                        </div>
                        <div className='tn_i_timer'>
                            <span className='tn_i_timer_1'>
                                <div className='tn_i_timer_1_t'>
                                    <FaClock color={iconcolor} size={25} />
                                    <p>Timer</p>
                                </div>
                                <p className='tn_i_timer_1_b'>Automatically freeze card in 5 minutes</p>
                            </span>
                            <span className='tn_i_timer_2'><SwitchButton name={'timer'} handleSwitchTrue={() => console.log('timer True')} handleSwitchFalse={() => console.log('timer True')} /></span>
                        </div>
                        <div className='tn_virtualcard'>
                            <span className='tn_vc_1'>
                                <div className='tn_vc_1_t'>
                                    <FaCcMastercard color={iconcolor} size={25} />
                                    <p>Virtual Card</p>
                                </div>
                                <p className='tn_vc_1_b'>Your Virtual Card is also a Mastercard for shopping online. You can Enable or Disable it.</p>
                            </span>
                            <span className='tnn_vc_2'><SwitchButton name={'virtual_card'} handleSwitchTrue={() => console.log('virtual_card True')} handleSwitchFalse={() => console.log('virtual_card True')} /></span>
                        </div>
                    </div>
                    <div className='vcard_security'>
                        <div className='tn_secret_number'>
                            <div className='tn_secret_number_header'>
                                <span className='tn_sn_h_1'>
                                    <div className='tn_sn_h_1_t'>
                                        <MdShield color={iconcolor} size={25} />
                                        <p>Secret Number</p>
                                    </div>
                                    <p className='tn_sn_h_1_b'>We'll ask before payment</p>
                                </span>
                                <span className='tn_sn_h_2'><SwitchButton name={'secret_num'} handleSwitchTrue={() => console.log('secret_num True')} handleSwitchFalse={() => console.log('secret_num True')} /></span>
                            </div>
                            <div className='tn_secret_number_input'>
                                <span className='tn_sn_i_pen'><FaPen color={'rgb(100, 100, 100)'} size={19} /></span>
                                <input className='tn_sn_i' type={'number'} placeholder='Avoid using passwords...' />
                            </div>
                            <button className='tn_secret_number_button' type='button'>Save</button>
                        </div>
                        <div className='tn_upay'>
                            <div className='tn_upay_header'>
                                <span className='tn_upay_h_1'>
                                    <div className='tn_upay_h_1_t'>
                                        <FaDollarSign color={iconcolor} size={25} />
                                        <p>Unrestricted Payments</p>
                                    </div>
                                    <p className='tn_upay_h_1_b'>We will always allow payments less than NGN 500. This also applies to when the card is frozen.</p>
                                </span>
                                <span className='tn_upay_h_2'><SwitchButton name={'u_payments'} handleSwitchTrue={() => console.log('u_payments True')} handleSwitchFalse={() => console.log('u_payments False')} /></span>
                            </div>
                            <div className='tn_upay_radio'>
                                {UnrestrictedPaymentsData.map((item) => <CustomRadio customradio={item} />)}
                            </div>
                        </div>

                    </div>
                </div>
            }
        </div>
    )
}

export default VCardPage;