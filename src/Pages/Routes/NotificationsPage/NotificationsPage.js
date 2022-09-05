import React from 'react';
import './NotificationsPage.scss';
import { useDispatch, useSelector } from 'react-redux';
import { scrollpageon, showfooter } from '../../../Redux/Actions/UtilsActions';
import EmptyNot from '../../../Cards/EmptyNot/EmptyNot';
import NotificationAlert from '../../../Cards/NotificationAlert/NotificationAlert';
import { app_name } from '../../../Configs/AppName';

// temp data
import NewNotificationsData from '../../../Temp/NewNotificationsData';

const NotificationsPage = () => {
    const dispatch = useDispatch();
    dispatch(scrollpageon());
    dispatch(showfooter());
    document.title = `${app_name()} | Notifications`;
    const screen_width = useSelector(state => state.ScreenWidth);

    const FillEmptySpaces = () => {
        if (NewNotificationsData.length < (screen_width < 644 ? 8 : 16)) {
            const spaceleft = (screen_width < 644 ? 8 : 16) - NewNotificationsData.length;
            return [...Array(spaceleft)].map((e, i) => <EmptyNot key={i} />)
        }
    }

    return (
        <div className='notifications_main'>
            <div className='not_m_grid'>
                {NewNotificationsData.map((item) => <NotificationAlert key={item.id} notification={item} />)}
                {FillEmptySpaces()}
            </div>
        </div>
    )
}

export default NotificationsPage;