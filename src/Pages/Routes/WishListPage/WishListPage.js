import React from 'react';
import './WishListPage.scss';
import { useDispatch } from 'react-redux';
import { scrollpageon, showfooter } from '../../../Redux/Actions/UtilsActions';
import CouponsCard from '../../../Cards/CouponsCard/CouponsCard';
import ProductsCard from '../../../Cards/ProductsCard/ProductsCard';
import { app_name } from '../../../Configs/AppName';

// temp data
import WishListData from '../../../Temp/WishListData';
import CouponsData from '../../../Temp/CouponsData';

const WishListPage = () => {
    const dispatch = useDispatch();
    dispatch(scrollpageon());
    dispatch(showfooter());
    document.title = `${app_name()} | WishList`;

    return (
        <div className='wishlist_main'>
            {CouponsData && <div className='wishlist_coupons'>
                <h1>Coupons</h1>
                <div className='wl_coupons'>
                    {CouponsData.map((item) => <CouponsCard coupon={item} />)}
                </div>
            </div>}
            <div className='wishlist_products_wrapper'>
                <div className='wl_p_header'>
                    <h1>This Week</h1>
                    <h2>7</h2>
                    <button>Delete</button>
                </div>
                <div className='wl_p_container'>
                    {WishListData.map((item) => <ProductsCard product={item} />)}
                </div>
            </div>
            <div className='wishlist_products_wrapper'>
                <div className='wl_p_header'>
                    <h1>Older</h1>
                    <h2>12</h2>
                    <button>Delete</button>
                </div>
                <div className='wl_p_container'>
                    {WishListData.map((item) => <ProductsCard product={item} />)}
                </div>
            </div>
        </div>
    )
}

export default WishListPage;