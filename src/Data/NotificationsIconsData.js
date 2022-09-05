import { MdStore, MdFoodBank, MdPayment } from 'react-icons/md';

const NotificationsIconsData = ({ notificationIcon, colorNumber }) => {

    const notColor = ({ number }) => {
        switch (number) {
            case 0:
                return 'rgb(220, 0, 0)';
            case 1:
                return 'rgb(0, 160, 0)';
            case 2:
                return 'rgb(74, 74, 173)';
            default:
                return 'rgb(74, 74, 173)';
        }
    }

    switch (notificationIcon) {
        case 1:
            return <MdStore size={35} color={notColor({ number: colorNumber })} />;
        case 2:
            return <MdPayment size={35} color={notColor({ number: colorNumber })} />;
        case 3:
            return <MdFoodBank size={35} color={notColor({ number: colorNumber })} />;
        case 4:
            return <MdStore size={35} color={notColor({ number: colorNumber })} />;
        case 5:
            return <MdStore size={35} color={notColor({ number: colorNumber })} />;
        case 6:
            return <MdFoodBank size={35} color={notColor({ number: colorNumber })} />;
        case 7:
            return <MdPayment size={35} color={notColor({ number: colorNumber })} />;
        case 8:
            return <MdPayment size={35} color={notColor({ number: colorNumber })} />;
        case 9:
            return <MdStore size={35} color={notColor({ number: colorNumber })} />;
        case 10:
            return <MdFoodBank size={35} color={notColor({ number: colorNumber })} />
        default:
            break;
    }
}

export default NotificationsIconsData;