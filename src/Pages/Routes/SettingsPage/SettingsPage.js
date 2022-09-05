import React, { useState } from 'react';
import './SettingsPage.scss';
import { useDispatch, useSelector } from 'react-redux';
import { scrollpageon, showfooter } from '../../../Redux/Actions/UtilsActions';
import { MdArrowBackIos, MdLock, MdOutlineImage, MdSettings } from 'react-icons/md';
import { FaBell, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { promotionsData, SocialLinks } from '../../../Data/SettingsData';
import { app_name } from '../../../Configs/AppName';

const SettingsPage = () => {
    const dispatch = useDispatch();
    dispatch(scrollpageon());
    dispatch(showfooter());
    document.title = `${app_name()} | Settings`;
    const screen_width = useSelector(state => state.ScreenWidth);
    const navigate = useNavigate();

    const [previewImage, setPreviewImage] = useState();
    const handlePreviewImageFile = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewImage(reader.result);
        };
    };

    return (
        <div className='settingspage_main'>
            <div className='sp_m'>
                <div className='sp_m_1'>
                    <div className='sp_m_1_h'>
                        <FaUser color='rgb(74, 74, 173)' size={21} />
                        <h2>Your Account</h2>
                    </div>
                    <div className='sp_m_1_dp'>
                        {previewImage && <img src={previewImage} alt={'previewImage'} />}
                        {!previewImage &&
                            <div className='sp_m_1_d_ph'>
                                <FaUser size={100} color={'rgb(74, 74, 173)'} />
                            </div>
                        }
                    </div>
                    <label className='sp_m_1_fc'>
                        <input
                            type={'file'}
                            required
                            name={'PreviewImage'}
                            accept={'.png,.jpg,.jpeg'}
                            onChange={handlePreviewImageFile}
                        />
                        <MdOutlineImage size={screen_width < 900 ? 18 : 20} color={'white'} />
                        <p>Select a Picture</p>
                    </label>
                    <p className='sp_m_1_af'>Supported formats are <span>jpg, png, jpeg</span>.</p>
                </div>
                <div className='sp_m_2'>
                    <div className='sp_m_2_h'>
                        <MdSettings color='rgb(74, 74, 173)' size={21} />
                        <h2>Your Details</h2>
                    </div>
                    <div className='sp_m_2_links' onClick={() => navigate('/kyc')}>
                        <p>Complete your KYC</p>
                        <MdArrowBackIos size={22} color={'rgb(74, 74, 173)'} style={{ transform: 'rotate(180deg)' }} />
                    </div>
                    <div className='sp_m_2_links'>
                        <p>Change Email</p>
                        <MdArrowBackIos size={22} color={'rgb(74, 74, 173)'} style={{ transform: 'rotate(180deg)' }} />
                    </div>
                    <div className='sp_m_2_links'>
                        <p>Password</p>
                        <MdArrowBackIos size={22} color={'rgb(74, 74, 173)'} style={{ transform: 'rotate(180deg)' }} />
                    </div>
                    {screen_width >= 900 && <button className='sp_m_3_btn'>
                        <p>Logout</p>
                        <MdLock color='white' size={22} />
                    </button>}
                    {screen_width >= 900 && <p className='sp_m_3_v'>Version 1.21.1</p>}
                    {screen_width >= 900 && <div className='sp_m_3_social_links'>
                        {SocialLinks({ iconsize: screen_width < 644 ? 20 : 32 }).map(item =>
                            <a href={item.link} target='_blank' rel='noreferrer' key={item.id} className='sp_m_3_social_link'>
                                {item.icon}
                            </a>
                        )}
                    </div>}
                </div>
                <div className='sp_m_3'>
                    <div className='sp_m_3_h'>
                        <FaBell size={21} color={'rgb(74, 74, 173)'} />
                        <h2>Promotions</h2>
                    </div>
                    <div className='sp_m_3_l_w'>
                        {promotionsData.map((item) =>
                            <div key={item.id} className='sp_m_3_links'>
                                <p>{item.name}</p>
                                <MdArrowBackIos
                                    size={22}
                                    color={'rgb(74, 74, 173)'}
                                    style={{ transform: 'rotate(180deg)' }} />
                            </div>
                        )}
                    </div>
                    {screen_width < 900 && <button className='sp_m_3_btn'>
                        <p>Logout</p>
                        <MdLock color='white' size={22} />
                    </button>}
                    {screen_width < 900 && <p className='sp_m_3_v'>Version 1.21.1</p>}
                    {screen_width < 900 && <div className='sp_m_3_social_links'>
                        {SocialLinks({ iconsize: screen_width < 644 ? 20 : 32 }).map(item =>
                            <a href={item.link} target='_blank' rel='noreferrer' key={item.id} className='sp_m_3_social_link'>
                                {item.icon}
                            </a>
                        )}
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default SettingsPage;
