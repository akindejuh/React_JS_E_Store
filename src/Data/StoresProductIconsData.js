import { AiFillAlipayCircle } from 'react-icons/ai';
import { MdWrongLocation } from 'react-icons/md';

const StoresProductIconsData = (productData, size) => {

    const iconcolor = 'rgb(80, 80, 80)';

    switch (productData) {
        case "fashion":
            return {
                icon: <MdWrongLocation className='styles_icon' color={iconcolor} size={size} />,
                desc: "Watches, SmartPhones..."
            };
        case "tech":
            return {
                icon: <AiFillAlipayCircle className='styles_icon' color={iconcolor} size={size} />,
                desc: "Clothes, Bags, Shoes..."
            };
        case "food":
            return {
                icon: <MdWrongLocation className='styles_icon' color={iconcolor} size={size} />,
                desc: "Food and Drinks"
            };
        default:
            return {
                icon: <AiFillAlipayCircle className='styles_icon' color={iconcolor} size={size} />,
                desc: "default"
            };
    }
}

export default StoresProductIconsData;
