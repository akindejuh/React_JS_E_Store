import React, { useState } from 'react';
import './CartItem.scss';
import CustomCheckBox from '../../Components/CustomCheckBox/CustomCheckBox';

import pp from '../../Images/Temp/profilepic.jpg'

const CartItem = ({ cart }) => {
    const [productCount, setProductCount] = useState(1);
    const handleProductCountInput = (e) => {
        if (e.target.value < 1) {
            setProductCount(1);
        } else if (e.target.value > 9999) {
            setProductCount(9999);
        } else {
            setProductCount(e.target.value);
        }
    }

    return (
        <div className='cartitem_main'>
            <div className='cart_item_1'>
                <div className='cart_i_dp'>
                    <img src={pp} alt='cart' />
                </div>
                <CustomCheckBox
                    name={`checkout_store_${cart.id}`}
                    handleSwitchFalse={() => console.log('off')}
                    handleSwitchTrue={() => console.log('on')}
                />
            </div>
            <div className='cart_item_2'>
                <h1 className='cart_i_name'>{cart.name}</h1>
                <h6 className='cart_i_price'>NGN <span>{cart.price}</span></h6>
                <p className='cart_i_shp'>{(cart.shipping).startsWith('F') ? "Free Shipping" : `NGN ${cart.shipping}`}</p>
                <div className='cart_i_pc'>
                    <button
                        onClick={productCount <= 1 ? () => setProductCount(1) : () => setProductCount(parseInt(productCount) - 1)}
                    >-</button>
                    <input
                        type={'number'}
                        value={productCount}
                        placeholder={'1'}
                        onChange={handleProductCountInput}
                    />
                    <button
                        onClick={productCount < 1 || productCount >= 9999 ? () => setProductCount(9999) : () => setProductCount(parseInt(productCount) + 1)}
                    >+</button>
                </div>
            </div>
        </div>
    )
}

export default CartItem;