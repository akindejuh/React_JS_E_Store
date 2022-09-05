import React from 'react';
import './BillsPage.scss';
import { MdArrowBackIos } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { scrollpageon } from '../../../Redux/Actions/UtilsActions';
import { useNavigate } from 'react-router-dom';
import { BillsData } from '../../../Data/BillsData'
import CustomButton from '../../../Components/CustomButton/CustomButton';
import { app_name } from '../../../Configs/AppName';

const BillsPage = () => {
    const dispatch = useDispatch();
    dispatch(scrollpageon());
    const navigate = useNavigate();
    document.title = `${app_name()} | Wallet | Bills`;

    const handleBills = (id) => {
        switch (id) {
            case 1:
                navigate('/wallet/bills/electricity');
                break;
            case 2:
                navigate('/wallet/bills/cable');
                break;
            case 3:
                navigate('/wallet/bills/internet');
                break;
            default:
                break;
        }
    }

    return (
        <div className='bills_page_main'>
            <div className='b_s_p_wrapper'>
                <div className='b_s_p_h'>
                    <MdArrowBackIos
                        color='rgb(74, 74, 173)'
                        onClick={() => navigate(-1)} size={25}
                        className='b_s_p_h_a'
                    />
                    <h1>Bills</h1>
                </div>
                <div className='b_s_p_b'>
                    <p className='b_s_p_info'>Please select a service</p>
                    <div className='b_s_p_b_cb'>
                        {BillsData.map((item) =>
                            <CustomButton
                                key={item.id}
                                custombutton={item}
                                handleClick={() => handleBills(item.id)}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BillsPage;
