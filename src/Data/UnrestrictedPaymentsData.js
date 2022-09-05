import { FaDollarSign } from 'react-icons/fa';

const iconsize = 13;
const iconcolor = 'rgb(74, 74, 173)';

const UnrestrictedPaymentsData = [
    {
        id: 1,
        icon: <FaDollarSign color={iconcolor} size={iconsize} />,
        name: "Never Allow",
        handlefunction: () => {
            console.log('Selected Never Allow')
        },
        group: "unrestrictedpayments"
    },
    {
        id: 2,
        icon: <FaDollarSign color={iconcolor} size={iconsize} />,
        name: "NGN 100",
        handlefunction: () => {
            console.log('Selected NGN 100')
        },
        group: "unrestrictedpayments"
    },
    {
        id: 3,
        icon: <FaDollarSign color={iconcolor} size={iconsize} />,
        name: "NGN 200",
        handlefunction: () => {
            console.log('Selected NGN 200')
        },
        group: "unrestrictedpayments"
    },
    {
        id: 4,
        icon: <FaDollarSign color={iconcolor} size={iconsize} />,
        name: "NGN 500",
        handlefunction: () => {
            console.log('Selected NGN 500')
        },
        group: "unrestrictedpayments"
    },
    {
        id: 5,
        icon: <FaDollarSign color={iconcolor} size={iconsize} />,
        name: "NGN 1000",
        handlefunction: () => {
            console.log('Selected NGN 1000')
        },
        group: "unrestrictedpayments"
    },
    {
        id: 6,
        icon: <FaDollarSign color={iconcolor} size={iconsize} />,
        name: "NGN 2000",
        handlefunction: () => {
            console.log('Selected NGN 2000')
        },
        group: "unrestrictedpayments"
    },
    {
        id: 7,
        icon: <FaDollarSign color={iconcolor} size={iconsize} />,
        name: "NGN 5000",
        handlefunction: () => {
            console.log('Selected NGN 5000')
        },
        group: "unrestrictedpayments"
    },
    {
        id: 8,
        icon: <FaDollarSign color={iconcolor} size={iconsize} />,
        name: "NGN 10000",
        handlefunction: () => {
            console.log('Selected NGN 10000')
        },
        group: "unrestrictedpayments"
    }
]

export default UnrestrictedPaymentsData;