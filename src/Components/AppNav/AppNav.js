import React, { useState, useEffect } from 'react';
import './AppNav.scss';
import { MdMenu, MdOutlineNotifications, MdOutlineShoppingCart, MdOutlineChat, MdClose, MdArrowBackIos, MdOutlineSettings, MdOutlineShop, MdOutlinePayment, MdOutlineMail, MdOutlineLogin, MdOutlinePayments } from 'react-icons/md';
import { FiSearch } from 'react-icons/fi';
import { FaFilter } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import appiconblue from '../../Images/Icons/appicon-blue.png';
import appiconwhite from '../../Images/Icons/appicon.png';
import CustomRadio from '../CustomRadio/CustomRadio';
import { SearchData, FilterData } from '../../Data/AppNavFilterSearchData';
import { logout } from '../../Redux/Actions/AuthActions';
import { auth } from '../../Configs/Firebase';
import { app_name } from '../../Configs/AppName';

// temp
import pp from '../../Images/Temp/profilepic.jpg';

const AppNav = ({ showSideBar, setShowSideBar, showUserBar, setShowUserBar, showFilterBar, setShowFilterBar }) => {
    const navigate = useNavigate();
    const path = useLocation();
    const [search, setSearch] = useState('');
    const [searchPH, setSearchPH] = useState('');
    const [showSearchBar, setShowSearchBar] = useState(false);
    const [showFilterBtn, setShowFilterBtn] = useState(false);
    const [filterDown, setFilterDown] = useState(false);
    const [filterInfo, setFilterInfo] = useState();
    const dispatch = useDispatch();
    const screen_width = useSelector(state => state.ScreenWidth);
    const username = auth.currentUser?.displayName || 'User';
    const auth_state = useSelector(state => state.Auth);

    const handleSearch = (e) => {
        e.preventDefault();
        switch (path.pathname) {
            case "/stores":
                console.log(search)
                break;
            case "/carts":
                console.log(search)
                break;
            default:
                break;
        }
    }

    const handleLogout = () => {
        if (auth_state !== null || undefined) {
            auth.signOut();
            dispatch(logout());
        }
        navigate('/login');

    }

    useEffect(() => {
        setFilterDown(false);
        setShowUserBar(false);
        switch (path.pathname) {
            case "/couriers":
                setShowSearchBar(true);
                setShowFilterBar(true);
                setShowFilterBtn(true);
                break;
            case "/carts":
                setShowSearchBar(true);
                setShowFilterBar(true);
                setShowFilterBtn(true);
                break;
            case "/stores":
                setShowSearchBar(true);
                setShowFilterBar(false);
                setShowFilterBtn(false);
                break;
            case "/stores/category":
                setShowSearchBar(true);
                setShowFilterBar(false);
                setShowFilterBtn(false);
                break;
            case "/coupons":
                setShowSearchBar(false);
                setShowFilterBar(true);
                setShowFilterBtn(true);
                break;
            case "/stores/limiteddeals":
                setShowSearchBar(true);
                setShowFilterBar(false);
                setShowFilterBtn(false);
                break;
            case "/stores/bestselling":
                setShowSearchBar(true);
                setShowFilterBar(false);
                setShowFilterBtn(false);
                break;
            default:
                setShowSearchBar(false);
                setShowFilterBar(false);
                setShowFilterBtn(false);
                break;
        }
        setSearchPH(SearchData({ pathname: path.pathname }));
        setFilterInfo(FilterData({ pathname: path.pathname }))
    }, [path, setShowUserBar, setShowFilterBar])

    const shouldFilterPushDown = () => {
        switch (path.pathname) {
            case "/couriers":
                return 'app_nav_user_bar_100';
            case "/carts":
                return 'app_nav_user_bar_100';
            case "/stores":
                return 'app_nav_user_bar_100';
            case "/coupons":
                return 'app_nav_user_bar_100';
            case "/stores/limiteddeals":
                return 'app_nav_user_bar_100';
            case "/stores/bestselling":
                return 'app_nav_user_bar_100';
            default:
                return 'app_nav_user_bar';
        }
    }

    if (screen_width > 1080) {
        return (
            <div onClick={() => showSideBar ? setShowSideBar(false) : null}
                className='app_nav_container' id={showSideBar ? 'app_nav_container' : ''}>
                {showFilterBar &&
                    <div className='filter_container' id={filterDown ? 'filter_container' : ''}>
                        <div className='filterbar_header'>
                            <h3>{filterInfo?.header}</h3>
                            <div className='filterbar_arrow' onClick={() => setFilterDown(!filterDown)}>
                                <MdClose color='white' size={20} />
                            </div>
                        </div>
                        <div className='filterbar_body'>
                            {filterInfo?.questions.map((item) =>
                                <div className='fbb_container' key={item.id}>
                                    <p>{item.name}</p>
                                    <div className='fbb_data'>
                                        {item.data.map((result) => <CustomRadio customradio={result} key={result.id} />)}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                }
                <div className='app_nav_user_bar' id={showUserBar ? 'app_nav_user_bar' : ''}>
                    <div className='a_n_u_b_w' onClick={() => navigate('/notifications')}>
                        <MdOutlineNotifications size={22} color={'rgb(74, 74, 173)'} />
                        <h4>Notifications</h4>
                        <p className='a_n_u_b_w_not_counter'>12</p>
                    </div>
                    <div className='a_n_u_b_w' onClick={() => navigate('/settings')}>
                        <MdOutlineSettings size={22} color={'rgb(74, 74, 173)'} />
                        <h4>Settings</h4>
                        <p className='a_n_u_b_w_not_counter'>1</p>
                    </div>
                    <div className='a_n_u_b_w' onClick={() => navigate('/carts')}>
                        <MdOutlineShoppingCart size={22} color={'rgb(74, 74, 173)'} />
                        <h4>Carts</h4>
                        <p className='a_n_u_b_w_not_counter'>8</p>
                    </div>
                    <div className='a_n_u_b_w' onClick={() => navigate('/checkout')}>
                        <MdOutlineShoppingCart size={22} color={'rgb(74, 74, 173)'} />
                        <h4>Checkout</h4>
                        <p className='a_n_u_b_w_not_counter'>8</p>
                    </div>
                    <div className='a_n_u_b_w' onClick={() => navigate('/wishlist')}>
                        <MdOutlineMail size={22} color={'rgb(74, 74, 173)'} />
                        <h4>WishList</h4>
                        <p className='a_n_u_b_w_not_counter'>4</p>
                    </div>
                    <div className='a_n_u_b_w' onClick={() => navigate('/orders')}>
                        <MdOutlineShop size={22} color={'rgb(74, 74, 173)'} />
                        <h4>My Orders</h4>
                        <p className='a_n_u_b_w_not_counter'>5</p>
                    </div>
                    <div className='a_n_u_b_w' onClick={() => navigate('/parcels')}>
                        <MdOutlineShop size={22} color={'rgb(74, 74, 173)'} />
                        <h4>My Parcels</h4>
                        <p className='a_n_u_b_w_not_counter'>9</p>
                    </div>
                    <div className='a_n_u_b_w' onClick={() => navigate('/parcels/send')}>
                        <MdOutlineShop size={22} color={'rgb(74, 74, 173)'} />
                        <h4>Send Parcel</h4>
                    </div>
                    <div className='a_n_u_b_w' onClick={() => navigate('/coupons')}>
                        <MdOutlinePayment size={22} color={'rgb(74, 74, 173)'} />
                        <h4>Coupons</h4>
                        <p className='a_n_u_b_w_not_counter'>13</p>
                    </div>
                    <div className='a_n_u_b_w' onClick={() => navigate('/chats')}>
                        <MdOutlineChat size={22} color={'rgb(74, 74, 173)'} />
                        <h4>Chats</h4>
                        <p className='a_n_u_b_w_not_counter'>299</p>
                    </div>
                    <div className='a_n_u_b_w' onClick={() => navigate('/transactions')}>
                        <MdOutlinePayments size={22} color={'rgb(74, 74, 173)'} />
                        <h4>Transactions</h4>
                        <p className='a_n_u_b_w_not_counter'>43</p>
                    </div>
                    <div className='a_n_u_b_w' onClick={handleLogout}>
                        <MdOutlineLogin size={22} color={'rgb(74, 74, 173)'} />
                        <h4>Logout</h4>
                    </div>
                </div>
                <img src={appiconblue} alt={`${app_name()}Icon`} className='app_nav_mon_icon' />
                {showSearchBar &&
                    <form className='app_nav_search' onSubmit={handleSearch}>
                        <div className='app_nav_s_icon'><FiSearch color='rgb(74, 74, 74)' size={17} /></div>
                        <input
                            type={'text'}
                            placeholder={searchPH}
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <button type='submit'>Search</button>
                    </form>
                }
                {!showSearchBar && <h2 style={{ color: 'rgb(74, 74, 173)' }}>{app_name()}</h2>}
                <div className='app_nav_nav'>
                    {showFilterBtn &&
                        <button className='app_nav_filter' onClick={() => {
                            setFilterDown(!filterDown);
                            if (showUserBar) {
                                setShowUserBar(false);
                            } else {
                                return null;
                            }
                        }}>
                            <FaFilter color='rgb(74, 74, 173)' /> <p>Filter</p>
                        </button>
                    }
                    <div className='app_nav_link' onClick={() => navigate('/notifications')}>
                        <div className='app_nav_not'>12</div>
                        <MdOutlineNotifications size={30} color={'rgb(74, 74, 173)'} />
                    </div>
                    <div className='app_nav_link' onClick={() => navigate('/carts')}>
                        <div className='app_nav_not'>8</div>
                        <MdOutlineShoppingCart size={27} color={'rgb(74, 74, 173)'} />
                    </div>
                    <div className='app_nav_link' onClick={() => navigate('/chats')}>
                        <div className='app_nav_not'>299</div>
                        <MdOutlineChat size={26} color={'rgb(74, 74, 173)'} />
                    </div>
                    <div className='app_nav_o_i' onClick={() => {
                        setShowUserBar(!showUserBar);
                        if (filterDown) {
                            setFilterDown(false)
                        } else {
                            return null
                        };
                    }}>
                        <img src={pp} alt={'user'} />
                        <h2>{username.length > 15 ? `${username.slice(0, 15)}...` : username}</h2>
                        <MdArrowBackIos className='app_nav_o_i_a' size={22} />
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div onClick={() => showSideBar ? setShowSideBar(false) : null}
                className='app_nav_m_container'
                id={showSideBar ? 'app_nav_m_container' : ''}>
                {showFilterBar &&
                    <div className='filter_container' id={filterDown ? 'filter_container' : ''}>
                        <div className='filterbar_header'>
                            <h3>{filterInfo?.header}</h3>
                            <div className='filterbar_arrow' onClick={() => setFilterDown(!filterDown)}>
                                <MdClose color='white' size={20} />
                            </div>
                        </div>
                        <div className='filterbar_body'>
                            {filterInfo?.questions.map((item) =>
                                <div className='fbb_container' key={item.id}>
                                    <p>{item.name}</p>
                                    <div className='fbb_data'>
                                        {item.data.map((result) => <CustomRadio customradio={result} key={result.id} />)}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                }
                <div className='app_nav_user_bar' id={showUserBar ? `${shouldFilterPushDown()}` : ''}>
                    <div className='a_n_u_b_w' onClick={() => navigate('/notifications')}>
                        <MdOutlineNotifications size={22} color={'rgb(74, 74, 173)'} />
                        <h4>Notifications</h4>
                        <p className='a_n_u_b_w_not_counter'>12</p>
                    </div>
                    <div className='a_n_u_b_w' onClick={() => navigate('/settings')}>
                        <MdOutlineSettings size={22} color={'rgb(74, 74, 173)'} />
                        <h4>Settings</h4>
                        <p className='a_n_u_b_w_not_counter'>1</p>
                    </div>
                    <div className='a_n_u_b_w' onClick={() => navigate('/carts')}>
                        <MdOutlineShoppingCart size={22} color={'rgb(74, 74, 173)'} />
                        <h4>Carts</h4>
                        <p className='a_n_u_b_w_not_counter'>8</p>
                    </div>
                    <div className='a_n_u_b_w' onClick={() => navigate('/checkout')}>
                        <MdOutlineShoppingCart size={22} color={'rgb(74, 74, 173)'} />
                        <h4>Checkout</h4>
                        <p className='a_n_u_b_w_not_counter'>8</p>
                    </div>
                    <div className='a_n_u_b_w' onClick={() => navigate('/wishlist')}>
                        <MdOutlineMail size={22} color={'rgb(74, 74, 173)'} />
                        <h4>WishList</h4>
                        <p className='a_n_u_b_w_not_counter'>4</p>
                    </div>
                    <div className='a_n_u_b_w' onClick={() => navigate('/orders')}>
                        <MdOutlineShop size={22} color={'rgb(74, 74, 173)'} />
                        <h4>My Orders</h4>
                        <p className='a_n_u_b_w_not_counter'>5</p>
                    </div>
                    <div className='a_n_u_b_w' onClick={() => navigate('/parcels')}>
                        <MdOutlineShop size={22} color={'rgb(74, 74, 173)'} />
                        <h4>My Parcels</h4>
                        <p className='a_n_u_b_w_not_counter'>9</p>
                    </div>
                    <div className='a_n_u_b_w' onClick={() => navigate('/parcels/send')}>
                        <MdOutlineShop size={22} color={'rgb(74, 74, 173)'} />
                        <h4>Send Parcel</h4>
                    </div>
                    <div className='a_n_u_b_w' onClick={() => navigate('/coupons')}>
                        <MdOutlinePayment size={22} color={'rgb(74, 74, 173)'} />
                        <h4>Coupons</h4>
                        <p className='a_n_u_b_w_not_counter'>13</p>
                    </div>
                    <div className='a_n_u_b_w' onClick={() => navigate('/chats')}>
                        <MdOutlineChat size={22} color={'rgb(74, 74, 173)'} />
                        <h4>Chats</h4>
                        <p className='a_n_u_b_w_not_counter'>299</p>
                    </div>
                    <div className='a_n_u_b_w' onClick={() => navigate('/transactions')}>
                        <MdOutlinePayments size={22} color={'rgb(74, 74, 173)'} />
                        <h4>Transactions</h4>
                        <p className='a_n_u_b_w_not_counter'>43</p>
                    </div>
                    <div className='a_n_u_b_w' onClick={handleLogout}>
                        <MdOutlineLogin size={22} color={'rgb(74, 74, 173)'} />
                        <h4>Logout</h4>
                    </div>
                </div>
                <div className='app_nav_m_c_1'>
                    <img src={appiconwhite} alt={`${app_name()}Icon`} onClick={() => {
                        setShowSideBar(!showSideBar);
                        if (showUserBar) {
                            setShowUserBar(false);
                        }
                        if (showFilterBar) {
                            setShowFilterBar(false);
                        }
                    }} className='app_nav_mon_icon' />
                    <div className='app_nav_o_i' onClick={() => {
                        setShowUserBar(!showUserBar);
                        if (filterDown) {
                            setFilterDown(false)
                        };
                    }}>
                        <img src={pp} alt={'user'} />
                        <span className='app_nav_o_i_h2'>
                            {username.length > 15 ? `${username.slice(0, 15)}...` : username}
                        </span>
                        <MdArrowBackIos className='app_nav_o_i_a' size={22} />
                    </div>
                    <div className='app_nav_menu' id={showSideBar ? 'app_nav_menu' : ''}
                        onClick={() => {
                            setShowSideBar(!showSideBar);
                            if (showUserBar) {
                                setShowUserBar(false);
                            }
                            if (showFilterBar) {
                                setShowFilterBar(false);
                            }
                        }}>
                        <MdMenu color={'white'} size={30} />
                    </div>
                </div>
                <div className='app_nav_m_c_2'>
                    {showFilterBtn &&
                        <button className='app_nav_filter'
                            onClick={() => {
                                setFilterDown(!filterDown);
                                if (showUserBar) {
                                    setShowUserBar(false);
                                } else {
                                    return null;
                                }
                            }}>
                            <FaFilter color='rgb(74, 74, 173)' />
                        </button>
                    }
                    {showFilterBtn && !showSearchBar &&
                        <h2 style={{
                            color: 'white',
                            fontSize: '19px',
                            position: 'absolute',
                            width: '100%',
                            textAlign: 'center'
                        }}>{app_name()}</h2>
                    }
                    {showSearchBar &&
                        <form className='app_nav_search' onSubmit={handleSearch}>
                            <input
                                type={'text'}
                                placeholder={searchPH}
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <button type='submit'><FiSearch size={18} color={'rgb(74, 74, 74)'} /></button>
                        </form>
                    }
                </div>
            </div>
        )
    }
}

export default AppNav;