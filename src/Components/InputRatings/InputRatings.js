import React, { useState } from 'react';
import './InputRatings.scss';
import { MdOutlineStarBorder, MdStar } from 'react-icons/md';

const InputRatings = ({ iconsize, handlefunction }) => {
    const [myRating, setMyRating] = useState(0);
    let ratings = 0;
    const color = 'rgb(209, 166, 24)';

    return (
        <div className='inputratings_main'>
            <div className='vr_stars'
                onClick={
                    () => {
                        setMyRating(1);
                        ratings = 1;
                        handlefunction(ratings);
                    }}
            >{myRating >= 1 ?
                <MdStar color={color} size={iconsize} /> :
                <MdOutlineStarBorder color={color} size={iconsize} />}
            </div>
            <div className='vr_stars'
                onClick={
                    () => {
                        setMyRating(2);
                        ratings = 2;
                        handlefunction(ratings);
                    }}
            >{myRating >= 2 ?
                <MdStar color={color} size={iconsize} /> :
                <MdOutlineStarBorder color={color} size={iconsize} />}
            </div>
            <div className='vr_stars'
                onClick={
                    () => {
                        setMyRating(3);
                        ratings = 3;
                        handlefunction(ratings);
                    }}
            >{myRating >= 3 ?
                <MdStar color={color} size={iconsize} /> :
                <MdOutlineStarBorder color={color} size={iconsize} />}
            </div>
            <div className='vr_stars'
                onClick={
                    () => {
                        setMyRating(4);
                        ratings = 4;
                        handlefunction(ratings);
                    }}
            >{myRating >= 4 ?
                <MdStar color={color} size={iconsize} /> :
                <MdOutlineStarBorder color={color} size={iconsize} />}
            </div>
            <div className='vr_stars'
                onClick={
                    () => {
                        setMyRating(5);
                        ratings = 5;
                        handlefunction(ratings);
                    }}
            >{myRating === 5 ?
                <MdStar color={color} size={iconsize} /> :
                <MdOutlineStarBorder color={color} size={iconsize} />}
            </div>
        </div>
    )
}

export default InputRatings;