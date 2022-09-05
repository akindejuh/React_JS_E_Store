import React from 'react';
import './StoreDetsPage.scss';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { MdArrowBackIos, MdVerified, MdGroup, MdVerifiedUser, MdShare, MdReport, MdLocationPin } from 'react-icons/md';
import { FaWhatsapp, FaInstagram, FaFacebook, FaGoogle } from 'react-icons/fa';
import StoresProductIconsData from '../../../Data/StoresProductIconsData';
import CouponsCard from '../../../Cards/CouponsCard/CouponsCard';
import ProductsCard from '../../../Cards/ProductsCard/ProductsCard';
import EmptyCard from '../../../Cards/EmptyCard/EmptyCard';
import ViewRatings from '../../../Components/ViewRatings/ViewRatings';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { showfooter } from '../../../Redux/Actions/UtilsActions';
import { app_name } from '../../../Configs/AppName';

// temp data
import storetempimage from '../../../Images/Home/image1.jpg';
import TopStoresData from '../../../Temp/TopStoresData';
import productsData from '../../../Temp/ProductsData';

const StoreDetsPage = () => {
    const navigate = useNavigate();
    const screen_width = useSelector(state => state.ScreenWidth);
    const id = useParams('id').id - 1;
    document.title = `${app_name()} | Stores | ${useParams('id').id}`;
    const dispatch = useDispatch();
    dispatch(showfooter());
    const storeinfo = TopStoresData[id];

    return (
        <div className='storedetspage_main'>
            <div className='strdet_wrapper_1'>
                <div className='strdet_1_image'>
                    <div onClick={() => navigate(-1)} className='str_det_1_back'>
                        <MdArrowBackIos size={30} color={'rgb(228, 228, 228)'} />
                    </div>
                    <div className="strdet_1_verified">
                        <MdVerified size={30} color={storeinfo.verified ? 'rgb(0, 170, 0)' : 'grey'} />
                    </div>
                    <div className='strdet_1_report_share'>
                        <div><MdReport size={30} color={'rgb(228, 228, 228)'} /></div>
                        <div><MdShare size={30} color={'rgb(228, 228, 228)'} /></div>
                    </div>
                    {screen_width <= 720 && <div className='strdet_1_mborder'></div>}
                    <img src={storetempimage} alt='store_temp' />
                </div>
            </div>
            <div className='strdet_wrapper_2'>
                <div className='strdet_2_info'>
                    <div className='strdet_2_info_det'>
                        <h1>{storeinfo.name}</h1>
                        <div className='strdet_2_info_det_products'>
                            {(storeinfo.productType).map((item) =>
                                <span>
                                    {(StoresProductIconsData(item, screen_width < 644 ? 14 : 16)).icon}
                                    <p>{item}</p>
                                </span>
                            )}
                        </div>
                        <div className='strdet_2_info_det_ratings'>
                            <ViewRatings ratings={storeinfo.ratings} iconsize={25} />
                            <p>{storeinfo.ratings}</p>
                        </div>
                        <div className="strdet_2_info_det_fol">
                            <div className='strdet_2_i_det_fol'>
                                <MdGroup size={25} color={'rgb(94, 94, 94)'} />
                                <p>{storeinfo.followers} followers</p>
                            </div>
                            <div className='strdet_2_i_det_button'>
                                <MdVerifiedUser size={20} color={'white'} />
                                <p>Follow</p>
                            </div>
                        </div>
                        <div className="strdet_2_i_det_socials">
                            {storeinfo.sociallinks.whatsapp && <a target='_blank' href='www.wa.me'><FaWhatsapp size={22} /></a>}
                            {storeinfo.sociallinks.facebook && <a target='_blank' href='www.fa.me'><FaFacebook size={22} /></a>}
                            {storeinfo.sociallinks.instagram && <a target='_blank' href='www.insta.me'><FaInstagram size={22} /></a>}
                            {storeinfo.sociallinks.gmail && <a target='_blank' href='www.goo.me'><FaGoogle size={22} /></a>}
                        </div>
                    </div>
                    <div className="strdet_2_info_loc">
                        <h1><MdLocationPin size={22} color={'rgb(74, 74, 173)'} />Locations</h1>
                        {storeinfo.locations.map((item) => <div className='sd2i_loc_cont'>
                            <h2>E-Store, USA.</h2>
                            <p>{item}</p>
                        </div>)}
                    </div>
                </div>
                <div className='strdet_w_2_stores'>
                    {storeinfo.coupons &&
                        <div className='strdet_wrapper_2_coupons'>
                            <h1>Coupons</h1>
                            <div className='strdet_w_2_c'>
                                {storeinfo.coupons.map((item) => <CouponsCard coupon={item} />)}
                            </div>
                        </div>
                    }
                    <div className='strdet_wrapper_2_catalogues'>
                        {storeinfo.catalogue.length <= 0 ?
                            <div className='strdet_w_2_c_empty'>
                                <EmptyCard className='strdet_empty' />
                                <EmptyCard className='strdet_empty' />
                                <EmptyCard className='strdet_empty' />
                                <EmptyCard className='strdet_empty' />
                                <EmptyCard className='strdet_empty' />
                                <EmptyCard className='strdet_empty' />
                            </div>
                            :
                            <div className='strdet_w_2_c_not_empty' >
                                {storeinfo.catalogue.map((item) => <div className='s_w_2_n_e_wrapper'>
                                    <h2>{item}</h2>
                                    <div className='s_w_2_n_e_container'>
                                        {productsData.map((product) => <div><ProductsCard product={product} /></div>)}
                                    </div>
                                </div>)}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StoreDetsPage;
