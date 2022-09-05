import React from 'react';
import './ViewRatings.scss';
import { MdStar, MdOutlineStarBorder, MdStarHalf } from 'react-icons/md';

const ViewRatings = ({ ratings, iconsize }) => {
    let stars = [];
    const color = 'rgb(209, 166, 24)';
    const ratingsInt = parseInt(ratings);
    const ratingsDiff = (Math.abs(ratings - ratingsInt)).toFixed(1);

    const handleViewRatings = () => {
        if (ratings > 5) {
            // Should respond with a bug instead
            return [...Array(5)].map((e, i) =>
                <div className='vr_stars' key={i}>
                    <MdStar color={color} size={iconsize} />
                </div>);
        } else {
            if (ratingsInt >= 1) {
                stars = [...Array(ratingsInt)].map((e, i) =>
                    <div className='vr_stars'>
                        <MdStar color={color} size={iconsize} />
                    </div>);
            }
            if (ratingsDiff >= 0.5) {
                stars = [...stars,
                <div className='vr_stars'>
                    <MdStarHalf color={color} size={iconsize} />
                </div>
                ]
            }
            if (stars.length < 5) {
                const spaceleft = 5 - stars.length;
                stars = [...stars, [...Array(spaceleft)].map((e, i) =>
                    <div className='vr_stars'>
                        <MdOutlineStarBorder color={color} size={iconsize} />
                    </div >)
                ]
            }
            return stars;
        }
    }

    return (
        <div className='viewratings_main'>
            {handleViewRatings()}
        </div>
    )
}

export default ViewRatings;