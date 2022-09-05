import React from 'react';
import './AirtimePage.scss';
import { MdArrowBackIos } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { scrollpageon } from '../../../Redux/Actions/UtilsActions';
import { useNavigate } from 'react-router-dom';
import { AirtimeData } from '../../../Data/AirtimeandData';
import CustomButton from '../../../Components/CustomButton/CustomButton';
import { app_name } from '../../../Configs/AppName';

const AirtimePage = () => {
    const dispatch = useDispatch();
    dispatch(scrollpageon());
    const navigate = useNavigate();
    document.title = `${app_name()} | Wallet | Airtime`;

    const handleAirtimeandData = (id) => {
        switch (id) {
            case 1:
                navigate('/wallet/subscription/airtime/MTN');
                break;
            case 2:
                navigate('/wallet/subscription/airtime/GLO');
                break;
            case 3:
                navigate('/wallet/subscription/airtime/9Mobile');
                break;
            case 4:
                navigate('/wallet/subscription/airtime/Airtel');
                break;
            default:
                break;
        }
    }

    return (
        <div className='airtime_page_main'>
            <div className='a_t_p_wrapper'>
                <div className='a_t_p_h'>
                    <MdArrowBackIos
                        color='rgb(74, 74, 173)'
                        onClick={() => navigate(-1)} size={25}
                        className='a_t_p_h_a'
                    />
                    <h1>Airtime</h1>
                </div>
                <div className='a_t_p_b'>
                    <p className='a_t_p_info'>Please select a service</p>
                    <div className='a_t_p_b_cb'>
                        {AirtimeData.map((item) =>
                            <CustomButton
                                key={item.id}
                                custombutton={item}
                                handleClick={() => handleAirtimeandData(item.id)}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AirtimePage;
