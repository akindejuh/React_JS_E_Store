import React from 'react';
import './NotificationAlert.scss';
import NotificationsIconsData from '../../Data/NotificationsIconsData';

const ProductAlert = ({ notification }) => {
    const link_Text_Color = (number) => {
        switch (number) {
            case 0:
                return 'rgb(220, 0, 0)';
            case 1:
                return 'rgb(0, 140, 0)';
            case 2:
                return 'rgb(74, 74, 173)';
            default:
                return 'rgb(74, 74, 173)';
        }
    }

    const background_Icon_Color = (number) => {
        switch (number) {
            case 0:
                return 'rgba(220, 0, 0, 0.15)';
            case 1:
                return 'rgba(0, 160, 0, 0.15)';
            case 2:
                return 'rgba(74, 74, 173, 0.15)';
            default:
                return 'rgba(74, 74, 173, 0.15)';
        }
    }
    return (
        <div className='notificationalert_main'>
            <div className='not_alert_1'>
                <div style={{ backgroundColor: background_Icon_Color(notification.color) }} className='not_a_icon'>{NotificationsIconsData({ notificationIcon: notification.icon, colorNumber: notification.color })}</div>
            </div>
            <div className='not_alert_2'>
                <h1 className='not_a_heading' style={{ color: link_Text_Color(notification.color) }}>{notification.heading}</h1>
                <h6 className='not_a_body'>{notification.body}</h6>
                <p className='not_a_time'>{notification.time}</p>
                {notification.action ? <a href={notification.action} target='_blank' rel='noreferrer' style={{ backgroundColor: link_Text_Color(notification.color) }} className='not_a_link'>{notification.actionText}</a> : null}
            </div>
        </div>
    )
}

export default ProductAlert;