import React from 'react';
import './ProductDetsPage.scss';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { MdArrowBackIos, MdShare, MdReport, MdLocationPin, MdStore, MdShoppingCart, MdPayment } from 'react-icons/md';
import ViewRatings from '../../../Components/ViewRatings/ViewRatings';
import AddReview from '../../../Components/AddReview/AddReview';
import ReviewItem from '../../../Components/ReviewItem/ReviewItem';
import CustomColorSelector from '../../../Components/CustomColorSelector/CustomColorSelector';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { showfooter } from '../../../Redux/Actions/UtilsActions';
import { app_name } from '../../../Configs/AppName';

// temp data
import storetempimage from '../../../Images/Home/image1.jpg';
import productsData from '../../../Temp/ProductsData';

const ProductDetsPage = () => {
    const navigate = useNavigate();
    const screen_width = useSelector(state => state.ScreenWidth);
    const id = useParams('id').id - 1;
    document.title = `${app_name()} | Products | ${useParams('id').id}`;
    const dispatch = useDispatch();
    dispatch(showfooter());
    const productinfo = productsData[id];

    return (
        <div className='productdets_page'>
            <div className='proddet_wrapper_1'>
                <div className='proddet_1_image'>
                    <div onClick={() => navigate(-1)} className='prod_det_1_back'>
                        <MdArrowBackIos size={30} color={'rgb(228, 228, 228)'} />
                    </div>
                    <div className='proddet_1_report_share'>
                        <div><MdReport size={30} color={'rgb(228, 228, 228)'} /></div>
                        <div><MdShare size={30} color={'rgb(228, 228, 228)'} /></div>
                    </div>
                    {screen_width <= 720 && <div className='proddet_1_mborder'></div>}
                    <img src={storetempimage} alt='store_temp' />
                </div>
            </div>
            <div className='proddet_wrapper_2'>
                <div className='prod_w_2_1'>
                    <div className='prod_w_2_1_main'>
                        <h1>{productinfo.name}</h1>
                        <div className='prod_w_2_1_m_p'>
                            {productinfo.discount &&
                                <div className='prod_w_2_1_m_p_w'>
                                    <h4>{productinfo.newprice}</h4>
                                    <h6>{productinfo.price}</h6>
                                    <h5>{'43%'}</h5>
                                </div>
                            }
                            {!productinfo.discount &&
                                <h4 className='prod_w_2_1_m_p_p'>{productinfo.price}</h4>
                            }
                        </div>
                        <p className='prod_w_2_1_m_p_l'>
                            <span>{productinfo.left}</span> Available
                        </p>
                        {productinfo.warranty &&
                            <p className='prod_w_2_1_m_p_wp'>
                                <span>{productinfo.waranty_period}</span> Warranty
                            </p>
                        }
                        <ViewRatings ratings={productinfo.ratings} iconsize={25} />
                        <div className='prod_w_2_1_m_sc'>
                            <h3 className='prod_w_2_1_m_sc_h3'>Select Color</h3>
                            <div className='prod_w_2_1_m_sc_grid'>
                                {productinfo.colors.map((item, i) =>
                                    <CustomColorSelector
                                        customcolor={item}
                                        colorgroup={`${id}_product_color`}
                                        index={i}
                                    />
                                )}
                            </div>
                        </div>
                        <div className='prod_w_2_1_m_btn'>
                            <button>
                                <p>Add to Cart</p>
                                <MdShoppingCart color='rgb(74, 74, 173)' size={20} />
                            </button>
                            <button className='prod_w_2_1_m_b_snd'>
                                <p>Buy Now</p>
                                <MdPayment color='white' size={20} />
                            </button>
                        </div>
                    </div>
                    <div className='prod_w_2_1_mi'>
                        <div className='prod_w_2_1_mi_1'>
                            <MdStore size={30} color='rgb(74, 74, 173)' />
                        </div>
                        <div className='prod_w_2_1_mi_2'>
                            <h3>Store</h3>
                            <p>Belema Clothings</p>
                            <ViewRatings ratings={productinfo.ratings} iconsize={25} />
                        </div>
                    </div>
                </div>
                <div className='prod_w_2_2'>
                    <div className='prod_w_2_2_pd'>
                        <h3>Product Description</h3>
                        <p>{productinfo.desc.length > 300 ? `${productinfo.desc.slice(0, 300)}...` : productinfo.desc}</p>
                        <button className='prod_w_2_2_pd_btn' onClick={() => navigate(`/products/${id}/description`)}>Read More</button>
                    </div>
                    <div className='prod_w_2_1_loc'>
                        <div className='prod_w_2_1_loc_1'>
                            <MdLocationPin size={30} color='rgb(74, 74, 173)' />
                        </div>
                        <div className='prod_w_2_1_loc_2'>
                            <h3>Ships From</h3>
                            {productinfo.location.map((item) =>
                                <div className='c_w_2_1_l_2_loc'>
                                    <h6>{item.split('|')[0]}</h6>
                                    <p>{item.split('|')[1]}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className='prod_w_2_3'>
                    <AddReview canAddReview={true} />
                    <div className='prod_w_2_3_r'>
                        {productinfo.reviews.map((item, i) =>
                            <ReviewItem key={i} review={item} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetsPage;
