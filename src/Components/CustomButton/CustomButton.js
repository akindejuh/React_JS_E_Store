import React from 'react';
import './CustomButton.scss';

const CustomButton = ({ custombutton, handleClick }) => {
    return (
        <div onClick={handleClick} className='custombutton_main' style={{ backgroundColor: custombutton.b_color }}>
            <div className='custombutton_icon'>{custombutton.icon}</div>
            <h2 className='custombutton_title'>{custombutton.title}</h2>
            <p className='custombutton_desc'>{custombutton.desc}</p>
        </div>
    )
}

export default CustomButton;