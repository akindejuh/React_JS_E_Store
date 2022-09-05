import React from 'react';
import './EmptyCard.scss';

const EmptyCard = () => {
    return (
        <div className='emptycard_main'>
            <div className='emptycard_image'></div>
            <div className="emptycard_info">
                <p className='emptycard_name'>Loading data, please wait...</p>
                <p className='emptycard_name'>Loading data, please wait...</p>
                <p className='emptycard_name'>Loading data, please wait...</p>
                <p className='emptycard_name'>Loading data, please wait...</p>
                <p className='emptycard_name'>Loading data, please wait...</p>
            </div>
        </div>
    )
}

export default EmptyCard;
