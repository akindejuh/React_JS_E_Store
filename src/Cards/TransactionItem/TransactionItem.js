import React from 'react';
import './TransactionItem.scss';

import TransactionTypeIconsData from '../../Data/TransactionTypeIconsData';


const TransactionItem = ({ transaction }) => {
    return (
        <div className='transactionitem_main'>
            <div className='t_item_1'>
                <div className='t_item_icon' style={transaction.money_in ? { backgroundColor: "rgba(0, 160, 0, 0.15)" } : { backgroundColor: "rgba(220, 0, 0, 0.15)" }}><TransactionTypeIconsData transactiontype={transaction.type} /></div>
            </div>
            <div className='t_item_2'>
                <h1 className='t_item_name' style={transaction.money_in ? { color: "rgb(0, 160, 0)" } : { color: "rgb(230, 0, 0)" }}>{transaction.name}</h1>
                <h6 className='t_item_det'>{transaction.details}</h6>
                <h6 className='t_item_det'>NGN <span style={transaction.money_in ? { color: "rgb(0, 160, 0)" } : { color: "rgb(230, 0, 0)" }}>{transaction.price}</span></h6>
                <p className='t_item_time'>{transaction.time}</p>
            </div>
        </div>
    )
}

export default TransactionItem;