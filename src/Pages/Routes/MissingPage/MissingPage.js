import React from 'react';
import './MissingPage.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { scrollpageon } from '../../../Redux/Actions/UtilsActions';
import { app_name } from '../../../Configs/AppName';

const MissingPage = () => {
    const dispatch = useDispatch();
    dispatch(scrollpageon());
    const navigate = useNavigate();
    document.title = `${app_name()} | Missing`;

    return (
        <div className='missingpage_main'>
            <div className='mp_m_w'>
                <h1>ERR 404</h1>
                <h3>Page Not Found</h3>
                <h5>Reasons why:</h5>
                <ul>
                    <li>Incorrect URL</li>
                </ul>
                <p>Press the button below to redirect to the homepage.</p>
                <button onClick={() => navigate('/')}>Home Page</button>
            </div>
        </div>
    )
}

export default MissingPage;
