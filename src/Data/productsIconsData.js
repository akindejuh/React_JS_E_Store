import { AiFillCar } from 'react-icons/ai';
import { MdShoppingBag } from 'react-icons/md';

const productsIconsData = (productData, iconsize) => {

    const iconcolor = 'rgb(80, 80, 80)';

    switch (productData) {
        case "food":
            return <AiFillCar color={iconcolor} size={iconsize} />;
        case "clothings":
            return <AiFillCar color={iconcolor} size={iconsize} />;
        case "bags":
            return <MdShoppingBag color={iconcolor} size={iconsize} />;
        case "fashion":
            return <MdShoppingBag color={iconcolor} size={iconsize} />;
        default:
            return <AiFillCar color={iconcolor} size={iconsize} />;
    }
}

export default productsIconsData;
