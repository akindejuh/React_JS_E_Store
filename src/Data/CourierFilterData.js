import { MdAlarm, MdLocationPin } from 'react-icons/md';

const CourierTransportType = ({ iconsize, iconcolor }) => {
    return [
        {
            id: 1,
            icon: <MdAlarm color={iconcolor} size={iconsize} />,
            name: "Show All",
            handlefunction: () => {
                console.log('Selected All')
            },
            group: "couriertransport"
        },
        {
            id: 2,
            icon: <MdAlarm color={iconcolor} size={iconsize} />,
            name: "Motorcycle",
            handlefunction: () => {
                console.log('Selected Motorcycle')
            },
            group: "couriertransport"
        },
        {
            id: 3,
            icon: <MdAlarm color={iconcolor} size={iconsize} />,
            name: "Van",
            handlefunction: () => {
                console.log('Selected Van')
            },
            group: "couriertransport"
        },
        {
            id: 4,
            icon: <MdAlarm color={iconcolor} size={iconsize} />,
            name: "Truck",
            handlefunction: () => {
                console.log('Selected Truck')
            },
            group: "couriertransport"
        },
        {
            id: 5,
            icon: <MdAlarm color={iconcolor} size={iconsize} />,
            name: "Airplane",
            handlefunction: () => {
                console.log('Selected Airplane')
            },
            group: "couriertransport"
        }
    ]
}

const CourierStateOfOrigin = ({ iconsize, iconcolor }) => {
    return [
        {
            id: 1,
            icon: <MdLocationPin color={iconcolor} size={iconsize} />,
            name: "Anywhere",
            handlefunction: () => {
                console.log('Selected Anywhere')
            },
            group: "courierstateoforigin"
        },
        {
            id: 2,
            icon: <MdLocationPin color={iconcolor} size={iconsize} />,
            name: "Abia",
            handlefunction: () => {
                console.log('Selected Abia')
            },
            group: "courierstateoforigin"
        },
        {
            id: 3,
            icon: <MdLocationPin color={iconcolor} size={iconsize} />,
            name: "Adamawa",
            handlefunction: () => {
                console.log('Selected Adamawa')
            },
            group: "courierstateoforigin"
        },
        {
            id: 4,
            icon: <MdLocationPin color={iconcolor} size={iconsize} />,
            name: "Lagos",
            handlefunction: () => {
                console.log('Selected Lagos')
            },
            group: "courierstateoforigin"
        },
        {
            id: 5,
            icon: <MdLocationPin color={iconcolor} size={iconsize} />,
            name: "Oyo",
            handlefunction: () => {
                console.log('Selected Oyo')
            },
            group: "courierstateoforigin"
        },
        {
            id: 6,
            icon: <MdLocationPin color={iconcolor} size={iconsize} />,
            name: "Ondo",
            handlefunction: () => {
                console.log('Selected Ondo')
            },
            group: "courierstateoforigin"
        },
        {
            id: 7,
            icon: <MdLocationPin color={iconcolor} size={iconsize} />,
            name: "Benin",
            handlefunction: () => {
                console.log('Selected Benin')
            },
            group: "courierstateoforigin"
        },
        {
            id: 8,
            icon: <MdLocationPin color={iconcolor} size={iconsize} />,
            name: "Akwa Ibom",
            handlefunction: () => {
                console.log('Selected Akwa Ibom')
            },
            group: "courierstateoforigin"
        },
        {
            id: 9,
            icon: <MdLocationPin color={iconcolor} size={iconsize} />,
            name: "Plateau",
            handlefunction: () => {
                console.log('Selected Plateau')
            },
            group: "courierstateoforigin"
        },
        {
            id: 10,
            icon: <MdLocationPin color={iconcolor} size={iconsize} />,
            name: "Imo",
            handlefunction: () => {
                console.log('Selected Imo')
            },
            group: "courierstateoforigin"
        }
    ]
}

const CourierParcelType = ({ iconsize, iconcolor }) => {
    return [
        {
            id: 1,
            icon: <MdAlarm color={iconcolor} size={iconsize} />,
            name: "Anything",
            handlefunction: () => {
                console.log('Selected Anything')
            },
            group: "courierparcel"
        },
        {
            id: 2,
            icon: <MdAlarm color={iconcolor} size={iconsize} />,
            name: "Food",
            handlefunction: () => {
                console.log('Selected Food')
            },
            group: "courierparcel"
        },
        {
            id: 3,
            icon: <MdAlarm color={iconcolor} size={iconsize} />,
            name: "Clothings",
            handlefunction: () => {
                console.log('Selected Clothings')
            },
            group: "courierparcel"
        },
        {
            id: 4,
            icon: <MdAlarm color={iconcolor} size={iconsize} />,
            name: "Pharmaceuticals",
            handlefunction: () => {
                console.log('Selected Pharmaceutical')
            },
            group: "courierparcel"
        },
        {
            id: 5,
            icon: <MdAlarm color={iconcolor} size={iconsize} />,
            name: "Tech Gadgets",
            handlefunction: () => {
                console.log('Selected Tech Gadgets')
            },
            group: "courierparcel"
        },
        {
            id: 6,
            icon: <MdAlarm color={iconcolor} size={iconsize} />,
            name: "Bags",
            handlefunction: () => {
                console.log('Selected Bags')
            },
            group: "courierparcel"
        }
    ]
}

export const CourierFilterData = ({ iconsize, iconcolor }) => {
    return [
        {
            id: 1,
            question: "What are you sending?",
            data: CourierParcelType({ iconsize, iconcolor })
        },
        {
            id: 2,
            question: "Parcel State of Origin",
            data: CourierStateOfOrigin({ iconsize, iconcolor })
        },
        {
            id: 3,
            question: "What Transport is Appropraite?",
            data: CourierTransportType({ iconsize, iconcolor })
        },
    ]
}