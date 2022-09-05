import { MdShoppingBag } from 'react-icons/md';
import { MdAlarm, MdLocationPin } from 'react-icons/md';

export const SearchData = ({ pathname }) => {
    switch (pathname) {
        case "/stores":
            return 'Find stores, food, clothes, anything...';
        case "/stores/category":
            return 'Find products in this category...';
        case "/stores/bestselling":
            return 'Search for products with the best offer...';
        case "/stores/limiteddeals":
            return 'Search for products with limited offers...';
        case "/carts":
            return 'Search for a product in your cart...';
        case "/couriers":
            return 'Find courier companies anywhere...';
        default:
            return '';
    }
}

export const FilterData = ({ pathname }) => {
    switch (pathname) {
        case "/carts":
            return CartsData();
        case "/couriers":
            return CouriersData();
        case "/coupons":
            return CouponsData();
        default:
            return null;
    }
}

export const CartsData = () => {
    return {
        header: "Filter your Carts Feed",
        questions: [
            {
                id: 1,
                name: "Product Type?",
                data: [
                    {
                        id: 1,
                        icon: <MdShoppingBag className='custom_radio_icon custom_radio_icon_cartsproducttype' id='11' size={13} />,
                        name: "Show All",
                        handlefunction: () => {
                            console.log('Selected All')
                        },
                        group: "cartsproducttype"
                    },
                    {
                        id: 2,
                        icon: <MdShoppingBag className='custom_radio_icon custom_radio_icon_cartsproducttype' id='22' size={13} />,
                        name: "Food and Drinks",
                        handlefunction: () => {
                            console.log('Selected Food and Drinks')
                        },
                        group: "cartsproducttype"
                    },
                    {
                        id: 3,
                        icon: <MdShoppingBag className='custom_radio_icon custom_radio_icon_cartsproducttype' id='' size={13} />,
                        name: "Fashion",
                        handlefunction: () => {
                            console.log('Selected Fashion')
                        },
                        group: "cartsproducttype"
                    },
                    {
                        id: 4,
                        icon: <MdShoppingBag className='custom_radio_icon custom_radio_icon_cartsproducttype' id='' size={13} />,
                        name: "Tech Gadgets",
                        handlefunction: () => {
                            console.log('Selected Tech Gadgets')
                        },
                        group: "cartsproducttype"
                    },
                    {
                        id: 5,
                        icon: <MdShoppingBag className='custom_radio_icon custom_radio_icon_cartsproducttype' id='' size={13} />,
                        name: "Foot Wears",
                        handlefunction: () => {
                            console.log('Selected Foot Wears')
                        },
                        group: "cartsproducttype"
                    },
                    {
                        id: 6,
                        icon: <MdShoppingBag className='custom_radio_icon custom_radio_icon_cartsproducttype' id='' size={13} />,
                        name: "Bags",
                        handlefunction: () => {
                            console.log('Selected Bags')
                        },
                        group: "cartsproducttype"
                    }
                ]
            }
        ]
    }
}

export const CouriersData = () => {
    return {
        header: "Filter your Courier Feed",
        questions: [
            {
                id: 1,
                name: "What are you sending?",
                data: [
                    {
                        id: 1,
                        icon: <MdAlarm className='custom_radio_icon custom_radio_icon_courierparcel' id='' size={13} />,
                        name: "Anything",
                        handlefunction: () => {
                            console.log('Selected Anything')
                        },
                        group: "courierparcel"
                    },
                    {
                        id: 2,
                        icon: <MdAlarm className='custom_radio_icon custom_radio_icon_courierparcel' id='' size={13} />,
                        name: "Food",
                        handlefunction: () => {
                            console.log('Selected Food')
                        },
                        group: "courierparcel"
                    },
                    {
                        id: 3,
                        icon: <MdAlarm className='custom_radio_icon custom_radio_icon_courierparcel' id='' size={13} />,
                        name: "Clothings",
                        handlefunction: () => {
                            console.log('Selected Clothings')
                        },
                        group: "courierparcel"
                    },
                    {
                        id: 4,
                        icon: <MdAlarm className='custom_radio_icon custom_radio_icon_courierparcel' id='' size={13} />,
                        name: "Pharmaceuticals",
                        handlefunction: () => {
                            console.log('Selected Pharmaceutical')
                        },
                        group: "courierparcel"
                    },
                    {
                        id: 5,
                        icon: <MdAlarm className='custom_radio_icon custom_radio_icon_courierparcel' id='' size={13} />,
                        name: "Tech Gadgets",
                        handlefunction: () => {
                            console.log('Selected Tech Gadgets')
                        },
                        group: "courierparcel"
                    },
                    {
                        id: 6,
                        icon: <MdAlarm className='custom_radio_icon custom_radio_icon_courierparcel' id='' size={13} />,
                        name: "Bags",
                        handlefunction: () => {
                            console.log('Selected Bags')
                        },
                        group: "courierparcel"
                    }
                ]
            },
            {
                id: 2,
                name: "Parcel State of Origin?",
                data: [
                    {
                        id: 1,
                        icon: <MdLocationPin className='custom_radio_icon custom_radio_icon_courierstateoforigin' id='' size={13} />,
                        name: "Anywhere",
                        handlefunction: () => {
                            console.log('Selected Anywhere')
                        },
                        group: "courierstateoforigin"
                    },
                    {
                        id: 2,
                        icon: <MdLocationPin className='custom_radio_icon custom_radio_icon_courierstateoforigin' id='' size={13} />,
                        name: "Abia",
                        handlefunction: () => {
                            console.log('Selected Abia')
                        },
                        group: "courierstateoforigin"
                    },
                    {
                        id: 3,
                        icon: <MdLocationPin className='custom_radio_icon custom_radio_icon_courierstateoforigin' id='' size={13} />,
                        name: "Adamawa",
                        handlefunction: () => {
                            console.log('Selected Adamawa')
                        },
                        group: "courierstateoforigin"
                    },
                    {
                        id: 4,
                        icon: <MdLocationPin className='custom_radio_icon custom_radio_icon_courierstateoforigin' id='' size={13} />,
                        name: "Lagos",
                        handlefunction: () => {
                            console.log('Selected Lagos')
                        },
                        group: "courierstateoforigin"
                    },
                    {
                        id: 5,
                        icon: <MdLocationPin className='custom_radio_icon custom_radio_icon_courierstateoforigin' id='' size={13} />,
                        name: "Oyo",
                        handlefunction: () => {
                            console.log('Selected Oyo')
                        },
                        group: "courierstateoforigin"
                    },
                    {
                        id: 6,
                        icon: <MdLocationPin className='custom_radio_icon custom_radio_icon_courierstateoforigin' id='' size={13} />,
                        name: "Ondo",
                        handlefunction: () => {
                            console.log('Selected Ondo')
                        },
                        group: "courierstateoforigin"
                    },
                    {
                        id: 7,
                        icon: <MdLocationPin className='custom_radio_icon custom_radio_icon_courierstateoforigin' id='' size={13} />,
                        name: "Benin",
                        handlefunction: () => {
                            console.log('Selected Benin')
                        },
                        group: "courierstateoforigin"
                    },
                    {
                        id: 8,
                        icon: <MdLocationPin className='custom_radio_icon custom_radio_icon_courierstateoforigin' id='' size={13} />,
                        name: "Akwa Ibom",
                        handlefunction: () => {
                            console.log('Selected Akwa Ibom')
                        },
                        group: "courierstateoforigin"
                    },
                    {
                        id: 9,
                        icon: <MdLocationPin className='custom_radio_icon custom_radio_icon_courierstateoforigin' id='' size={13} />,
                        name: "Plateau",
                        handlefunction: () => {
                            console.log('Selected Plateau')
                        },
                        group: "courierstateoforigin"
                    },
                    {
                        id: 10,
                        icon: <MdLocationPin className='custom_radio_icon custom_radio_icon_courierstateoforigin' id='' size={13} />,
                        name: "Imo",
                        handlefunction: () => {
                            console.log('Selected Imo')
                        },
                        group: "courierstateoforigin"
                    }
                ]
            },
            {
                id: 3,
                name: "What Transport is Appropraite?",
                data: [
                    {
                        id: 1,
                        icon: <MdAlarm className='custom_radio_icon custom_radio_icon_couriertransport' id='' size={13} />,
                        name: "Show All",
                        handlefunction: () => {
                            console.log('Selected All')
                        },
                        group: "couriertransport"
                    },
                    {
                        id: 2,
                        icon: <MdAlarm className='custom_radio_icon custom_radio_icon_couriertransport' id='' size={13} />,
                        name: "Motorcycle",
                        handlefunction: () => {
                            console.log('Selected Motorcycle')
                        },
                        group: "couriertransport"
                    },
                    {
                        id: 3,
                        icon: <MdAlarm className='custom_radio_icon custom_radio_icon_couriertransport' id='' size={13} />,
                        name: "Van",
                        handlefunction: () => {
                            console.log('Selected Van')
                        },
                        group: "couriertransport"
                    },
                    {
                        id: 4,
                        icon: <MdAlarm className='custom_radio_icon custom_radio_icon_couriertransport' id='' size={13} />,
                        name: "Truck",
                        handlefunction: () => {
                            console.log('Selected Truck')
                        },
                        group: "couriertransport"
                    },
                    {
                        id: 5,
                        icon: <MdAlarm className='custom_radio_icon custom_radio_icon_couriertransport' id='' size={13} />,
                        name: "Airplane",
                        handlefunction: () => {
                            console.log('Selected Airplane')
                        },
                        group: "couriertransport"
                    }
                ]
            }
        ]
    }
}

export const CouponsData = () => {
    return {
        header: "Filter your coupons",
        questions: [
            {
                id: 1,
                name: "Product Type?",
                data: [
                    {
                        id: 1,
                        icon: <MdShoppingBag className='custom_radio_icon custom_radio_icon_couponsproducttype' id='11' size={13} />,
                        name: "Show All",
                        handlefunction: () => {
                            console.log('Selected All')
                        },
                        group: "couponsproducttype"
                    },
                    {
                        id: 2,
                        icon: <MdShoppingBag className='custom_radio_icon custom_radio_icon_couponsproducttype' id='22' size={13} />,
                        name: "Food and Drinks",
                        handlefunction: () => {
                            console.log('Selected Food and Drinks')
                        },
                        group: "couponsproducttype"
                    },
                    {
                        id: 3,
                        icon: <MdShoppingBag className='custom_radio_icon custom_radio_icon_couponsproducttype' id='' size={13} />,
                        name: "Fashion",
                        handlefunction: () => {
                            console.log('Selected Fashion')
                        },
                        group: "couponsproducttype"
                    },
                    {
                        id: 4,
                        icon: <MdShoppingBag className='custom_radio_icon custom_radio_icon_couponsproducttype' id='' size={13} />,
                        name: "Tech Gadgets",
                        handlefunction: () => {
                            console.log('Selected Tech Gadgets')
                        },
                        group: "couponsproducttype"
                    },
                    {
                        id: 5,
                        icon: <MdShoppingBag className='custom_radio_icon custom_radio_icon_couponsproducttype' id='' size={13} />,
                        name: "Foot Wears",
                        handlefunction: () => {
                            console.log('Selected Foot Wears')
                        },
                        group: "couponsproducttype"
                    },
                    {
                        id: 6,
                        icon: <MdShoppingBag className='custom_radio_icon custom_radio_icon_couponsproducttype' id='' size={13} />,
                        name: "Bags",
                        handlefunction: () => {
                            console.log('Selected Bags')
                        },
                        group: "couponsproducttype"
                    }
                ]
            }
        ]
    }
}