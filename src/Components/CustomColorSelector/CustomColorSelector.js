import React, { useEffect } from 'react';
import './CustomColorSelector.scss';
import { FaCheck } from 'react-icons/fa';

const CustomColorSelector = ({ customcolor, colorgroup, index }) => {
    const handleRadioStyles = () => {
        const allRadios = document.getElementsByClassName(colorgroup);
        const allWrappers = document.getElementsByClassName(`c_c_selector_main_${colorgroup}`);
        const allFades = document.getElementsByClassName(`radio_name_${colorgroup}`);
        const allTicks = document.getElementsByClassName(`radio_name_check${colorgroup}`);

        for (let i = 0; i < allRadios.length; i++) {
            if (allRadios[i].checked === true) {
                allWrappers[i].setAttribute('id', 'c_c_selector_main');
                allFades[i].setAttribute('id', 'radio_name');
                allTicks[i].setAttribute('id', 'radio_name_check');
            } else {
                allWrappers[i].setAttribute('id', '');
                allFades[i].setAttribute('id', '');
                allTicks[i].setAttribute('id', '');
            }
        }
    }

    const handleRadio = () => {
        const clickedRadio = document.getElementById(customcolor);
        const allRadios = document.getElementsByClassName(colorgroup);
        allRadios.checked = false;
        clickedRadio.checked = true;
        handleRadioStyles();
    }

    useEffect(() => {
        const allRadios = document.getElementsByClassName(colorgroup);
        const allWrappers = document.getElementsByClassName(`c_c_selector_main_${colorgroup}`);
        const allFades = document.getElementsByClassName(`radio_name_${colorgroup}`);
        const allTicks = document.getElementsByClassName(`radio_name_check${colorgroup}`);

        for (let i = 0; i < allRadios.length; i++) {
            if (allRadios[i].checked === true) {
                allWrappers[i].setAttribute('id', 'c_c_selector_main');
                allFades[i].setAttribute('id', 'radio_name');
                allTicks[i].setAttribute('id', 'radio_name_check');
            } else {
                allWrappers[i].setAttribute('id', '');
                allFades[i].setAttribute('id', '');
                allTicks[i].setAttribute('id', '');
            }
        }
    }, [customcolor, colorgroup])

    return (
        <div
            onClick={handleRadio}
            className={`c_c_selector_main c_c_selector_main_${colorgroup}`}
            id=''
            style={{
                backgroundColor: customcolor
            }}
        >
            {index === 0 ?
                <input type={'radio'}
                    name={colorgroup}
                    id={customcolor}
                    className={colorgroup}
                    checked={true}
                /> :
                <input
                    type={'radio'}
                    name={colorgroup}
                    id={customcolor}
                    className={colorgroup}
                />
            }
            <span className={`radio_name radio_name_${colorgroup}`} id=''>
                <span className={`radio_name_check radio_name_check${colorgroup}`} id=''>
                    <FaCheck color='white' size={20} />
                </span>
            </span>
        </div>
    )
}

export default CustomColorSelector;