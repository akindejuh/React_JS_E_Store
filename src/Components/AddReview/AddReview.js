import React, { useState, useRef } from 'react';
import './AddReview.scss';
import { MdBarChart, MdAdd } from 'react-icons/md';
import { FaPen, FaCheck } from 'react-icons/fa';
import InputRatings from '../InputRatings/InputRatings';
import CustomCheckBox from '../CustomCheckBox/CustomCheckBox';

const AddReview = ({ canAddReview }) => {
    const [review, setReview] = useState('');
    const reviewb_ref = useRef();
    let addReview = false;

    const handleReviewDropDown = () => {
        addReview = !addReview;
        if (canAddReview) {
            if (addReview) {
                reviewb_ref.current.setAttribute('id', 'adr_m_b');
            } else {
                reviewb_ref.current.setAttribute('id', '');
            }
        }
    }

    return (
        <div className='addreview_main'>
            <div className='adr_m_h'>
                <MdBarChart size={35} color={'rgb(74, 74, 173)'} />
                <h1>Reviews</h1>
                <button onClick={handleReviewDropDown}>
                    <p>Add</p>
                    <MdAdd size={22} color={'white'} />
                </button>
            </div>
            <div className='adr_m_b' ref={reviewb_ref} id=''>
                <h3>Your Review</h3>
                <InputRatings
                    iconsize={35}
                    handlefunction={(ratings) => console.log("r" + ratings)}
                />
                <div className='adr_m_i'>
                    <div className='adr_m_i_p'>
                        <FaPen size={20} color={'rgb(74, 74, 173)'} />
                    </div>
                    <input
                        type={'text'}
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        placeholder={'Leave a comment'}
                    />
                </div>
                <div className='adr_m_i_kma'>
                    <CustomCheckBox
                        name={'adr_kma'}
                        handleSwitchFalse={() => console.log('kma false')}
                        handleSwitchTrue={() => console.log('kma true')}
                    />
                    <h5>Keep me Anonymous</h5>
                </div>
                <button className='adr_m_btn'>
                    <p>Done</p>
                    <FaCheck size={17} color={'white'} />
                </button>
            </div>
        </div>
    )
}

export default AddReview;