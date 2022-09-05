import { FaShoppingBag, FaShoppingCart, FaCashRegister } from 'react-icons/fa';
import { MdChat, MdSettings, MdList, MdLogout, MdNotifications } from 'react-icons/md';

const iconcolor = "rgb(74, 74, 173)";
const iconsize = 18;

const HeaderMenuData = [
    {
        id: 1,
        icon: <MdSettings color={iconcolor} size={iconsize} />,
        name: 'Settings'
    },
    {
        id: 2,
        icon: <MdNotifications color={iconcolor} size={iconsize} />,
        name: 'Notifications'
    },
    {
        id: 3,
        icon: <FaShoppingCart color={iconcolor} size={iconsize} />,
        name: 'Carts'
    },
    {
        id: 4,
        icon: <MdList color={iconcolor} size={iconsize} />,
        name: 'WishList'
    },
    {
        id: 5,
        icon: <MdChat color={iconcolor} size={iconsize} />,
        name: 'Chats'
    },
    {
        id: 6,
        icon: <FaShoppingBag color={iconcolor} size={iconsize} />,
        name: 'Orders'
    },
    {
        id: 7,
        icon: <FaCashRegister color={iconcolor} size={iconsize} />,
        name: 'Coupons'
    },
    {
        id: 8,
        icon: <MdLogout color={iconcolor} size={iconsize} />,
        name: 'Logout'
    }
]

export default HeaderMenuData;

