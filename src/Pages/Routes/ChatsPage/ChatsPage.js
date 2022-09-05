import React from 'react';
import './ChatsPage.scss';
import ChatItem from '../../../Cards/ChatItem/ChatItem';
import EmptyNot from '../../../Cards/EmptyNot/EmptyNot';
import { MdOutlineReport } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { scrollpageon, showfooter } from '../../../Redux/Actions/UtilsActions';
import { app_name } from '../../../Configs/AppName';

// temp data
import ChatsData from '../../../Temp/ChatsData';

const ChatsPage = () => {
    const dispatch = useDispatch();
    dispatch(scrollpageon());
    dispatch(showfooter());
    document.title = `${app_name()} | Chats`;
    const screen_width = useSelector(state => state.ScreenWidth);

    const FillEmptySpaces = () => {
        if (ChatsData.length < (screen_width < 644 ? 8 : 16)) {
            const spaceleft = (screen_width < 644 ? 8 : 16) - ChatsData.length;
            return [...Array(spaceleft)].map((e, i) => <EmptyNot key={i} />)
        }
    }

    return (
        <div className='chats_main'>
            <div className='chats_m_grid'>
                <div className='chat_warning'>
                    <div className='chat_w_icon'>
                        <MdOutlineReport size={35} color={'rgb(74, 74, 173)'} />
                    </div>
                    <div className='chat_w_wrapper'>
                        <p className='chat_w_text'>Do not share personal information with sellers. Only use chats to ask about products. Please report any suspicious activity.</p>
                        <a href='www.google.com' rel='noreferrer' target='_blank' className='chat_w_btn'>Learn More</a>
                    </div>
                </div>
                {ChatsData.map((item) => <ChatItem chat={item} key={item.id} />)}
                {FillEmptySpaces()}
            </div>
        </div>
    )
}

export default ChatsPage;