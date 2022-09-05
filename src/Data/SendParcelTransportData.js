import { GiCommercialAirplane, GiTruck, GiDutchBike } from 'react-icons/gi';
import { FaShuttleVan, FaTrailer } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const SendParcelTransport = () => {
    const screen_width = useSelector(state => state.ScreenWidth);

    return [
        {
            id: 1,
            name: 'Motorcycle',
            icon: <GiDutchBike className='sp_td' size={screen_width < 644 ? 20 : 27} />
        },
        {
            id: 2,
            name: 'Mini Van',
            icon: <FaShuttleVan className='sp_td' size={screen_width < 644 ? 20 : 27} />
        },
        {
            id: 3,
            name: 'Truck',
            icon: <GiTruck className='sp_td' size={screen_width < 644 ? 20 : 27} />
        },
        {
            id: 4,
            name: 'Trailer',
            icon: <FaTrailer className='sp_td' size={screen_width < 644 ? 20 : 27} />
        },
        {
            id: 5,
            name: 'Airplane',
            icon: <GiCommercialAirplane className='sp_td' size={screen_width < 644 ? 20 : 27} />
        }
    ]
}

export default SendParcelTransport;
