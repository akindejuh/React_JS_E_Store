import React, { useState, useEffect } from 'react';
import './HomePage.scss';
import { useDispatch, useSelector } from 'react-redux';
import { scrollpageon, showfooter } from '../../../Redux/Actions/UtilsActions';
import { useNavigate } from 'react-router-dom';
import { FaAndroid } from 'react-icons/fa';
import { SiApple } from 'react-icons/si';
import TextTransition, { presets } from "react-text-transition";
import { app_name } from '../../../Configs/AppName';
import { FiSearch } from 'react-icons/fi';
import mfs from '../../../Images/Home/mfs.jpg';
import mfc from '../../../Images/Home/image3.jpg';
import btwc from '../../../Images/Home/btwc.jpg';
import mfd from '../../../Images/Home/mfd.jpg';
import mfy from '../../../Images/Home/mfy1.jpg';
import appicon from '../../../Images/Icons/appicon-blue.png';
import h1 from '../../../Images/Home/image2.jpg';
import h2 from '../../../Images/Home/h2.jpg';
import h3 from '../../../Images/Home/h3.jpg';
import h4 from '../../../Images/Home/h4.jpg';

const HomePage = () => {
    const dispatch = useDispatch();
    dispatch(scrollpageon());
    dispatch(showfooter());
    document.title = `${app_name()} | Home`;
    const navigate = useNavigate();
    const screen_width = useSelector(state => state.ScreenWidth);
    const introText = [
        "Sales",
        "Payment",
        "Delivery"
    ]
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() =>
            setIndex(index => index + 1),
            1800 // every 1.8 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);

    return (
        <div className='homepage_main'>
            <div className='hpm_about'>
                <div className='hpm_a_h'>
                    <img src={appicon} alt={`${app_name()}`} />
                    <h1>{app_name()}</h1>
                    {screen_width > 600 && <button className='hpm_a_h_t' onClick={() => window.scrollTo(0, document.body.scrollHeight)}>Our Solutions</button>}
                    {screen_width > 600 && <button>Join our Beta</button>}
                    <button className='hpm_a_h_lb' onClick={() => navigate('/login')}>Login</button>
                </div>
                <div className='hpm_a_b'>
                    <div className='hpm_a_b_1'>
                        <div className='hpm_a_b_1_anim'>
                            <h2>{app_name()} is built to handle
                                <span>
                                    <TextTransition springConfig={presets.wobbly}>
                                        {introText[index % introText.length]}
                                    </TextTransition>
                                </span>
                            </h2>
                        </div>
                        <h5>Let's use {app_name()} to elevate your businesses.</h5>
                        <h6>Find Stores on {app_name()}</h6>
                        <form className='hpm_a_b_1_i' onSubmit={(e) => e.preventDefault()}>
                            <input
                                type={'text'}
                                placeholder={`Find Stores on ${app_name()}`}
                            />
                            <button type='submit' className='hpm_a_b_1_i_si'>
                                <FiSearch color='white' size={17} />
                            </button>
                        </form>
                        <h6>Find Couriers on {app_name()}</h6>
                        <form className='hpm_a_b_1_i' onSubmit={(e) => e.preventDefault()}>
                            <input
                                type={'text'}
                                placeholder={`Find Delivery Companies on ${app_name()}`}
                            />
                            <button type='submit' className='hpm_a_b_1_i_si'>
                                <FiSearch color='white' size={17} />
                            </button>
                        </form>
                    </div>
                    {screen_width > 1230 && <div className='hpm_a_b_2'>
                        <div className='hpm_a_b_2_i1'>
                            <img src={h1} alt={`${app_name()}_process`} />
                            <img src={h2} alt={`${app_name()}_process`} />
                        </div>
                        <div className='hpm_a_b_2_i2'>
                            <img src={h3} alt={`${app_name()}_process`} />
                            <img src={h4} alt={`${app_name()}_process`} />
                        </div>
                    </div>}
                </div>
            </div>
            <div className='hpm_info'>
                <div className='hpm_info_1'>
                    <img src={mfs} alt={`${app_name()} for Stores`} />
                </div>
                <div className='hpm_info_2'>
                    <h1 className='hpm_info_2_h'>{app_name()} for <span>Lorem Ipsum</span></h1>
                    <h4 className='hpm_info_2_d'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>
                    <div className='hpm_info_2_di'>
                        <span className='hpm_info_2_di_w'>
                            <h6>What is Lorem Ipsum?</h6>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </span>
                        <span className='hpm_info_2_di_w'>
                            <h6>What is Lorem Ipsum?</h6>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </span>
                        <span className='hpm_info_2_di_w'>
                            <h6>What is Lorem Ipsum?</h6>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </span>
                    </div>
                    <div className='hpm_info_2_btn'>
                        <button className='hpm_info_2_btn_lb'>Join our Beta</button>
                        <button>Explore Stores</button>
                        <button>Speak with Us</button>
                    </div>
                </div>
            </div>
            <div className='hpm_info'>
                <div className='hpm_info_2'>
                    <h1 className='hpm_info_2_h'>{app_name()} for <span>Lorem Ipsum</span></h1>
                    <h4 className='hpm_info_2_d'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>
                    <div className='hpm_info_2_di'>
                        <span className='hpm_info_2_di_w'>
                            <h6>What is Lorem Ipsum?</h6>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </span>
                        <span className='hpm_info_2_di_w'>
                            <h6>What is Lorem Ipsum?</h6>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </span>
                        <span className='hpm_info_2_di_w'>
                            <h6>What is Lorem Ipsum?</h6>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </span>
                        <span className='hpm_info_2_di_w'>
                            <h6>What is Lorem Ipsum?</h6>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </span>
                    </div>
                    <div className='hpm_info_2_btn'>
                        <button className='hpm_info_2_btn_lb'>Join our Beta</button>
                        <button>Explore Couriers</button>
                        <button>Speak with Us</button>
                    </div>
                </div>
                <div className='hpm_info_1'>
                    <img src={mfc} alt={`${app_name()} for Stores`} />
                </div>
            </div>
            <div className='hpm_info'>
                <div className='hpm_info_1'>
                    <img src={btwc} alt={`${app_name()} for Stores`} />
                </div>
                <div className='hpm_info_2'>
                    <h1 className='hpm_info_2_h'>{app_name()} for <span>Lorem Ipsum</span></h1>
                    <h4 className='hpm_info_2_d'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>
                    <div className='hpm_info_2_di'>
                        <span className='hpm_info_2_di_w'>
                            <h6>What is Lorem Ipsum?</h6>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </span>
                        <span className='hpm_info_2_di_w'>
                            <h6>What is Lorem Ipsum?</h6>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </span>
                        <span className='hpm_info_2_di_w'>
                            <h6>What is Lorem Ipsum?</h6>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </span>
                        <span className='hpm_info_2_di_w'>
                            <h6>What is Lorem Ipsum?</h6>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </span>
                        <span className='hpm_info_2_di_w'>
                            <h6>What is Lorem Ipsum?</h6>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </span>
                    </div>
                    <div className='hpm_info_2_btn'>
                        <button className='hpm_info_2_btn_lb'>Join our Beta</button>
                        <button>Speak with Us</button>
                    </div>
                </div>
            </div>
            <div className='hpm_info'>
                <div className='hpm_info_2'>
                    <h1 className='hpm_info_2_h'>{app_name()} for <span>Lorem Ipsum</span></h1>
                    <h4 className='hpm_info_2_d'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>
                    <div className='hpm_info_2_di'>
                        <span className='hpm_info_2_di_w'>
                            <h6>What is Lorem Ipsum?</h6>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </span>
                        <span className='hpm_info_2_di_w'>
                            <h6>What is Lorem Ipsum?</h6>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </span>
                        <span className='hpm_info_2_di_w'>
                            <h6>What is Lorem Ipsum?</h6>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </span>
                    </div>
                    <div className='hpm_info_2_btn'>
                        <button className='hpm_info_2_btn_lb'>Join our Beta</button>
                        <button><FaAndroid /> <span>John our Beta</span></button>
                        <button><SiApple /> <span>John our Beta</span></button>
                        <button>Speak with Us</button>
                    </div>
                </div>
                <div className='hpm_info_1'>
                    <img src={mfd} alt={`${app_name()} for Stores`} />
                </div>
            </div>
            <div className='hpm_info'>
                <div className='hpm_info_1'>
                    <img style={{ width: "90%", height: "auto" }} src={mfy} alt={`${app_name()} for Stores`} />
                </div>
                <div className='hpm_info_2'>
                    <h1 className='hpm_info_2_h'>{app_name()} for <span>Lorem Ipsum</span></h1>
                    <h4 className='hpm_info_2_d'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>
                    <div className='hpm_info_2_di'>
                        <span className='hpm_info_2_di_w'>
                            <h6>What is Lorem Ipsum?</h6>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </span>
                        <span className='hpm_info_2_di_w'>
                            <h6>What is Lorem Ipsum?</h6>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </span>
                        <span className='hpm_info_2_di_w'>
                            <h6>What is Lorem Ipsum?</h6>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </span>
                    </div>
                    <div className='hpm_info_2_btn'>
                        <button className='hpm_info_2_btn_lb'>Join our Beta</button>
                        <button>Speak with Us</button>
                        <button onClick={() => navigate('/signup')}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;
