import React from 'react';
import './StoreCategoryPage.scss';
import { FaFire } from 'react-icons/fa';
import { MdArrowBackIos } from 'react-icons/md';
import ProductsCard from '../../../Cards/ProductsCard/ProductsCard';
import { useDispatch, useSelector } from 'react-redux';
import { scrollpageon } from '../../../Redux/Actions/UtilsActions';
import { useNavigate, useLocation } from 'react-router-dom';
import { app_name } from '../../../Configs/AppName';

//temp data
import productsData from '../../../Temp/ProductsData';

const StoreCategoryPage = () => {
    const dispatch = useDispatch();
    dispatch(scrollpageon());
    const navigate = useNavigate();
    document.title = `${app_name()} | Stores | Category`;
    const screen_width = useSelector(state => state.ScreenWidth);
    const categorytype = new URLSearchParams(useLocation().search).get('type');

    return (
        <div className='storecategory_main'>
            <div className='sc_wrapper'>
                <div className='sc_header'>
                    <div onClick={() => navigate(-1)} className='sc_back'>
                        <MdArrowBackIos size={screen_width < 644 ? 20 : 30} color={'rgb(74, 74, 173)'} />
                    </div>
                    <FaFire size={screen_width < 644 ? 20 : 32} color={'rgb(74, 74, 173)'} />
                    <h1>{categorytype[0].toUpperCase()}{categorytype.slice(1).toLowerCase()}</h1>
                </div>
                <div className='sc_container'>
                    {productsData.map((item) => <ProductsCard product={item} />)}
                </div>
            </div>
        </div>
    )
}

export default StoreCategoryPage;