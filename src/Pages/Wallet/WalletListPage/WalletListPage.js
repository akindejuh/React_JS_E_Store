import React, { useState } from 'react';
import './WalletListPage.scss';
import { useDispatch } from 'react-redux';
import { scrollpageon } from '../../../Redux/Actions/UtilsActions';
import { useNavigate } from 'react-router-dom';
import LoadingCustomButton from '../../../Components/LoadingCustomButton/LoadingCustomButton';
import { MdArrowBackIos } from 'react-icons/md';
import axios from 'axios';
import { app_name } from '../../../Configs/AppName';

const WalletListPage = ({ title }) => {
    const dispatch = useDispatch();
    dispatch(scrollpageon());
    const navigate = useNavigate();
    document.title = `${app_name()} | Wallet | ${title}`;
    const [isDataLoading, setIsDataLoading] = useState(true);

    const handleFWDataDesc = () => {
        switch (title) {
            case "Data":
                return "data_bundle";
            case "Cable":
                return "cables";
            case "Electricity":
                return "power";
            case "Internet":
                return "internet";
            default:
                break;
        }
    }

    const FillEmptySpaces = () => {
        return [...Array(16)].map((e, i) => <LoadingCustomButton key={i} />)
    }

    const handleFetchData = () => {
        axios.get(`${process.env.REACT_APP_FLUTTERWAVE_BILLS_URL}${handleFWDataDesc()}=1`, {
            headers: {
                "Authorization": `${process.env.REACT_APP_FLUTTERWAVE_API_KEY}`,
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }).catch((error) => {
            console.log('f_error');
            console.log(error);
            setIsDataLoading(true);
        }).then((response) => {
            console.log(response);
            if (response) {
                console.log('f_done');
                setIsDataLoading(false);
            }
        })

        // const xhr = new XMLHttpRequest();
        // xhr.open('GET', 'https://api.flutterwave.com/v3/bill-categories?data_bundle=1');
        // xhr.setRequestHeader('Accept', 'application/json');
        // xhr.setRequestHeader("Content-Type", "application/json");
        // xhr.setRequestHeader("authorization", "Bearer FLWSECK-5616b3f9b6051b7eacb48748dc311aed-X");
        // xhr.onreadystatechange = () => console.log(xhr)
        // xhr.send();
    }

    return (
        <div className='walletlistpage_main'>
            <button onClick={() => handleFetchData()} disabled>FLUTTERWAVE_API_TEST_REQUEST</button>
            <div className='wlp_h'>
                <MdArrowBackIos
                    color='rgb(74, 74, 173)'
                    onClick={() => navigate(-1)} size={25}
                    className='wlp_h_a'
                />
                <h1>{title}</h1>
            </div>
            <p className='wlp_info'>{isDataLoading ? "Data Loading" : "Please select a Product"}</p>
            <div className='wlp_grid'>
                {isDataLoading && FillEmptySpaces()}
            </div>
        </div>
    )
}

export default WalletListPage;