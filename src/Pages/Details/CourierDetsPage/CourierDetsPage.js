import React from 'react';
import './CourierDetsPage.scss';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { MdArrowBackIos, MdGroup, MdShare, MdReport, MdLocationPin, MdSend, MdTimer } from 'react-icons/md';
import { FaWhatsapp, FaInstagram, FaFacebook, FaGoogle, FaBox } from 'react-icons/fa';
import transportIconsData from '../../../Data/TransportIconsData';
import StoresProductIconsData from '../../../Data/StoresProductIconsData';
import ViewRatings from '../../../Components/ViewRatings/ViewRatings';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { showfooter } from '../../../Redux/Actions/UtilsActions';
import AddReview from '../../../Components/AddReview/AddReview';
import ReviewItem from '../../../Components/ReviewItem/ReviewItem';
import { app_name } from '../../../Configs/AppName';

// temp data
import storetempimage from '../../../Images/Home/image1.jpg';
import couriersData from '../../../Temp/CouriersData';

const CourierDetsPage = () => {
    const navigate = useNavigate();
    const screen_width = useSelector(state => state.ScreenWidth);
    const id = useParams('id').id - 1;
    document.title = `${app_name()} | Couriers | ${useParams('id').id}`;
    const dispatch = useDispatch();
    dispatch(showfooter());
    const courierinfo = couriersData[id];

    const handleDayfromID = (DayID) => {
        switch (DayID) {
            case 0:
                return "Sunday";
            case 1:
                return "Monday";
            case 2:
                return "Tuesday";
            case 3:
                return "Wednesday";
            case 4:
                return "Thursday";
            case 5:
                return "Friday";
            case 6:
                return "Saturday";
            default:
                return "Sunday"
        }
    }

    return (
        <div className='courierdets_page'>
            <div className='cordet_wrapper_1'>
                <div className='cordet_1_image'>
                    <div onClick={() => navigate(-1)} className='cor_det_1_back'>
                        <MdArrowBackIos size={30} color={'rgb(228, 228, 228)'} />
                    </div>
                    <div className='cordet_1_report_share'>
                        <div><MdReport size={30} color={'rgb(228, 228, 228)'} /></div>
                        <div><MdShare size={30} color={'rgb(228, 228, 228)'} /></div>
                    </div>
                    {screen_width <= 720 && <div className='cordet_1_mborder'></div>}
                    <img src={storetempimage} alt='store_temp' />
                </div>
            </div>
            <div className='cordet_wrapper_2'>
                <div className='cor_w_2_1'>
                    <div className='cor_w_2_1_main'>
                        <h1>{courierinfo.name}</h1>
                        <div className='cor_w_2_1_m_r'>
                            <ViewRatings ratings={courierinfo.ratings} iconsize={25} />
                            <p>{courierinfo.ratings}</p>
                        </div>
                        <p className='cor_w_2_1_m_co'>{courierinfo.offline ? 'Courier Offline' : 'Courier Online'}</p>
                        <div className="cor_w_2_1_m_socials">
                            {courierinfo.sociallinks.whatsapp && <a target='_blank' href='www.wa.me'><FaWhatsapp size={22} /></a>}
                            {courierinfo.sociallinks.facebook && <a target='_blank' href='www.fa.me'><FaFacebook size={22} /></a>}
                            {courierinfo.sociallinks.instagram && <a target='_blank' href='www.insta.me'><FaInstagram size={22} /></a>}
                            {courierinfo.sociallinks.gmail && <a target='_blank' href='www.goo.me'><FaGoogle size={22} /></a>}
                        </div>
                        <div className='cor_w_2_1_m_btn'>
                            <button>
                                <p>Report</p>
                                <MdReport color='rgb(74, 74, 173)' size={20} />
                            </button>
                            <button className='cor_w_2_1_m_b_snd'
                                onClick={() => navigate('/parcels/send')}>
                                <p>Send Something</p>
                                <MdSend color='white' size={20} />
                            </button>
                        </div>
                    </div>
                    <div className='cor_w_2_1_loc'>
                        <div className='cor_w_2_1_loc_1'>
                            <MdLocationPin size={30} color='rgb(74, 74, 173)' />
                        </div>
                        <div className='cor_w_2_1_loc_2'>
                            <h3>Location</h3>
                            {courierinfo.location.map((item) =>
                                <div className='c_w_2_1_l_2_loc'>
                                    <h6>{item.split('|')[0]}</h6>
                                    <p>{item.split('|')[1]}</p>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='cor_w_2_1_l'>
                        <div className='cor_w_2_1_l_1'>
                            <MdGroup size={30} color='rgb(74, 74, 173)' />
                        </div>
                        <div className='cor_w_2_1_l_2'>
                            <h3>Logistics</h3>
                            <div className='cor_w_2_1_l_2_grid'>
                                {courierinfo.transport.map((item) =>
                                    <div className='cor_w_2_1_l_2_gi'>
                                        <div>
                                            {transportIconsData(item, 25, 'rgb(74, 74, 173)')}
                                        </div>
                                        <p>{item[0].toUpperCase()}{item.slice(1).toLowerCase()}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='cor_w_2_2'>
                    <div className='cor_w_2_2_hop'>
                        <div className='cor_w_2_2_hop_1'>
                            <MdTimer size={30} color={'rgb(74, 74, 173)'} />
                        </div>
                        <div className='cor_w_2_2_hop_2'>
                            <h3>Hours of Operation</h3>
                            {courierinfo.hop.map((item, i) =>
                                <div key={i} className='cor_w_2_2_hop_gi'>
                                    <h6>{handleDayfromID(i)}</h6>
                                    <p>{item}</p>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='cor_w_2_2_pc'>
                        <div className='cor_w_2_2_pc_1'>
                            <FaBox size={30} color={'rgb(74, 74, 173)'} />
                        </div>
                        <div className="cor_w_2_2_pc_2">
                            <h3>Parcel Category</h3>
                            {courierinfo.parcels.map((item, i) =>
                                <div key={i} className='cor_w_2_2_pc_gi'>
                                    <h6>{item[0].toUpperCase()}{item.slice(1).toLowerCase()}</h6>
                                    <p>{StoresProductIconsData(item, 25).desc}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className='cor_w_2_3'>
                    <AddReview canAddReview={true} />
                    <div className='cor_w_2_3_r'>
                        {courierinfo.reviews.map((item) =>
                            <ReviewItem review={item} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourierDetsPage;
