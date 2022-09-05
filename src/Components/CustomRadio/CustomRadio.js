import React, { useEffect } from 'react';
import './CustomRadio.scss';

const CustomRadio = ({ customradio }) => {

    const handleRadioStyles = () => {
        const allRadios = document.getElementsByClassName(customradio.group);
        const allWrappers = document.getElementsByClassName(`customradio_main_${customradio.group}`);
        const allTexts = document.getElementsByClassName(`radio_name_${customradio.group}`);
        const allIcons = document.getElementsByClassName(`custom_radio_icon_${customradio.group}`);

        for (let i = 0; i < allIcons.length; i++) {
            allIcons[i]?.setAttribute('id', '');
        }

        for (let i = 0; i < allRadios.length; i++) {
            if (allRadios[i].checked === true) {
                allWrappers[i].setAttribute('id', 'customradio_main');
                allTexts[i].setAttribute('id', 'customradio_main');
                allIcons[i]?.setAttribute('id', 'custom_radio_icon');
            } else {
                allWrappers[i].setAttribute('id', '');
                allTexts[i].setAttribute('id', '');
            }
        }
    }

    useEffect(() => {
        const allRadios = document.getElementsByClassName(customradio.group);
        const allWrappers = document.getElementsByClassName(`customradio_main_${customradio.group}`);
        const allTexts = document.getElementsByClassName(`radio_name_${customradio.group}`);
        const allIcons = document.getElementsByClassName(`custom_radio_icon_${customradio.group}`);

        for (let i = 0; i < allIcons.length; i++) {
            allIcons[i]?.setAttribute('id', '');
        }

        for (let i = 0; i < allRadios.length; i++) {
            if (allRadios[i].checked === true) {
                allWrappers[i].setAttribute('id', 'customradio_main');
                allTexts[i].setAttribute('id', 'customradio_main');
                allIcons[i]?.setAttribute('id', 'custom_radio_icon');
            } else {
                allWrappers[i].setAttribute('id', '');
                allTexts[i].setAttribute('id', '');
            }
        }
    }, [customradio])

    const handleRadio = () => {
        const clickedRadio = document.getElementById(customradio.name);
        const allRadios = document.getElementsByClassName(customradio.group);

        allRadios.checked = false;
        clickedRadio.checked = true;

        handleRadioStyles();
        customradio.handlefunction();
    }

    return (
        <div onClick={handleRadio} className={`customradio_main customradio_main_${customradio.group}`} id=''>
            <span className='radio_icon'>
                {customradio.icon}
            </span>
            {customradio.id === 1 ?
                <input
                    type={'radio'}
                    name={customradio.group}
                    id={customradio.name}
                    className={customradio.group}
                    checked={true}
                /> :
                <input
                    type={'radio'}
                    name={customradio.group}
                    id={customradio.name}
                    className={customradio.group}
                />
            }
            <span className={`radio_name radio_name_${customradio.group}`} id=''>{customradio.name}</span>
        </div>
    )
}

export default CustomRadio;