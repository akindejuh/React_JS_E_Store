import React from 'react';
import './ParcelBillsAndLocPage.scss';
import { MdCheck, MdArrowBackIos } from 'react-icons/md';
import { FaPen } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { scrollpageon, showfooter } from '../../../Redux/Actions/UtilsActions';
import { useNavigate } from 'react-router-dom';
import CustomCheckBox from '../../../Components/CustomCheckBox/CustomCheckBox';
import { app_name } from '../../../Configs/AppName';

// temp
import couriersData from '../../../Temp/CouriersData';

const ParcelBillsAndLocPage = () => {
    const dispatch = useDispatch();
    dispatch(scrollpageon());
    dispatch(showfooter());
    document.title = `${app_name()} | Checkout`;
    const navigate = useNavigate();
    const screen_width = useSelector(state => state.ScreenWidth);

    return (
        <div className='parcelbillsandlocpage_main'>
            <div className='pbl_m_w'>
                <div className='pbl_h'>
                    <div className='pbl_h_a' onClick={() => navigate(-1)}>
                        <MdArrowBackIos size={25} color={'rgb(74, 74, 173)'} />
                    </div>
                    <h2>Location and Bills</h2>
                </div>
                <div className='pbm_delivery'>
                    <h2>Pickup Location</h2>
                    <h4>John Doe</h4>
                    <p>+234 1234 5678</p>
                    <h6 className='pbm_d_d'>E-Store, USA.</h6>
                    <h6>E-Store, New York, USA.</h6>
                    <button>
                        <FaPen color='white' size={14} />
                        <p>Edit</p>
                    </button>
                </div>
                <hr className='pbm_hr' />
                <div className='pbm_delivery'>
                    <h2>Destination</h2>
                    <h4>John Doe</h4>
                    <p>+234 1234 5678</p>
                    <h6 className='pbm_d_d'>E-Store, USA.</h6>
                    <h6>E-Store, New York, USA.</h6>
                    <button>
                        <FaPen color='white' size={14} />
                        <p>Edit</p>
                    </button>
                </div>
                <hr className='pbm_hr' />
                <div className='pbm_pv'>
                    <h2>Parcel's Value</h2>
                    <input
                        type={'number'}
                        placeholder={"Enter your parcel's value"}
                    />
                </div>
                <hr className='pbm_hr' />
                <div className='pbm_courier_c'>
                    <h2>Courier Company</h2>
                    <select>
                        <option key={-1}>Select a Courier Company</option>
                        {couriersData.map((item, i) =>
                            <option key={i}>{item.name}</option>
                        )}
                    </select>
                    <h5><span>Fee</span>NGN 400</h5>
                </div>
                <hr className='pbm_hr' />
                <div className='pbm_orders'>
                    <h2>Orders Summary</h2>
                    <div className='pbm_orders_summary'>
                        <div className='pbm_o_s_i'>
                            <p>Courier Fee</p>
                            <h4>NGN <span>24000</span></h4>
                        </div>
                        <div className='pbm_o_s_i'>
                            <p>{'Insurance Fee (1% parcel value)'}</p>
                            <h4>NGN <span>500</span></h4>
                        </div>
                        <div className='pbm_o_s_i'>
                            <p>Total</p>
                            <h4>NGN <span>24500</span></h4>
                        </div>
                    </div>
                    <hr />
                    <div className='pbm_imp'>
                        <div className='pbm_imp_h'>
                            <CustomCheckBox name={'insure_parcel'}
                                handleSwitchTrue={() => console.log('ip_true')}
                                handleSwitchFalse={() => console.log('ip_false')}
                            />
                            <h3>Insure my Parcel</h3>
                        </div>
                        <p>{app_name()}'s insurance protects your parcels. We'll refund you the <i><b>parcel's value</b></i> in cases of damage. You can disable insurance or reduce parcel value to reduce insurance charge.</p>
                        <h4>Learn More</h4>
                    </div>
                </div>
                <hr className='pbm_hr' />
                <p className='pbm_mt'>By proceeding, you agree to {app_name()} courier terms.</p>
                <button className='pbm_btn'>
                    <p>Done</p>
                    <MdCheck color='white' size={screen_width < 720 ? 17 : 22} />
                </button>
            </div>
        </div >
    )
}

export default ParcelBillsAndLocPage;