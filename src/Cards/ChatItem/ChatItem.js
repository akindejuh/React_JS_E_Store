import React from 'react';
import './ChatItem.scss';
import { useNavigate } from 'react-router-dom';

import pp from '../../Images/Temp/profilepic.jpg'

const ChatItem = ({ chat }) => {
    const navigate = useNavigate();

    return (
        <div className='chatitem_main'>
            <div className='chat_item_1'>
                <div className='chat_i_dp'>
                    <img src={pp} alt='chat' />
                    {/* <img src={chat.image} alt='chat' /> */}
                </div>
            </div>
            <div className='chat_item_2'>
                <h1 className='chat_i_name'>{(chat.name).length <= 24 ? chat.name : `${(chat.name).slice(0, 24)}...`}</h1>
                <h6 className='chat_i_chat'>{(chat.chats[chat.chats.length - 1]).length <= 70 ? chat.chats[chat.chats.length - 1] : `${(chat.chats[chat.chats.length - 1]).slice(0, 70)}...`}</h6>
                <p className='chat_i_la'>{chat.lastactive}</p>
                <button className='chat_i_btn' onClick={() => navigate(`/chats/${chat.id}`)}>View Chat</button>
            </div>
        </div>
    )
}

export default ChatItem;