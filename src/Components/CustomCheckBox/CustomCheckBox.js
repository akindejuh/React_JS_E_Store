import React from 'react';
import './CustomCheckBox.scss';

const CustomCheckBox = ({ name, handleSwitchTrue, handleSwitchFalse }) => {
    let checkBoxOn = false;

    const handleClick = () => {
        checkBoxOn = !checkBoxOn;
        const switch_b = document.getElementsByClassName(`ccb_m_ccb_${name}`);
        if (checkBoxOn) {
            handleSwitchTrue();
            switch_b[0].setAttribute('id', 'ccb_m_ccb');
        } else {
            handleSwitchFalse();
            switch_b[0].setAttribute('id', '');
        }
    }

    return (
        <div onClick={handleClick} className={`ccb_main`} id=''>
            <div className={`ccb_m_ccb ccb_m_ccb_${name}`} id=''></div>
        </div>
    )
}

export default CustomCheckBox;