import { MdOutlineHome, MdOutlineStore, MdOutlinePayment, MdOutlineLogout, MdOutlineFoodBank } from 'react-icons/md'; import { GiTruck } from 'react-icons/gi';

const NavListData = ({ iconsize, iconcolor }) => {
    return [
        {
            id: 1,
            name: "Home",
            icon: <MdOutlineHome size={iconsize} color={iconcolor} />,
            nav: "/",
        },
        {
            id: 2,
            name: "Stores",
            icon: <MdOutlineStore size={iconsize} color={iconcolor} />,
            nav: "/stores",
        },
        {
            id: 3,
            name: "Wallet",
            icon: <MdOutlinePayment size={iconsize} color={iconcolor} />,
            nav: "/wallet",
        },
        {
            id: 4,
            name: "Courier",
            icon: <GiTruck size={iconsize} color={iconcolor} />,
            nav: "/couriers",
        },
        {
            id: 5,
            name: "Virtual Card",
            icon: <MdOutlineFoodBank size={iconsize} color={iconcolor} />,
            nav: "/vcard",
        },
        {
            id: 6,
            name: "Logout",
            icon: <MdOutlineLogout size={iconsize} color={iconcolor} />,
            nav: "/login",
        }
    ]
}

export default NavListData;