import React from 'react';
import './BestSellingPage.scss';
import { FaFire } from 'react-icons/fa';
import { MdArrowBackIos } from 'react-icons/md';
import ProductsCard from '../../../Cards/ProductsCard/ProductsCard';
import { useDispatch, useSelector } from 'react-redux';
import { scrollpageon } from '../../../Redux/Actions/UtilsActions';
import { useNavigate } from 'react-router-dom';
import { app_name } from '../../../Configs/AppName';

//temp data
import productsData from '../../../Temp/ProductsData';

const BestSellingPage = () => {
    const dispatch = useDispatch();
    dispatch(scrollpageon());
    const navigate = useNavigate();
    document.title = `${app_name()} | Best Selling Products`;
    const screen_width = useSelector(state => state.ScreenWidth);

    return (
        <div className='bestsellingpage_main'>
            <div className='bs_wrapper'>
                <div className='bs_header'>
                    <div onClick={() => navigate(-1)} className='bs_back'>
                        <MdArrowBackIos size={screen_width < 644 ? 20 : 30} color={'rgb(74, 74, 173)'} />
                    </div>
                    <FaFire size={screen_width < 644 ? 20 : 32} color={'rgb(74, 74, 173)'} />
                    <h1>Best Selling</h1>
                </div>
                <div className='bs_container'>
                    {productsData.map((item) => <ProductsCard product={item} />)}
                </div>
            </div>
        </div>
    )
}

export default BestSellingPage;