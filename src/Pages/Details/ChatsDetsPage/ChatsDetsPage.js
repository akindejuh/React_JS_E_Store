import React, { useState, useEffect } from 'react';
import './ChatsDetsPage.scss';
import { useParams, useNavigate } from 'react-router-dom';
import ChatBox from '../../../Cards/ChatBox/ChatBox';
import { useDispatch, useSelector } from 'react-redux';
import { hidefooter, scrollpageoff } from '../../../Redux/Actions/UtilsActions';
import { MdOutlineImage, MdOutlineSend, MdArrowBackIos } from 'react-icons/md';

// temp data
import ChatsDetsData from '../../../Temp/ChatsDetsData';
import ChatsData from '../../../Temp/ChatsData';
import testImage from '../../../Images/Home/image1.jpg';

const ChatsDetsPage = () => {
    const id = useParams('id').id;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    dispatch(scrollpageoff());
    dispatch(hidefooter());
    const screen_width = useSelector(state => state.ScreenWidth);

    const [message, setMessage] = useState('');
    const handleSendMessage = (e) => {
        e.preventDefault();
        setMessage('');
    }

    useEffect(() => {
        // window.scrollTo(0, document.body.scrollHeight);
        const chats_w = document.getElementById('chats_d_m_message');
        chats_w.scrollTo(0, chats_w.scrollHeight);
    })

    return (
        <div className='chatsdetspage_main'>
            <div className='cdp_m_h'>
                <div className='cdp_m_h_a' onClick={() => navigate(-1)}>
                    <MdArrowBackIos color='rgb(74, 74, 173)' size={25} />
                </div>
                <h3>{ChatsData[id - 1].name.length > (screen_width < 830 ? 30 : 70) ? `${ChatsData[id - 1].name.slice(0, (screen_width < 830 ? 30 : 70))}...` : ChatsData[id - 1].name}</h3>
            </div>
            <div className='chats_d_m_message' id='chats_d_m_message'>
                {ChatsDetsData.map((item) =>
                    item.message.split('|')[1].trim().slice(0, 2) === '--' ?
                        <img className={item.message.split('|')[0].trim() === 'u' ? 'cdmp_img' : ''}
                            src={testImage}
                            alt={item.message.split('|')[1].trim().slice(2)}
                        /> :
                        <ChatBox
                            message={item.message.split('|')[1]}
                            isUser={item.message.split('|')[0].trim() === 'u' ? true : false}
                        />
                )}
            </div>
            <form className='chats_d_m_input'>
                <label className='file_upload'>
                    <input
                        type={'file'}
                        className='file_upload_icon'
                        multiple={false}
                        accept=".png,.jpg,.jpeg"
                    />
                    <MdOutlineImage size={30} color='white' />
                </label>
                <input
                    type={'text'}
                    className='chats_txt_input'
                    placeholder='Enter a message...'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button onClick={handleSendMessage} className='chats_btn_send' type='submit'>
                    <MdOutlineSend color='white' size={30} />
                </button>
            </form>
        </div>
    )
}

export default ChatsDetsPage;
