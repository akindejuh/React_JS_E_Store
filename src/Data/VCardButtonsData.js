import { MdDelete, MdLock } from 'react-icons/md';

const iconsize = 25;

const VCardButtonsData = [
    {
        id: 1,
        icon: <MdLock color='rgb(74, 224, 50)' size={iconsize} />,
        title: "Freeze Card",
        desc: "Temporary",
        b_color: "rgba(74, 224, 50, 0.3)",
        handleClick: () => {
            console.log('Freeze Card');
        }
    },
    {
        id: 2,
        icon: <MdDelete color='rgb(194, 44, 43)' size={iconsize} />,
        title: "Delete Card",
        desc: "Permanent",
        b_color: "rgba(194, 44, 43, 0.3)",
        handleClick: () => {
            console.log('Delete Card');
        }
    }
]

export default VCardButtonsData;