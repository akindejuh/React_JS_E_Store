import React from 'react';
import './SideNav.scss';
import NavListData from '../../Data/NavListData';
import NavLinks from '../NavLinks/NavLinks';
import { MdClose, MdMenu } from 'react-icons/md';
import { app_name } from '../../Configs/AppName';

const SideNav = ({ showSideBar, setShowSideBar, showUserBar, setShowUserBar, showFilterBar, setShowFilterBar }) => {
    return (
        <div className='sidenav_main' id={showSideBar ? 'sidenav_main' : ''}
            onClick={() => {
                if (showUserBar) {
                    setShowUserBar(false);
                }
                if (showFilterBar) {
                    setShowFilterBar(false);
                }
            }}>
            <div className='sidenav_nav_icon'>
                <h2>{app_name()}</h2>
                <div className='snv_icon' onClick={() => setShowSideBar(!showSideBar)}>
                    {!showSideBar ? <MdMenu size={30} /> : <MdClose size={30} />}
                </div>
            </div>
            {NavListData({ iconsize: 28, iconcolor: 'rgb(74, 74, 173)' }).map((item) =>
                <NavLinks
                    navdata={item}
                    showSideBar={showSideBar}
                    setShowSideBar={setShowSideBar}
                />
            )}
        </div>
    )
}

export default SideNav;
