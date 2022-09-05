import React from 'react';
import './TransactionsPage.scss';
import TransactionItem from '../../../Cards/TransactionItem/TransactionItem';
import EmptyNot from '../../../Cards/EmptyNot/EmptyNot';
import CustomRadio from '../../../Components/CustomRadio/CustomRadio';
import { TransactionsFilterData, TransactionDayData } from '../../../Data/TransactionsRadioData';
import { useDispatch, useSelector } from 'react-redux';
import { scrollpageon, showfooter } from '../../../Redux/Actions/UtilsActions';
import { MdArrowBackIos } from 'react-icons/md';
import { PieChart } from 'react-minimal-pie-chart';
import { useNavigate } from 'react-router-dom';
import { app_name } from '../../../Configs/AppName';

// temp data
import TransactionsData from '../../../Temp/TransactionsData';

const TransactionsPage = () => {
    const dispatch = useDispatch();
    dispatch(scrollpageon());
    dispatch(showfooter());
    document.title = `${app_name()} | Transactions`;
    const screen_width = useSelector(state => state.ScreenWidth);
    const navigate = useNavigate();

    const FillEmptySpaces = () => {
        if (TransactionsData.length < (screen_width < 644 ? 8 : 16)) {
            const spaceleft = (screen_width < 644 ? 8 : 16) - TransactionsData.length;
            return [...Array(spaceleft)].map((e, i) => <EmptyNot key={i} />)
        }
    }

    return (
        <div className='transactions_main'>
            <div className='trans_main_header'>
                <div className='trans_m_h_arr' onClick={() => navigate(-1)}>
                    <MdArrowBackIos size={30} color={'rgb(74, 74, 173)'} />
                </div>
                {TransactionsFilterData().map((item) => <CustomRadio customradio={item} />)}
            </div>
            <div className='trans_main_wrapper'>
                <div className='trans_m_w_1'>
                    <div className='trans_m_w_pc'>
                        <h2>Transactions</h2>
                        <div className='trans_m_w_pc_i'>
                            <PieChart data={
                                [
                                    { title: 'One', value: 10, color: 'rgb(230, 0, 0)', key: 1 },
                                    { title: 'One', value: 20, color: 'rgb(0, 160, 0)', key: 2 }
                                ]
                            }
                                viewBoxSize={100}
                                lineWidth={22}
                                animate={true}
                                startAngle={0}
                            />
                        </div>
                        <p>NGN <span>80,000</span></p>
                        <p className='trans_m_w_pc_loss'>NGN <span>20,000</span></p>
                    </div>
                    <div className='trans_m_w_1_filter'>
                        {TransactionDayData().map((item) => <CustomRadio customradio={item} />)}
                    </div>
                </div>
                <div className='trans_m_w_2'>
                    {TransactionsData.map((item) => <TransactionItem transaction={item} />)}
                    {FillEmptySpaces()}
                </div>
            </div>
        </div>
    )
}

export default TransactionsPage;