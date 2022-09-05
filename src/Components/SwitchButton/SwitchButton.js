import React from 'react';
import './SwitchButton.scss';

const SwitchButton = ({ name, handleSwitchTrue, handleSwitchFalse }) => {
    let switchOn = false;

    const handleClick = () => {
        switchOn = !switchOn;

        const switch_m = document.getElementsByClassName(`sb_main_${name}`);
        const switch_b = document.getElementsByClassName(`sb_switch_${name}`);

        if (switchOn) {
            handleSwitchTrue();
            switch_m[0].setAttribute('id', 'sb_main');
            switch_b[0].setAttribute('id', 'sb_switch');
        } else {
            handleSwitchFalse();
            switch_m[0].setAttribute('id', '');
            switch_b[0].setAttribute('id', '');
        }
    }

    return (
        <div onClick={handleClick} className={`sb_main sb_main_${name}`} id=''>
            <div className={`sb_switch sb_switch_${name}`} id=''></div>
        </div>
    )
}

export default SwitchButton;