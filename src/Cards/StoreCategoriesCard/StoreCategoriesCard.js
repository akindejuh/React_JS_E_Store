import React from 'react';
import './StoreCategoriesCard.scss';
import { useNavigate, createSearchParams } from 'react-router-dom';

const StoreCategoriesCard = ({ storecategory }) => {
    const navigate = useNavigate();
    const params = { type: storecategory.query };

    return (
        <div className='store_cat_cards_main' onClick={() => navigate({
            pathname: `/stores/category`,
            search: `?${createSearchParams(params)}`
        })}>
            <p>{storecategory.name}</p>
            <div className='s_c_c_m_dim'></div>
            <img src={storecategory.url} alt={storecategory.url} />
        </div>
    )
}

export default StoreCategoriesCard;