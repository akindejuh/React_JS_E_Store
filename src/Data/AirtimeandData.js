import { MdCall, MdPhone } from 'react-icons/md';

const iconsize = 25;

export const AirtimeandData = [
    {
        id: 1,
        icon: <MdCall color='rgb(74, 74, 173)' size={iconsize} />,
        title: "Airtime",
        desc: "MTN, Airtel, Glo, 9Mobile",
        b_color: "rgba(74, 44, 173, 0.15)"
    },
    {
        id: 2,
        icon: <MdPhone color='rgb(74, 74, 173)' size={iconsize} />,
        title: "Data",
        desc: "Buy Data Bundles",
        b_color: "rgba(74, 44, 173, 0.15)"
    }
]

export const AirtimeData = [
    {
        id: 1,
        icon: <MdCall color='rgb(170, 170, 0)' size={iconsize} />,
        title: "MTN",
        desc: "MTN Nigeria",
        b_color: "rgba(200, 200, 0, 0.25)"
    },
    {
        id: 2,
        icon: <MdCall color='rgb(0, 160, 0)' size={iconsize} />,
        title: "GLO",
        desc: "Glo Nigeria",
        b_color: "rgba(0, 160, 0, 0.25)"
    },
    {
        id: 3,
        icon: <MdCall color='rgb(0, 160, 0)' size={iconsize} />,
        title: "9Mobile",
        desc: "9Mobile Nigeria",
        b_color: "rgba(0, 160, 0, 0.25)"
    },
    {
        id: 4,
        icon: <MdCall color='rgb(220, 0, 0)' size={iconsize} />,
        title: "Airtel",
        desc: "Airtel Nigeria",
        b_color: "rgba(220, 0, 0, 0.25)"
    }
]