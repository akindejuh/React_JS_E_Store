import React from 'react';
import './ProductDescPage.scss';
import { MdArrowBackIos } from 'react-icons/md';
import { useParams, useNavigate } from 'react-router-dom';
import { app_name } from '../../../Configs/AppName';

// temp
import productsData from '../../../Temp/ProductsData';

const ProductDescPage = () => {
    const id = useParams('id').id;
    document.title = `${app_name()} | Product Description`;
    const navigate = useNavigate();
    const productinfo = productsData[id];

    return (
        <div className='product_desc_main'>
            <div className='p_d_m_w_h'>
                <MdArrowBackIos
                    color='rgb(74, 74, 173)'
                    size={25}
                    onClick={() => navigate(-1)} className={'p_d_m_w_h_a'}
                />
                <h4>Product Description</h4>
            </div>
            <div className='p_d_m_w_b'>
                <h6>Name</h6>
                <h1>{productinfo.name}</h1>
                <h6>Description</h6>
                <p>{productinfo.desc}</p>
            </div>
        </div>
    )
}

export default ProductDescPage;