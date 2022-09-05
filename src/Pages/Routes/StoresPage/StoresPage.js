import React from 'react';
import './StoresPage.scss';
import { FaHeart, FaClock, FaFire } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { MdArrowBackIos } from 'react-icons/md';
import ProductsCard from '../../../Cards/ProductsCard/ProductsCard';
import StoresCard from '../../../Cards/StoresCard/StoresCard';
import { useDispatch, useSelector } from 'react-redux';
import { scrollpageon, showfooter } from '../../../Redux/Actions/UtilsActions';
import StoreCategoriesCard from '../../../Cards/StoreCategoriesCard/StoreCategoriesCard';
import { StoreCategoriesImagesData } from '../../../Data/StoreCategoriesImagesData';
import { app_name } from '../../../Configs/AppName';

//temp data
import productsData from '../../../Temp/ProductsData';
import TopStoresData from '../../../Temp/TopStoresData';
import LimitedDeals from '../../../Temp/LimitedDeals';
import BestSelling from '../../../Temp/BestSelling';

const StoresPage = () => {
    const dispatch = useDispatch();
    dispatch(scrollpageon());
    dispatch(showfooter());
    const navigate = useNavigate();
    document.title = `${app_name()} | Stores`;
    const screen_width = useSelector(state => state.ScreenWidth);

    return (
        <div className='storespage_main'>
            <div className='storespage_topstores_wrapper'>
                <div className='sp_ts_header'>
                    <FaHeart size={screen_width < 644 ? 20 : 32} color={'rgb(74, 74, 173)'} />
                    <h1>Top Stores</h1>
                </div>
                <div className='sp_ts_container'>
                    {TopStoresData.map((item) => <StoresCard store={item} />)}
                </div>
            </div>
            <div className='storespage_categories_wrapper'>
                <h1>Categories</h1>
                <div className='sp_c_container'>
                    {StoreCategoriesImagesData.map((item, i) =>
                        <StoreCategoriesCard key={i} storecategory={item} />
                    )}
                </div>
            </div>
            <div className='storespage_topstores_wrapper'>
                <div className='sp_ts_header'>
                    <FaClock size={screen_width < 644 ? 20 : 32} color={'rgb(74, 74, 173)'} />
                    <h1>Limited Deals</h1>
                    <div className='sp_ts_h_side' onClick={() => navigate('/stores/limiteddeals')}>
                        <p>24 : 00 : 00</p>
                        <span className='ts_h_arrow'><div><MdArrowBackIos color={'rgb(74, 74, 173)'} size={screen_width < 644 ? 18 : 25} /></div></span>
                    </div>
                </div>
                <div className='sp_ts_container'>
                    {LimitedDeals.map((item) => <ProductsCard product={item} />)}
                </div>
            </div>
            <div className='storespage_topstores_wrapper'>
                <div className='sp_ts_header'>
                    <FaFire size={screen_width < 644 ? 20 : 32} color={'rgb(74, 74, 173)'} />
                    <h1>Best Selling</h1>
                    <div className='sp_ts_h_side' onClick={() => navigate('/stores/bestselling')}>
                        <p>See All</p>
                        <span className='ts_h_arrow'><div><MdArrowBackIos color={'rgb(74, 74, 173)'} size={screen_width < 644 ? 18 : 25} /></div></span>
                    </div>
                </div>
                <div className='sp_ts_container'>
                    {BestSelling.map((item) => <ProductsCard product={item} />)}
                </div>
            </div>
            <div className='storespage_products_wrapper'>
                <div className='sp_p_header'>
                    <FaHeart size={screen_width < 644 ? 20 : 32} color={'rgb(74, 74, 173)'} />
                    <h1>Explore Products</h1>
                </div>
                <div className='sp_p_container'>
                    {productsData.map((item) => <ProductsCard product={item} />)}
                </div>
            </div>
        </div>
    )
}

export default StoresPage;