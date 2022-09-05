import React from 'react';
import './CouriersCard.scss';
import productsIconsData from '../../Data/productsIconsData';
import transportIconsData from '../../Data/TransportIconsData';
import { MdLocationPin } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import ViewRatings from '../../Components/ViewRatings/ViewRatings';

// temp
import courierdp from '../../Images/Home/image1.jpg';

const CouriersCard = ({ courier }) => {
    const screen_width = useSelector(state => state.ScreenWidth);
    const navigate = useNavigate();

    return (
        <div className='couriercard_main'>
            <div className='couriercard_image' onClick={() => navigate(`/couriers/${courier.id}`)} >
                <img src={courierdp} alt={'courier'} />
                <div className='couriercard_fade'></div>
            </div>
            <div className="couriercard_info">
                <p className='couriercard_name'>
                    {screen_width < 644 ? (courier.name).length <= 70 ? courier.name : `${(courier.name).slice(0, 70)}...` : (courier.name).length <= 32 ? courier.name : `${(courier.name).slice(0, 32)}...`
                    }
                </p>
                <div className='couriercard_products'>
                    {(courier.parcels).map((item) => <span>{productsIconsData(item, screen_width <= 644 ? 15 : 17)}</span>)}
                </div>
                <div className='couriercard_locations'>
                    {(courier.locations).map((item) =>
                        <span>
                            <MdLocationPin color={'rgb(90, 90, 90)'} size={screen_width < 644 ? 11 : 13} />{item}
                        </span>
                    )}
                </div>
                <div className='couriercard_transports'>
                    {(courier.transport).map((item) => <span>{transportIconsData(item, screen_width <= 644 ? 15 : 17, 'rgb(80, 80, 80)')}</span>)}
                </div>
                <div className='couriercard_ratings'>
                    <h5>{courier.ratings}</h5>
                    <ViewRatings ratings={courier.ratings} iconsize={screen_width <= 644 ? 15 : 18} />
                </div>
                {screen_width <= 644 && <button onClick={() => navigate(`/couriers/${courier.id}`)}>View</button>}
            </div>
        </div>
    )
}

export default CouriersCard;
