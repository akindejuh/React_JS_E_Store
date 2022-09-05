import React from 'react';
import './ReviewItem.scss';
import { FaUser } from 'react-icons/fa';
import ViewRatings from '../ViewRatings/ViewRatings';

const ReviewItem = ({ review }) => {
    return (
        <div className='reviewitem_main'>
            <div className='ri_m_1'>
                <FaUser size={25} color={'rgb(74, 74, 173)'} />
            </div>
            <div className='ri_m_2'>
                <div className='ri_m_2_h'>
                    <h6>{review.name}</h6>
                    <ViewRatings ratings={review.ratings} iconsize={18} />
                </div>
                <p className='ri_m_2_c'>{review.comment}</p>
            </div>
        </div>
    )
}

export default ReviewItem;
