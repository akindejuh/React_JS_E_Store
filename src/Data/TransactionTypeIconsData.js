import { MdFoodBank, MdPayment, MdStore } from 'react-icons/md';
import { GiTruck } from 'react-icons/gi';


const TransactionTypeIconsData = (transactiontype) => {
    const iconsize = 35;

    switch (transactiontype.transactiontype) {
        case "Bank":
            return <MdFoodBank size={iconsize} color={'rgb(230, 0, 0)'} />;
        case "Wallet":
            return <MdPayment size={iconsize} color={'rgb(0, 160, 0)'} />;
        case "VCard":
            return <MdPayment size={iconsize} color={'rgb(230, 0, 0)'} />;
        case "Store":
            return <MdStore size={iconsize} color={'rgb(230, 0, 0)'} />;
        case "Courier":
            return <MdFoodBank size={iconsize} color={'rgb(230, 0, 0)'} />
        default:
            return <GiTruck size={iconsize} color={'rgb(230, 0, 0)'} />
    }
}

export default TransactionTypeIconsData;