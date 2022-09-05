import React from 'react';
import './OrdersItem.scss';
import { FaUser } from 'react-icons/fa';
import { MdApps, MdAlarm, MdShield, MdOutlineShield, MdLocationPin, MdReport } from 'react-icons/md';
import transportIconsData from '../../Data/TransportIconsData';

const OrdersItem = ({ order }) => {
    return (
        <div className='orderitem_main'>
            <div className='orderitem_del_status'>
                <div style={{ backgroundColor: 'rgb(74, 74, 173)' }} className='oi_del_icon'><MdApps size={19} color='white' /></div>
                <div className='oi_del_tracker'>
                    {
                        [...Array(5)].map((e, i) => (
                            <div className='oi_del_tracker_wrapper'>
                                {(order.deliveryStage - 1) === i ?
                                    <div className='oi_del_t_transport'>
                                        {transportIconsData(order.transport, 20, 'rgb(74, 74, 173)')}
                                    </div> :
                                    <div className='oi_del_t_dot'></div>
                                }
                            </div>
                        ))
                    }
                </div>
                <div className='oi_del_icon'><FaUser size={18} color={'rgb(74, 74, 173)'} /></div>
            </div>
            <div className='orderitem_info'>
                <div className='orderitem_info_1'>
                    <div className='oi_i_1_header'>
                        <h1 className='oi_i_1_h_h1'>{order.orderID}</h1>
                        <span className='oi_i_1_h_span'><MdAlarm color='white' /><p>{order.timeleft}</p></span>
                    </div>
                    <p className='oi_i_1_p'>Parcel <span>See Properties</span></p>
                    <h4 className='oi_i_1_h4'>{order.parcel}</h4>
                    <p className='oi_i_1_p'>Destination</p>
                    <h4 className='oi_i_1_h4'>{order.destination}</h4>
                    <p className='oi_i_1_p'>Delivery Code <span>Learn More</span></p>
                    <h4 className='oi_i_1_h4'>{order.deliveryCode}</h4>
                    <p className='oi_i_1_p'>Status</p>
                    <h4 className='oi_i_1_h4'>{order.status}</h4>
                </div>
                <div className='orderitem_info_2'>
                    <p className='oi_i_2_p'>Courier Company</p>
                    <h4 className='oi_i_2_h4'>{order.courier}</h4>
                    <p className='oi_i_2_p_ins' style={order.insured ? { color: 'green' } : { color: 'rgb(200, 150, 0)' }}>
                        <span>
                            {order.insured ? <MdShield size={15} color='green' /> : <MdOutlineShield size={15} color='rgb(200, 150, 0)' />}
                        </span>
                        {order.insured ? 'THIS PARCEL IS INSURED' : 'STANDARD PROTECTION'}
                    </p>
                    <div className='oi_i_2_map_btn'>
                        <MdLocationPin color='rgb(74, 74, 173)' size={16} />
                        <p>Track on Map</p>
                    </div>
                    {!order.dispute &&
                        <div className='oi_i_2_fd_btn'>
                            <MdReport color='white' size={18} />
                            <p>File Dispute</p>
                        </div>
                    }
                    {order.dispute &&
                        <div className='oi_i_2_dfiled'>
                            <div className='oi_i_2_df_info'>
                                <h4>DISPUTE FILED</h4>
                                <p>Please track the progress of your dispute below.</p>
                                <button className='oi_i_2_df_dp'>Dispute Progress</button>
                                <button className='oi_i_2_df_cd'>Cancel Dispute</button>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default OrdersItem;