import React from 'react';
import './WalletPage.scss';
import CustomButton from '../../../Components/CustomButton/CustomButton';
import TransactionsList from '../../../Components/TransactionsList/TransactionsList';
import WalletButtonsData from '../../../Data/WalletButtonsData';
import { useDispatch } from 'react-redux';
import { scrollpageon, showfooter } from '../../../Redux/Actions/UtilsActions';
import { useNavigate } from 'react-router-dom';
import { app_name } from '../../../Configs/AppName';

// temp data
import TransactionsData from '../../../Temp/TransactionsData';

const WalletPage = () => {
    const dispatch = useDispatch();
    dispatch(scrollpageon());
    dispatch(showfooter());
    const navigate = useNavigate();
    document.title = `${app_name()} | Wallet`;
    // recent items
    const RecentItems = (items) => {
        return items.filter((item) => item.id < 8)
    }

    const handleButtonClicks = (id) => {
        switch (id) {
            case 1:
                navigate('/wallet/fund');
                break;
            case 2:
                navigate('/wallet/send');
                break;
            case 3:
                navigate('/orders');
                break;
            case 4:
                navigate('/parcels');
                break;
            case 5:
                navigate('/wallet/subscription');
                break;
            case 6:
                // navigate('/wallet/bills');
                break;
            default:
                break;
        }
    }

    return (
        <div className='walletpage_main'>
            <div className='wp_m_container'>
                <div className='walletpage_info_buttons'>
                    <div className='wp_i_card'>
                        <div>
                            <p>NGN</p>
                            <h2>1,205,480</h2>
                        </div>
                        <p className='  wp_i_i_balance'>Total Balance</p>
                    </div>
                    <div className='wp_buttons'>
                        {WalletButtonsData.map((item) =>
                            <CustomButton
                                key={item.id}
                                custombutton={item}
                                handleClick={() => handleButtonClicks(item.id)}
                            />
                        )}
                    </div>
                </div>
                <div className='walletpage_trans'>
                    <div className='wp_t_header'>
                        <h1>Recent Transactions</h1>
                        <div onClick={() => navigate('/transactions')} className='wp_t_h_button'>See All</div>
                    </div>
                    <div className='wp_t_list'>
                        {RecentItems(TransactionsData).map((item) => <TransactionsList transaction={item} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WalletPage;
