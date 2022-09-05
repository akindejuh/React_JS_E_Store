import React from 'react';
import './TransactionsList.scss';

// data
import TransactionTypeIconsData from '../../Data/TransactionTypeIconsData';

const TransactionsList = ({ transaction }) => {
    return (
        <div className='trans_main'>
            <span className='trans_icon' style={transaction.money_in ? { backgroundColor: "rgba(0, 255, 0, 0.2)" } : { backgroundColor: "rgba(255, 0, 0, 0.2)" }}>
                <TransactionTypeIconsData transactiontype={transaction.type} />
            </span>
            <span className='trans_info'>
                <div className='trans_name'>{(transaction.name).length <= 24 ? transaction.name : `${(transaction.name).slice(0, 24)}...`}</div>
                <div className='trans_p_d_d'>
                    <span className='trans_price'>
                        <p>NGN</p>
                        <h3>{transaction.price}</h3>
                    </span>
                    <span className='trans_dot'></span>
                    <span className='trans_det'>{(transaction.details).length <= 20 ? transaction.details : `${(transaction.details).slice(0, 20)}...`}</span>
                </div>
            </span>
            <span className='trans_time'>
                {transaction.time}
            </span>
        </div>
    )
}

export default TransactionsList;
