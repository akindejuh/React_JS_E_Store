import React from 'react';
import './Footer.scss';
import { FooterData, SocialLinks } from '../../Data/FooterData';
import { useSelector } from 'react-redux/es/exports';
import { app_name } from '../../Configs/AppName';

const Footer = () => {
    const screen_width = useSelector(state => state.ScreenWidth);

    return (
        <div className='footer_main'>
            <div className='f_m_1'>
                {FooterData.map((item) =>
                    <div className='f_m_w'>
                        <h1>{item.name.toUpperCase()}</h1>
                        {item.data.map((link) =>
                            <a href={link.url} target='_blank' rel='noreferrer'>{link.link}</a>
                        )}
                    </div>
                )}
            </div>
            <div className="f_m_2">
                <div className='f_m_2_social_links'>
                    {SocialLinks({ iconsize: screen_width < 644 ? 20 : 32 }).map((item) =>
                        <a href={item.link} target='_blank' rel='noreferrer' key={item.id} className='f_m_2_social_link'>
                            {item.icon}
                        </a>
                    )}
                </div>
                <p><span>2022</span> &copy; {app_name()} Technologies.</p>
            </div>
        </div>
    )
}

export default Footer;