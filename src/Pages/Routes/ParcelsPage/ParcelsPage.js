import React, { useState } from 'react';
import './ParcelsPage.scss';
import { useDispatch } from 'react-redux';
import { scrollpageon, showfooter } from '../../../Redux/Actions/UtilsActions';
import { useNavigate } from 'react-router-dom';
import OrdersItem from '../../../Cards/OrdersItem/OrdersItem';
import { MdOutlinePending, MdOutlineDoneOutline, MdArrowBackIos } from 'react-icons/md';
import { app_name } from '../../../Configs/AppName';

// temp data
import OrdersData from '../../../Temp/OrdersData';

const ParcelsPage = () => {
    const dispatch = useDispatch();
    dispatch(scrollpageon());
    dispatch(showfooter());
    document.title = `${app_name()} | Parcels`;
    const navigate = useNavigate();
    const [isPending, setIsPending] = useState(true);

    return (
        <div className='parcelspage_main'>
            <div className='parcels_p_h'>
                <div className='parcels_p_h_a' onClick={() => navigate(-1)}>
                    <MdArrowBackIos size={25} color={'rgb(74, 74, 173)'} />
                </div>
                <h2>My Parcels</h2>
            </div>
            <div className='parcels_p_f'>
                <span className='parcels_p_f_btn' onClick={() => setIsPending(true)} id={isPending ? 'parcels_p_f_btn' : ''}>
                    <MdOutlinePending color={isPending ? 'white' : 'rgb(74, 74, 173)'} size={18} />
                    <p>Pending</p>
                </span>
                <span className='parcels_p_f_btn' onClick={() => setIsPending(false)} id={isPending ? '' : 'parcels_p_f_btn'}>
                    <MdOutlineDoneOutline color={isPending ? 'rgb(74, 74, 173)' : 'white'} size={18} />
                    <p>Finished</p>
                </span>
                <button className='parcels_p_f_send_parcel'
                    onClick={() => navigate('/parcels/send')}
                >Send Parcel</button>
            </div>
            <div className='parcels_p_g'>
                <div className='parcels_p_g_i'>
                    <p className='p_p_g_i_p'>At {app_name()}, our vision is to make businesses safer. Please tap the button bellow to understand how we protect your parcel.</p>
                    <button className='p_p_g_i_btn'>Learn More</button>
                </div>
                {OrdersData.map((item) => <OrdersItem order={item} />)}
            </div>
        </div>
    )
}

export default ParcelsPage;