import React, { useState, useEffect } from 'react';
import './NavLinks.scss';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../Redux/Actions/AuthActions';
import { auth } from '../../Configs/Firebase';
import { useSelector } from 'react-redux';

const NavLinks = ({ navdata, showSideBar, setShowSideBar }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const path = useLocation();
    const [routeNumber, setRouteNumber] = useState(1);
    const auth_state = useSelector(state => state.Auth);

    const handleNav = () => {
        if (navdata.nav === "/login") {
            if (auth_state !== null || undefined) {
                auth.signOut();
                dispatch(logout());
            }
            navigate('/login');
        } else {
            navigate(navdata.nav);
        }
        setShowSideBar(false);
    }

    useEffect(() => {
        switch (path.pathname) {
            case "/":
                setRouteNumber(1);
                break;
            case "*":
                setRouteNumber(1);
                break;
            case "/notifications":
                setRouteNumber(1);
                break;
            case "/chats":
                setRouteNumber(1);
                break;
            case "/settings":
                setRouteNumber(1);
                break;
            case "/kyc":
                setRouteNumber(1);
                break;
            case "/kyc/verify":
                setRouteNumber(1);
                break;
            case "/kyc/final":
                setRouteNumber(1);
                break;
            case "/stores":
                setRouteNumber(2);
                break;
            case "/stores/bestselling":
                setRouteNumber(2);
                break;
            case "/stores/limiteddeals":
                setRouteNumber(2);
                break;
            case "/carts":
                setRouteNumber(2);
                break;
            case "/orders":
                setRouteNumber(2);
                break;
            case "/parcels":
                setRouteNumber(2);
                break;
            case "/parcels/send":
                setRouteNumber(2);
                break;
            case "/wishlist":
                setRouteNumber(2);
                break;
            case "/coupons":
                setRouteNumber(2);
                break;
            case "/wallet":
                setRouteNumber(3);
                break;
            case "/transactions":
                setRouteNumber(3);
                break;
            case "/checkout":
                setRouteNumber(3);
                break;
            case "/couriers":
                setRouteNumber(4);
                break;
            case "/vcard":
                setRouteNumber(5);
                break;
            case "/login":
                setRouteNumber(6);
                break;
            case "/signup":
                setRouteNumber(6);
                break;
            default:
                setRouteNumber(1);
                break;
        }

        if (path.pathname.includes('wallet')) {
            setRouteNumber(3);
        } else if (path.pathname.includes('stores')) {
            setRouteNumber(2);
        } else if (path.pathname.includes('couriers')) {
            setRouteNumber(4);
        } else if (path.pathname.includes('products')) {
            setRouteNumber(2);
        } else if (path.pathname.includes('chats')) {
            setRouteNumber(1);
        }
    }, [path])

    return (
        <div className='navlinks_main' onClick={handleNav}>
            <div className="navlinks_wrapper">
                <div className='navlinks_large'>
                    <div className='nvlk_page_i_large'
                        id={routeNumber === navdata.id ? '' : 'nvlk_page_i_large'}></div>
                    <p style={routeNumber === navdata.id ?
                        { fontWeight: "bold", fontSize: '18px' } :
                        { fontWeight: "400", fontSize: '15px', marginLeft: "10px" }
                    }>{navdata.name}</p>
                </div>
                <div className='navlinks_small'>
                    <div className='nvlk_page_i_small'
                        id={routeNumber !== navdata.id || showSideBar ? 'nvlk_page_i_small' : ''}></div>
                    <div className='nvlk_page_icon'>{navdata.icon}</div>
                </div>
            </div>
        </div>
    )
}

export default NavLinks;