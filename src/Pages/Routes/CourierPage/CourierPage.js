import React from 'react';
import './CourierPage.scss';
import CouriersCard from '../../../Cards/CouriersCard/CouriersCard';
import { useDispatch } from 'react-redux';
import { scrollpageon, showfooter } from '../../../Redux/Actions/UtilsActions';
import { app_name } from '../../../Configs/AppName';

// temp data
import couriersData from '../../../Temp/CouriersData';

const CourierPage = () => {
    const dispatch = useDispatch();
    dispatch(scrollpageon());
    dispatch(showfooter());
    document.title = `${app_name()} | Couriers`;

    return (
        <div className='courierpage_main'>
            <div className='courierpage_couriercards_wrapper'>
                <h2>Explore Couriers</h2>
                <div className='courierpage_couriercards'>
                    {couriersData.map((item) => <CouriersCard courier={item} />)}
                </div>
            </div>
        </div >
    )
}

export default CourierPage;