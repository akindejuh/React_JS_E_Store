import { MdFlashAuto, MdWifi, MdCable } from 'react-icons/md';

const iconsize = 25;

export const BillsData = [
    {
        id: 1,
        icon: <MdFlashAuto color='rgb(74, 74, 173)' size={iconsize} />,
        title: "Electricity",
        desc: "Pay Electric Bills",
        b_color: "rgba(74, 44, 173, 0.15)"
    },
    {
        id: 2,
        icon: <MdCable color='rgb(74, 74, 173)' size={iconsize} />,
        title: "Cable",
        desc: "DSTV, GOTV, Startimes...",
        b_color: "rgba(74, 44, 173, 0.15)"
    },
    {
        id: 3,
        icon: <MdWifi color='rgb(74, 74, 173)' size={iconsize} />,
        title: "Internet",
        desc: "Spectranet, Mi-Fi...",
        b_color: "rgba(74, 44, 173, 0.15)"
    }
]