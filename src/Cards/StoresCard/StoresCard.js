import React from 'react';
import './StoresCard.scss';
import { MdVerified } from 'react-icons/md';
import StoresProductIconsData from '../../Data/StoresProductIconsData';
import ViewRatings from '../../Components/ViewRatings/ViewRatings';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// temp
import storedp from '../../Images/Home/image2.jpg';

const StoresCard = ({ store }) => {
    const screen_width = useSelector(state => state.ScreenWidth);
    const navigate = useNavigate();

    return (
        <div className='storecard_main'>
            <div className='storecard_image' onClick={() => navigate(`/stores/${store.id}`)}>
                <img src={storedp} alt={'store'} />
                <div className='storecard_fade'></div>
            </div>
            <div className="storecard_info">
                <p className='storecard_name'>
                    {screen_width < 644 ?
                        (store.name).length <= 70 ? store.name : `${(store.name).slice(0, 70)}...` :
                        (store.name).length <= 30 ? store.name : `${(store.name).slice(0, 30)}...`
                    }
                </p>
                <p className='storecard_location'>
                    {screen_width < 644 ?
                        (store.locations[0]).length <= 80 ? store.locations[0] : `${(store.locations[0]).slice(0, 80)}...` :
                        (store.locations[0]).length <= 36 ? store.locations[0] : `${(store.locations[0]).slice(0, 36)}...`
                    }
                </p>
                <p className='storecard_followers'>{`${store.followers} `}<span>followers</span></p>
                <div className='storecard_products'>
                    {(store.productType).map((item) => <span>{(StoresProductIconsData(item, screen_width < 644 ? 8 : 17).icon)}<p>{item}</p></span>)}
                </div>
                <div className='storecard_ratings'>
                    <h5>{store.ratings}</h5>
                    <ViewRatings ratings={store.ratings} iconsize={screen_width < 644 ? 14 : 17} />
                </div>
                <div className='storecard_verified'>
                    <MdVerified className='styles_icon' size={screen_width < 644 ? 14 : 20} color={store.verified ? 'green' : 'grey'} />
                </div>
                {screen_width <= 644 && <button onClick={() => navigate(`/stores/${store.id}`)}>View</button>}
            </div>
        </div >
    )
}

export default StoresCard;
