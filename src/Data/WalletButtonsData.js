import { MdAdd, MdSend, MdShop, MdPhone, MdNote } from 'react-icons/md';
import { GiSurferVan } from 'react-icons/gi';

const iconsize = 25;

const WalletButtonsData = [
    {
        id: 1,
        icon: <MdAdd color='rgb(74, 174, 50)' size={iconsize} />,
        title: "Fund",
        desc: "Fund Wallet",
        b_color: "rgba(94, 154, 50, 0.3)"
    },
    {
        id: 2,
        icon: <MdSend color='rgb(174, 54, 53)' size={iconsize} />,
        title: "Send",
        desc: "Send Money",
        b_color: "rgba(174, 54, 53, 0.3)"
    },
    {
        id: 3,
        icon: <MdShop color='rgb(74, 74, 153)' size={iconsize} />,
        title: "Orders",
        desc: "My Orders",
        b_color: "rgba(74, 74, 153, 0.3)"
    },
    {
        id: 4,
        icon: <GiSurferVan color='rgb(74, 74, 153)' size={iconsize} />,
        title: "Parcels",
        desc: "My Parcels",
        b_color: "rgba(74, 74, 153, 0.3)"
    },
    {
        id: 5,
        icon: <MdPhone color='rgb(74, 74, 153)' size={iconsize} />,
        title: "Subscription",
        desc: "Airtime and Data",
        b_color: "rgba(74, 74, 153, 0.3)"
    },
    {
        id: 6,
        icon: <MdNote color='rgb(74, 74, 153)' size={iconsize} />,
        title: "Bills",
        desc: "Electricity, DSTV...",
        b_color: "rgba(74, 74, 153, 0.3)"
    }
]

export default WalletButtonsData;