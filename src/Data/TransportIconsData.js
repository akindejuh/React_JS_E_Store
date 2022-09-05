import { GiCommercialAirplane, GiTruck, GiDutchBike } from 'react-icons/gi';
import { FaShuttleVan } from 'react-icons/fa';

const transportIconsData = (transportData, iconsize, iconcolor) => {

    switch (transportData) {
        case "motorcycle":
            return <GiDutchBike color={iconcolor} size={iconsize} />;
        case "van":
            return <FaShuttleVan color={iconcolor} size={iconsize} />;
        case "truck":
            return <GiTruck color={iconcolor} size={iconsize} />;
        case "airplane":
            return <GiCommercialAirplane color={iconcolor} size={iconsize} />;
        default:
            return <GiDutchBike color={iconcolor} size={iconsize} />;
    }
}

export default transportIconsData;
