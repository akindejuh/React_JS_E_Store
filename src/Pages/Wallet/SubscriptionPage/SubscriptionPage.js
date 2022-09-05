import React from 'react';
import './SubscriptionPage.scss';
import { MdArrowBackIos } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { scrollpageon } from '../../../Redux/Actions/UtilsActions';
import { useNavigate } from 'react-router-dom';
import { AirtimeandData } from '../../../Data/AirtimeandData';
import CustomButton from '../../../Components/CustomButton/CustomButton';
import { app_name } from '../../../Configs/AppName';

const SubscriptionPage = () => {
    const dispatch = useDispatch();
    dispatch(scrollpageon());
    const navigate = useNavigate();
    document.title = `${app_name()} | Wallet | Subscription`;

    const handleSubscription = (id) => {
        switch (id) {
            case 1:
                navigate('/wallet/subscription/airtime');
                break;
            case 2:
                // navigate('/wallet/subscription/data');
                break;
            default:
                break;
        }
    }

    return (
        <div className='sub_page_main'>
            <div className='s_p_wrapper'>
                <div className='s_p_h'>
                    <MdArrowBackIos color='rgb(74, 74, 173)' onClick={() => navigate(-1)} size={25} className='s_p_h_a' />
                    <h1>Subscription</h1>
                </div>
                <div className='s_p_b'>
                    <p className='s_p_info'>Please select a service</p>
                    <div className='s_p_b_cb'>
                        {AirtimeandData.map((item) =>
                            <CustomButton
                                key={item.id}
                                custombutton={item}
                                handleClick={() => handleSubscription(item.id)}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubscriptionPage;
