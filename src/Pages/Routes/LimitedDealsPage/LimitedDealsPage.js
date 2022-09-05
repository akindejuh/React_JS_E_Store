import React from 'react';
import './LimitedDealsPage.scss';
import { FaClock } from 'react-icons/fa';
import { MdArrowBackIos } from 'react-icons/md';
import ProductsCard from '../../../Cards/ProductsCard/ProductsCard';
import { useDispatch, useSelector } from 'react-redux';
import { scrollpageon } from '../../../Redux/Actions/UtilsActions';
import { useNavigate } from 'react-router-dom';
import { app_name } from '../../../Configs/AppName';

//temp data
import productsData from '../../../Temp/ProductsData';

const LimitedDealsPage = () => {
    const dispatch = useDispatch();
    dispatch(scrollpageon());
    const navigate = useNavigate();
    document.title = `${app_name()} | Limited Deals`;
    const screen_width = useSelector(state => state.ScreenWidth);

    return (
        <div className='limiteddealspage_main'>
            <div className='ld_wrapper'>
                <div className='ld_header'>
                    <div onClick={() => navigate(-1)} className='ld_h_back'>
                        <MdArrowBackIos size={screen_width < 644 ? 20 : 30} color={'rgb(74, 74, 173)'} />
                    </div>
                    <FaClock size={screen_width < 644 ? 20 : 32} color={'rgb(74, 74, 173)'} />
                    <h1>Limited Deals</h1>
                </div>
                <div className='ld_container'>
                    {productsData.map((item) => <ProductsCard product={item} />)}
                </div>
            </div>
        </div>
    )
}

export default LimitedDealsPage;