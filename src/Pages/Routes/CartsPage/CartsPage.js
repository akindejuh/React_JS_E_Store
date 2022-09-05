import React, { useState } from 'react';
import './CartsPage.scss';
import CouponsCard from '../../../Cards/CouponsCard/CouponsCard';
import CartItem from '../../../Cards/CartItem/CartItem';
import { MdCheck } from 'react-icons/md';
import CustomCheckBox from '../../../Components/CustomCheckBox/CustomCheckBox';
import { useDispatch } from 'react-redux';
import { scrollpageon, showfooter } from '../../../Redux/Actions/UtilsActions';
import { useNavigate } from 'react-router-dom';
import { app_name } from '../../../Configs/AppName';

// temp data
import CouponsData from '../../../Temp/CouponsData';
import CartsData from '../../../Temp/CartsData';

const CartsPage = () => {
    const dispatch = useDispatch();
    dispatch(scrollpageon());
    dispatch(showfooter());
    document.title = `${app_name()} | Carts`;
    const navigate = useNavigate();

    const GetCartStoreList = () => {
        const [storeList, setStoreList] = useState([]);
        for (let i = 0; i < CartsData.length; i++) {
            if (!storeList.includes(CartsData[i].store)) {
                setStoreList([...storeList, CartsData[i].store])
            } else {
                continue;
            }
        }
        return storeList;
    }

    return (
        <div className='cartspage_main'>
            {CouponsData &&
                <div className='wishlist_coupons'>
                    <h1>Coupons</h1>
                    <div className='wl_coupons'>
                        {CouponsData.map((item) => <CouponsCard coupon={item} />)}
                    </div>
                </div>
            }
            <div className='cartspage_checkout_all'>
                <h1 className='cpca_h'>Checkout</h1>
                <div className='cpca_w'>
                    <div className='cca_cb'>
                        <CustomCheckBox name={'checkout_All'} handleSwitchFalse={() => console.log('off')} handleSwitchTrue={() => console.log('on')} />
                        <p>All</p>
                    </div>
                    <div className='cca_info'>
                        <h5>Cost: NGN <span>25,000</span></h5>
                        <p>Shipping: NGN <span>4,800</span></p>
                    </div>
                    <button className='cca_btn' onClick={() => navigate('/checkout')}>
                        <MdCheck color='white' size={22} />
                        <p>Checkout</p>
                    </button>
                </div>
            </div>
            <div className='cartspage_products_wrapper'>
                <h1>Carts</h1>
                {GetCartStoreList().map((store) =>
                    <div className='cartspage_products_group'>
                        <div className='cpg_h'>
                            <CustomCheckBox name={`checkout_store_${store}`} handleSwitchFalse={() => console.log('off')} handleSwitchTrue={() => console.log('on')} />
                            <h3>{store}</h3>
                        </div>
                        <div className='cartspage_products'>
                            {CartsData.map((item) => item.store === store && <CartItem key={item.id} cart={item} />)}
                        </div>
                    </div>
                )}
            </div>
        </div >
    )
}

export default CartsPage;