import React, { useState } from 'react';
import './OrdersPage.scss';
import { useDispatch } from 'react-redux';
import { scrollpageon, showfooter } from '../../../Redux/Actions/UtilsActions';
import { useNavigate } from 'react-router-dom';
import OrdersItem from '../../../Cards/OrdersItem/OrdersItem';
import { MdOutlinePending, MdOutlineDoneOutline, MdArrowBackIos } from 'react-icons/md';
import { app_name } from '../../../Configs/AppName';

// temp data
import OrdersData from '../../../Temp/OrdersData';

const OrdersPage = () => {
    const dispatch = useDispatch();
    dispatch(scrollpageon());
    dispatch(showfooter());
    document.title = `${app_name()} | Orders`;
    const navigate = useNavigate();
    const [isPending, setIsPending] = useState(true);

    return (
        <div className='orderspage_main'>
            <div className='orders_p_h'>
                <div className='orders_p_h_a' onClick={() => navigate(-1)}>
                    <MdArrowBackIos size={25} color={'rgb(74, 74, 173)'} />
                </div>
                <h2>My Orders</h2>
            </div>
            <div className='orders_p_f'>
                <span className='orders_p_f_btn' onClick={() => setIsPending(true)} id={isPending ? 'orders_p_f_btn' : ''}>
                    <MdOutlinePending color={isPending ? 'white' : 'rgb(74, 74, 173)'} size={18} />
                    <p>Pending</p>
                </span>
                <span className='orders_p_f_btn' onClick={() => setIsPending(false)} id={isPending ? '' : 'orders_p_f_btn'}>
                    <MdOutlineDoneOutline color={isPending ? 'rgb(74, 74, 173)' : 'white'} size={18} />
                    <p>Finished</p>
                </span>
            </div>
            <div className='orders_p_g'>
                <div className='orders_p_g_i'>
                    <p className='o_p_g_i_p'>At {app_name()}, our vision is to make businesses safer. Please tap the button bellow to understand how we protect your parcel.</p>
                    <button className='o_p_g_i_btn'>Learn More</button>
                </div>
                {OrdersData.map((item) => <OrdersItem order={item} />)}
            </div>
        </div>
    )
}

export default OrdersPage;