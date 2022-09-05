import React, { useState, useEffect } from 'react';
import './ImageSlider.scss';
import { MdArrowBackIos } from 'react-icons/md';

const ImageSlider = ({ imageArray }) => {
    const [imageIndex, setImageIndex] = useState(0);
    const imageLength = imageArray.length;

    useEffect(() => {
        if (imageArray[imageIndex]?.handleFunc !== undefined || null) {
            imageArray[imageIndex].handleFunc()
        }
    }, [imageArray, imageIndex])

    if (!Array.isArray(imageArray) || imageArray.length === 0) {
        return null;
    }

    const prevSlide = () => {
        setImageIndex(imageIndex => imageIndex === 0 ? imageLength - 1 : imageIndex - 1);
    }
    const nextSlide = () => {
        setImageIndex(imageIndex => imageIndex === imageLength - 1 ? 0 : imageIndex + 1);
    }


    return (
        <div className='image_slider_main'>
            <div className='image_array_arrow image_array_arrow_left'>
                <MdArrowBackIos size={25} onClick={prevSlide} className='image_array_a_l' />
            </div>
            {imageArray.map((item, i) =>
                <div
                    className={i === imageIndex ? 'image_slider active' : 'image_slider'}
                    key={i}
                >
                    {i === imageIndex && <img src={item.url} alt={item.url} />}
                </div>
            )}
            <div className='image_array_arrow image_array_arrow_right'>
                <MdArrowBackIos size={25} onClick={nextSlide} className='image_array_a_r' />
            </div>
        </div>
    )
}

export default ImageSlider;
