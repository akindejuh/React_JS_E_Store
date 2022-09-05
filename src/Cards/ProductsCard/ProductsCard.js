import React from 'react';
import './ProductsCard.scss';
import { useNavigate } from 'react-router-dom';
import { MdStar, MdShield, MdAddShoppingCart } from 'react-icons/md';
import { FaHeart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import ViewRatings from '../../Components/ViewRatings/ViewRatings';

// temp
import productdp from '../../Images/Home/image3.jpg';

const ProductsCard = ({ product }) => {
    const screen_width = useSelector(state => state.ScreenWidth);
    const navigate = useNavigate();
    const handleWishList = () => {
        console.log(product.id);
    }
    if (screen_width > 644) {
        return (
            <div className='productscard_main'>
                <div className='productscard_image'>
                    <div className='productscard_cart'>
                        <MdAddShoppingCart size={27} color={'white'} />
                    </div>
                    <div className='productscard_wl' onClick={() => handleWishList()}>
                        <FaHeart size={27} color={product.wishlist ? 'rgb(220, 0, 0)' : 'rgb(230, 230, 230)'} />
                    </div>
                    <img src={productdp} alt={'product'} />
                    <div className='productscard_fade' onClick={() => navigate(`/products/${product.id}`)}></div>
                </div>
                <div className="productscard_info">
                    <p className='productcard_name'>{(product.name).length <= 29 ? product.name : `${(product.name).slice(0, 29)}...`}</p>
                    <div className='productscard_w_ss'>
                        {product.warranty && <span>
                            <MdShield size={18} color={'rgb(74, 74, 173)'} />
                            <p>WARRANTY</p>
                        </span>}
                        {product.specialsale && <span>
                            <MdStar size={20} color={'rgb(74, 74, 173)'} />
                            <p>SPECIAL SALE</p>
                        </span>}
                    </div>
                    <div className='productcard_price'>
                        <p>NGN</p>
                        <h5>{product.price}</h5>
                        <h5 style={{ textDecoration: 'line-through', color: 'grey', marginLeft: '10px' }}>{'1,400'}</h5>
                        <h5 style={{ marginLeft: '10px', color: 'red' }}>{'62% off'}</h5>
                    </div>
                    <div className='productcard_shipping'>
                        <p>Shipping</p>
                        <h5>{product.shipping}</h5>
                    </div>
                    <div className='productcard_sold_ratings'>
                        <h5>{product.sold}</h5>
                        <p>sold</p>
                        <h5 className='pcd_s_r_l'>{product.left}</h5>
                        <p>left</p>
                        <span>
                            <ViewRatings ratings={product.ratings} iconsize={screen_width <= 644 ? 9 : 18} />
                            <h5>{product.ratings}</h5>
                        </span>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className='products_m_card_main'>
                <div className='productscard_image' onClick={() => navigate(`/products/${product.id}`)}>
                    <img src={productdp} alt={'product'} />
                </div>
                <div className="productscard_info">
                    <p className='productcard_name'>
                        {(product.name).length <= 70 ? product.name : `${(product.name).slice(0, 70)}...`}
                    </p>
                    <div className='productscard_w_ss'>
                        {product.warranty && <span>
                            <MdShield size={13} color={'rgb(74, 74, 173)'} />
                            <p>WARRANTY</p>
                        </span>}
                        {product.specialsale && <span>
                            <MdStar size={13} color={'rgb(74, 74, 173)'} />
                            <p>SPECIAL SALE</p>
                        </span>}
                    </div>
                    <div className='productcard_price'>
                        <p>NGN</p>
                        <h5>{product.price}</h5>
                        <h5 style={{ textDecoration: 'line-through', color: 'grey', marginLeft: '10px' }}>{'1,400'}</h5>
                        <h5 style={{ marginLeft: '10px', color: 'red' }}>{'62% off'}</h5>
                    </div>
                    <div className='productcard_shipping'>
                        <p>Shipping</p>
                        <h5>{product.shipping}</h5>
                    </div>
                    <div className='productcard_sold_ratings'>
                        <h5>{product.sold}</h5>
                        <p>sold</p>
                        <h5 className='pcd_s_r_l'>{product.left}</h5>
                        <p>left</p>
                        <span>
                            <ViewRatings ratings={product.ratings} iconsize={15} />
                            <h5>{product.ratings}</h5>
                        </span>
                    </div>
                    <div className='productscard_info_h'>
                        <div className='productscard_cart'>
                            <MdAddShoppingCart size={20} color={'white'} />
                        </div>
                        <div className='productscard_wl' onClick={() => handleWishList()}>
                            <FaHeart size={20} color={product.wishlist ? 'rgb(220, 0, 0)' : 'rgb(230, 230, 230)'} />
                        </div>
                        <button onClick={() => navigate(`/products/${product.id}`)}>View</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductsCard;
