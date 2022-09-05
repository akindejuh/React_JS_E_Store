import React, { useState, useEffect } from 'react';
import './SendParcelPage.scss';
import { MdArrowBackIos, MdCameraAlt, MdClose } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { scrollpageon, showfooter } from '../../../Redux/Actions/UtilsActions';
import { useNavigate } from 'react-router-dom';
import { StoreCategoriesImagesData } from '../../../Data/StoreCategoriesImagesData';
import ImageSlider from '../../../Components/ImageSlider/ImageSlider';
import SendParcelTransport from '../../../Data/SendParcelTransportData';
import { app_name } from '../../../Configs/AppName';
import mb1 from '../../../Images/Veh_types/mb1.jpg';
import mb2 from '../../../Images/Veh_types/mb2.jpg';
import mb3 from '../../../Images/Veh_types/mb3.jpg';
import mb4 from '../../../Images/Veh_types/mb4.jpg';
import mv1 from '../../../Images/Veh_types/mv1.jpg';
import mv2 from '../../../Images/Veh_types/mv2.jpg';
import mv3 from '../../../Images/Veh_types/mv3.jpg';
import mv4 from '../../../Images/Veh_types/mv4.jpg';
import pu1 from '../../../Images/Veh_types/pu1.jpg';
import pu2 from '../../../Images/Veh_types/pu2.jpg';

const SendParcelPage = () => {
    const dispatch = useDispatch();
    dispatch(scrollpageon());
    dispatch(showfooter());
    document.title = `${app_name()} | Parcels | Send`;
    const navigate = useNavigate();
    const screen_width = useSelector(state => state.ScreenWidth);
    const [parcelTransport, setParcelTransport] = useState(1);
    const [parcelSize, setParcelSize] = useState(1);
    const [previewImages, setPreviewImages] = useState([]);
    const [enablePrevImages, setEnablePrevImages] = useState(false);

    useEffect(() => {
        console.log('parcel vehicle weight analysis ' + parcelSize)
    }, [parcelSize])

    const mbImageArray = [
        {
            url: mb1,
            handleFunc: () => {
                setParcelSize(1);
            }
        },
        {
            url: mb2,
            handleFunc: () => {
                setParcelSize(2);
            }
        },
        {
            url: mb3,
            handleFunc: () => {
                setParcelSize(3);
            }
        },
        {
            url: mb4,
            handleFunc: () => {
                setParcelSize(4);
            }
        }
    ]
    const mvImageArray = [
        {
            url: mv1,
            handleFunc: () => {
                setParcelSize(1);
            }
        },
        {
            url: mv2,
            handleFunc: () => {
                setParcelSize(2);
            }
        },
        {
            url: mv3,
            handleFunc: () => {
                setParcelSize(3);
            }
        },
        {
            url: mv4,
            handleFunc: () => {
                setParcelSize(4);
            }
        }
    ]
    const puImageArray = [
        {
            url: pu1,
            handleFunc: () => {
                setParcelSize(1);
            }
        },
        {
            url: pu2,
            handleFunc: () => {
                setParcelSize(2);
            }
        },
        {
            url: pu1,
            handleFunc: () => {
                setParcelSize(1);
            }
        },
        {
            url: pu2,
            handleFunc: () => {
                setParcelSize(2);
            }
        }
    ]
    const vehicletoRender = () => {
        switch (parcelTransport) {
            case 1:
                return mbImageArray;
            case 2:
                return mvImageArray;
            case 3:
                return puImageArray;
            default:
                return null;

        }
    }

    const handlePreviewImageFile = (e) => {
        setEnablePrevImages(false);
        setPreviewImages([]);
        const imagefiles = e.target.files;
        for (let i = 0; i < (imagefiles.length > 3 ? 3 : imagefiles.length); i++) {
            const reader = new FileReader();
            reader.readAsDataURL(imagefiles[i]);
            reader.onloadend = () => {
                setPreviewImages(prev => [...prev, reader.result]);
            };
        }
        setEnablePrevImages(true)
    };

    return (
        <div className='sendparcelpage_main'>
            <div className='spp_m_w'>
                <div className='spp_h'>
                    <div className='spp_h_a' onClick={() => navigate(-1)}>
                        <MdArrowBackIos size={25} color={'rgb(74, 74, 173)'} />
                    </div>
                    <h2>Send Something</h2>
                </div>
                <div className='spp_b'>
                    <div className='spp_b_info'>
                        <h2 className='spp_b_h2'>Basic Information</h2>
                        <h6 className='spp_b_h6'>What are you sending?</h6>
                        <input
                            type={'text'}
                            className='spp_b_input'
                            placeholder='What are you sending?'
                        />
                        <h6 className='spp_b_h6'>Select a Category</h6>
                        <select className='spp_b_select'>
                            <option key={-1}>Select a Category</option>
                            {StoreCategoriesImagesData.map((item, i) =>
                                <option key={i}>{item.name}</option>
                            )}
                        </select>
                        <h2 className='spp_b_h2'>Appropraite Transport</h2>
                        <div className='spp_b_spt_w'>
                            {SendParcelTransport().map((item) =>
                                <div className='spp_b_spt'
                                    id={parcelTransport === item.id ? 'spp_b_spt' : ''}
                                    onClick={() => setParcelTransport(item.id)}>
                                    {item.icon}
                                    <p>{item.name}</p>
                                </div>
                            )}
                        </div>
                        <h2 className='spp_b_h2'>Size and Weight</h2>
                        <div className='spp_b_v2r'>
                            {vehicletoRender() !== null && <p>Size</p>}
                            <div className='spp_b_img_w'>
                                {vehicletoRender() !== null && <ImageSlider imageArray={vehicletoRender()} />}
                            </div>
                        </div>
                        <div className='spp_b_weight'>
                            <p>Weight</p>
                            <div className='spp_b_weight_w'>
                                <input type={'number'} placeholder='Weight' className='spp_b_w_input' />
                                <select className='spp_b_w_select'>
                                    <option>g</option>
                                    <option>kg</option>
                                </select>
                            </div>
                        </div>
                        <h2 className='spp_b_h2'>Photos</h2>
                        <p className='spp_b_p'>Pictures are how we protect your parcels. Click to see guildlines.</p>
                        <h6 className='spp_b_h6 spp_b_h6_h6'>A maximum of 3 Images is allowed.</h6>
                        <div className='spp_prev_images_w'>
                            <label className='spp_file_upload'>
                                <input
                                    type={'file'}
                                    className='spp_file_upload_icon'
                                    multiple={true}
                                    accept=".png,.jpg,.jpeg"
                                    onChange={handlePreviewImageFile}
                                />
                                <MdCameraAlt size={30} color='rgb(74, 74, 173)' />
                            </label>
                            {previewImages.length > 0 && enablePrevImages &&
                                previewImages.map((item, i) =>
                                    <div className='spp_prev_images_c' key={i}>
                                        <div className='spp_prev_images_close'
                                            onClick={() =>
                                                setPreviewImages(prev => [...prev.slice(0, i), ...prev.slice(i + 1)])
                                            }>
                                            <MdClose color='red' />
                                        </div>
                                        <img src={item} alt={'picture' + i} className='spp_prev_images' />
                                    </div>
                                )}
                        </div>
                    </div>
                    <button className='spp_btn' onClick={() => navigate('/parcels/billsandloc')}>
                        <p>Proceed</p>
                        <MdArrowBackIos style={{ transform: 'rotate(180deg)' }} color='white' size={screen_width < 720 ? 17 : 22} />
                    </button>
                </div>
            </div>
        </div >
    )
}

export default SendParcelPage;