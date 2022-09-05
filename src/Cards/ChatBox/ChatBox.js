import React from 'react';
import './ChatBox.scss';

const ChatBox = ({ message, isUser }) => {
    return (
        <div className='chatbox_main' style={isUser ?
            {
                justifyContent: 'flex-end'
            } :
            {
                justifyContent: 'flex-start'
            }}>
            <div className='chatbox_inner_main' style={isUser ?
                {
                    backgroundColor: 'rgb(74, 74, 173)',
                    color: 'white'
                } :
                {
                    backgroundColor: 'rgba(74, 74, 173, 0.2)',
                    color: 'black'
                }}>
                {message}
            </div>
        </div>
    )
}

export default ChatBox
