import React, { useState } from 'react';
import './CheckoutPage.scss';
import CartItem from '../../../Cards/CartItem/CartItem';
import { MdCheck, MdArrowBackIos } from 'react-icons/md';
import { FaPen } from 'react-icons/fa';
import CustomCheckBox from '../../../Components/CustomCheckBox/CustomCheckBox';
import { useDispatch } from 'react-redux';
import { scrollpageon, showfooter } from '../../../Redux/Actions/UtilsActions';
import { PaymentType } from '../../../Data/CheckoutData';
import { useNavigate } from 'react-router-dom';
import { app_name } from '../../../Configs/AppName';

// temp data
import CartsData from '../../../Temp/CartsData';

const CheckoutPage = () => {
    const dispatch = useDispatch();
    dispatch(scrollpageon());
    dispatch(showfooter());
    document.title = `${app_name()} | Checkout`;
    const navigate = useNavigate();

    const GetCartStoreList = () => {
        const [storeList, setStoreList] = useState([]);
        for (let i = 0; i < CartsData.length; i++) {
            if (!storeList.includes(CartsData[i].store)) {
                setStoreList([...storeList, CartsData[i].store])
            } else {
                continue;
            }
        }
        return storeList;
    }

    return (
        <div className='checkoutpage_main'>
            <div className='cop_h'>
                <div className='cop_h_a' onClick={() => navigate(-1)}>
                    <MdArrowBackIos size={25} color={'rgb(74, 74, 173)'} />
                </div>
                <h2>Checkout</h2>
            </div>
            <div className='checkoutpage_delivery'>
                <h2>Delivery Details</h2>
                <h4>John Doe</h4>
                <p>+234 1234 5678</p>
                <h6 className='cop_d_d'>E-Store, USA.</h6>
                <h6>E-Store, New York, USA.</h6>
                <button>
                    <FaPen color='white' size={14} />
                    <p>Edit</p>
                </button>
            </div>
            {GetCartStoreList().map((store, index) =>
                <div className='cop_products_group' id={index % 2 === 0 ? 'cop_products_group' : ''}>
                    <div className='cpg_h'>
                        <CustomCheckBox name={`checkout_store_${store}`} handleSwitchFalse={() => console.log('off')} handleSwitchTrue={() => console.log('on')} />
                        <h3>{store}</h3>
                    </div>
                    <div className='cop_products'>
                        {CartsData.map((item) => item.store === store && <CartItem key={item.id} cart={item} />)}
                    </div>
                    <div className='cop_nts'>
                        <h2>Note to Seller</h2>
                        <div className='cop_nts_n'>
                            <div className='cop_nts_n_i'>
                                <FaPen color='rgb(74, 74, 173)' />
                            </div>
                            <input type={'text'} placeholder='Optional' />
                        </div>
                    </div>
                    <hr className='cop_hr' />
                    <div className='cop_payment_info'>
                        <div className='cop_p_i_w'>
                            <p>Sub-total</p>
                            <h4>NGN <span>24000</span></h4>
                        </div>
                        <div className='cop_p_i_w'>
                            <p>Shipping</p>
                            <h4>NGN <span>500</span></h4>
                        </div>
                        <div className='cop_p_i_w'>
                            <p>Discounts</p>
                            <h4>NGN <span>500</span></h4>
                        </div>
                        <div className='cop_p_i_w'>
                            <p>Coupons</p>
                            <h4>NGN <span>500</span></h4>
                        </div>
                        <div className='cop_p_i_w'>
                            <p>Total</p>
                            <h4>NGN <div>23500</div></h4>
                        </div>
                    </div>
                </div>
            )}
            <div className='cop_orders'>
                <h2>Orders Summary</h2>
                <div className='cop_orders_summary'>
                    <div className='cop_o_s_i'>
                        <p>Cart</p>
                        <h4>NGN <span>24000</span></h4>
                    </div>
                    <div className='cop_o_s_i'>
                        <p>Shipping</p>
                        <h4>NGN <span>500</span></h4>
                    </div>
                    <div className='cop_o_s_i'>
                        <p>Sub-Total</p>
                        <h4>NGN <span>500</span></h4>
                    </div>
                    <div className='cop_o_s_i'>
                        <p>Discounts</p>
                        <h4>NGN <span>500</span></h4>
                    </div>
                    <div className='cop_o_s_i'>
                        <p>Coupons</p>
                        <h4>NGN <span>500</span></h4>
                    </div>
                    <div className='cop_o_s_i'>
                        <p>Total</p>
                        <h4>NGN <div>23500</div></h4>
                    </div>
                </div>
            </div>
            <hr className='cop_hr' />
            <div className='cop_pyt_op'>
                <h2>Choose Payment Option</h2>
                {PaymentType.map((item) =>
                    <div className='cop_pt_w'>
                        <div className='cop_pt_w_i'>
                            {item.icon}
                        </div>
                        <div className='cop_pt_w_d'>
                            <h4>{item.name}</h4>
                            <p>{item.desc}</p>
                        </div>
                        <div className='cop_pt_w_r'>
                            <input type={'radio'} id={item.id} name={'checkoutpt_group'} />
                        </div>
                    </div>
                )}
            </div>
            <p className='cop_mt'>By proceeding, you agree to {app_name()} payment terms.</p>
            <button className='cop_btn'>
                <MdCheck color='white' size={22} />
                <p>Checkout</p>
            </button>
        </div >
    )
}

export default CheckoutPage;