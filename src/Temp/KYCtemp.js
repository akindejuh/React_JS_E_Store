import React, { useRef, useState, useEffect } from 'react';
import './KYCPage.scss';
import { useDispatch } from 'react-redux';
import { scrollpageon, showfooter } from '../../Redux/Actions/Actions';
import { MdArrowBackIos, MdOutlineImage } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { doc, getDoc, setDoc, collection } from "firebase/firestore";
import { db, auth, storage } from '../../firebase';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { app_name } from '../Configs/AppName';

const KYCtemp = () => {
    const dispatch = useDispatch();
    dispatch(scrollpageon());
    dispatch(showfooter());
    const navigate = useNavigate();
    const btn_ref = useRef();
    document.title = `${app_name()} | KYC`;
    const currentYear = new Date().getFullYear();
    const screen_width = useSelector(state => state.ScreenWidth);
    const [uploadImage, setUploadImage] = useState();
    const [uploadPer, setUploadPer] = useState();
    const [showPer, setShowPer] = useState(false);
    const [previewImage, setPreviewImage] = useState();
    const [warning, setWarning] = useState('');
    const [KYCFirstName, setKYCFirstName] = useState('');
    const [KYCLastName, setKYCLastName] = useState('');
    const [KYCDay, setKYCDay] = useState('Choose Day');
    const [KYCMonth, setKYCMonth] = useState('Choose Month');
    const [KYCYear, setKYCYear] = useState('Choose Year');
    const [KYCGender, setKYCGender] = useState('Choose Gender');

    const handleYear = () => {
        let years = [];
        for (let i = currentYear; i > 1939; i--) {
            years.push(i)
        }
        return [...years].map((e, i) => <option>{e}</option>)
    }

    const handlePreviewImageFile = (e) => {
        setWarning('');
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewImage(reader.result);
        };
        setUploadImage(e.target.files[0]);
    };

    const GenderConverter = (gender) => {
        switch (gender) {
            case "Male":
                return "1";
            case "Female":
                return "2";
            default:
                return;
        }
    }

    const handleKYC = (e) => {
        e.preventDefault(``);

        const handleAddUser = async () => {
            btn_ref.current.disabled = true;
            const namesRef = collection(db, "names");
            await setDoc(doc(namesRef, auth.currentUser.uid), {
                n: `${KYCFirstName} ${KYCLastName}`
            }).then(async () => {
                const uDataRef = collection(db, "uData");
                await setDoc(doc(uDataRef, auth.currentUser.uid), {
                    d: KYCDay,
                    m: KYCMonth,
                    n: `${KYCFirstName} ${KYCLastName}`,
                    s: GenderConverter(KYCGender),
                    y: KYCYear
                }).then(() => {
                    btn_ref.current.disabled = false;
                    console.log('KYC Complete')


                    // send email logic

                    // navigate('/kyc/verify');
                }).catch((error) => {
                    setWarning('An error occured while trying to upload profile. Please try again!!!');
                    console.log(error);
                    btn_ref.current.disabled = false;
                })
            }).catch((err) => {
                setWarning('An error occured while trying to upload profile. Please try again!!!');
                console.log(err);
                btn_ref.current.disabled = false;
            });
        }

        if (KYCFirstName.length !== 0 && KYCLastName !== 0 && KYCGender !== 'Choose Gender' && KYCDay !== 'Choose Day' && KYCMonth !== 'Choose Month' && KYCYear !== 'Choose Year' && previewImage !== undefined) {
            try {
                if (previewImage.length > 100 && previewImage.slice(0, 5) === 'https') {
                    handleAddUser();
                } else {
                    const storageRef = ref(storage, `uPics/${auth.currentUser.uid}`);
                    const uploadTask = uploadBytesResumable(storageRef, uploadImage);
                    uploadTask.on('state_changed',
                        (snapshot) => {
                            btn_ref.current.disabled = true;
                            setShowPer(true);
                            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                            const uploadprogress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                            setUploadPer(uploadprogress);
                            switch (snapshot.state) {
                                case 'paused':
                                    console.log('Upload is paused');
                                    break;
                                case 'running':
                                    console.log('Upload is running');
                                    break;
                                default:
                                    break;
                            }
                        },
                        (error) => {
                            setShowPer(false);
                            setWarning('An error occured while uploading profile picture to the server. Please try again');
                            // switch (error.code) {
                            //     case 'storage/unauthorized':
                            //         // User doesn't have permission to access the object
                            //         break;
                            //     case 'storage/canceled':
                            //         // User canceled the upload
                            //         break;
                            //     case 'storage/unknown':
                            //         // Unknown error occurred, inspect error.serverResponse
                            //         break;
                            //     default:
                            //         break;
                            // }
                        },
                        () => {
                            getDownloadURL(uploadTask.snapshot.ref)
                                .then((downloadURL) => {
                                    setShowPer(false);
                                    if (downloadURL !== null || downloadURL !== undefined) {
                                        handleAddUser();
                                    } else {
                                        setShowPer(false);
                                        setWarning('An error occured while uploading profile picture to the server. Please try again');
                                        btn_ref.current.disabled = false;
                                    }
                                });
                        }
                    );
                }
            } catch (error) {
                setWarning('An error occured while uploading profile picture to the server. Please try again')
            }
        } else {
            setWarning('Please fill and select all the respective sections!!!')
        }
    }

    useEffect(() => {
        if (auth.currentUser === null) {
            setWarning('User not found, redirecting to login page');
            setTimeout(() => {
                navigate('/login');
            }, 2500)
        } else {
            let doesUserExist = false;
            const handleIfUserDataExist = async () => {
                await getDoc(doc(db, "uData", auth.currentUser.uid))
                    .catch((error) => {
                        return;
                    })
                    .then((result) => {
                        if (result._document !== null) {
                            doesUserExist = true;
                            setKYCFirstName(result.data().n.split(' ')[0]);
                            setKYCLastName(result.data().n.split(' ')[1]);
                            setKYCDay(parseInt(result.data().d));
                            setKYCMonth(result.data().m);
                            setKYCYear(parseInt(result.data().y));
                            if (result.data().s === "1") {
                                setKYCGender('Male');
                            } else if (result.data().s === "2") {
                                setKYCGender('Female');
                            } else {
                                setKYCGender('Choose Gender');
                            }
                        } else {
                            doesUserExist = false;
                        }
                    })
                await getDownloadURL(ref(storage, `${process.env.REACT_APP_FIREBASE_USER_PROFILE_DATABASE}${auth.currentUser.uid}`))
                    .catch((error) => {
                        // switch (error.code) {
                        //     case 'storage/object-not-found':
                        //         console.log("File doesn't exist")
                        //         break;
                        //     case 'storage/unauthorized':
                        //         console.log("User doesn't have permission to access the object")
                        //         break;
                        //     case 'storage/canceled':
                        //         console.log("User canceled the upload")
                        //         break;
                        //     case 'storage/unknown':
                        //         console.log("Unknown error occurred, inspect the server response")
                        //         break;
                        //     default:
                        //         break;
                        // }
                        if (error) {
                            if (doesUserExist) {
                                setWarning('Error retreiving profile picture from the server. Please re-upload your profile picture.');
                            } else {
                                return;
                            }
                        }
                    })
                    .then((url) => {
                        if (url.length !== 0) {
                            setPreviewImage(url);
                        }
                    })
            }
            handleIfUserDataExist();
            btn_ref.current.disabled = false;
        }
    }, [navigate])

    return (
        <div className='kyc_main'>
            <div className='kyc_m_container'>
                <div className='kyc_m_c_1'>
                    <div className='kyc_m_c_1_h'>
                        <span className='kyc_m_c_1_a' onClick={() => navigate(-1)}>
                            <MdArrowBackIos size={30} color={'rgb(74, 74, 173)'} />
                        </span>
                        <h1>Quick KYC</h1>
                    </div>
                    <p className='kyc_cyp'>Let's complete your profile</p>
                    <h6 style={{ color: 'red', textAlign: 'center', fontSize: '12px', marginTop: '5px' }}>{warning}</h6>
                    <div className='kyc_m_c_1_wrapper'>
                        <div className='kyc_m_c_1_dp'>
                            {previewImage && <img src={previewImage} alt={'previewImage'} />}
                            {!previewImage &&
                                <div className='kyc_m_c_1_d_ph'>
                                    <FaUser size={100} color={'rgb(74, 74, 173)'} />
                                </div>
                            }
                        </div>
                        {showPer && <h4 style={{ marginTop: '5px' }}>Uploading: {uploadPer}%</h4>}
                        <label className='kyc_m_c_1_fc'>
                            <input
                                type={'file'}
                                required
                                name={'PreviewImage'}
                                accept={'.png,.jpg,.jpeg'}
                                onChange={handlePreviewImageFile}
                            />
                            <MdOutlineImage size={screen_width < 900 ? 18 : 20} color={'white'} />
                            <p>Select a Picture</p>
                        </label>
                        <p className='kyc_m_af'>Supported formats are <span>jpg, png, jpeg</span>.</p>
                    </div>
                </div>
                <form className='kyc_m_c_2' onSubmit={handleKYC}>
                    <h6>First Name</h6>
                    <input
                        type={'text'}
                        required
                        placeholder='John'
                        value={KYCFirstName}
                        onChange={(e) => setKYCFirstName(e.target.value)}
                    />
                    <h6>Last Name</h6>
                    <input
                        type={'text'}
                        required
                        placeholder='Doe'
                        value={KYCLastName}
                        onChange={(e) => setKYCLastName(e.target.value)}
                    />
                    <select className='kyc_gender' value={KYCGender} onChange={
                        (e) => {
                            setKYCGender(e.target.value);
                            btn_ref.current.focus();
                            setWarning('');
                        }}>
                        <option>Choose Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                    <div className='kyc_m_c_2_dob'>
                        <p className='kyc_dob_h'>Date of Birth</p>
                        <div className='kyc_dob_d_m'>
                            <span>
                                <select value={KYCDay} onChange={(e) => {
                                    setKYCDay(e.target.value);
                                    btn_ref.current.focus();
                                    setWarning('');
                                }}>
                                    <option>Choose Day</option>
                                    {[...Array(31)].map((e, i) => <option key={i}>{i + 1}</option>)}
                                </select>
                            </span>
                            <span>
                                <select value={KYCMonth} onChange={
                                    (e) => {
                                        setKYCMonth(e.target.value);
                                        btn_ref.current.focus();
                                        setWarning('');
                                    }}>
                                    <option>Choose Month</option>
                                    <option>January</option>
                                    <option>February</option>
                                    <option>March</option>
                                    <option>April</option>
                                    <option>May</option>
                                    <option>June</option>
                                    <option>July</option>
                                    <option>August</option>
                                    <option>September</option>
                                    <option>October</option>
                                    <option>November</option>
                                    <option>December</option>
                                </select>
                            </span>
                        </div>
                        <div className='kyc_dob_y'>
                            <select value={KYCYear} onChange={
                                (e) => {
                                    setKYCYear(e.target.value);
                                    btn_ref.current.focus();
                                    setWarning('');
                                }}>
                                <option>Choose Year</option>
                                {handleYear()}
                            </select>
                        </div>
                    </div>
                    <p className='kyc_store_pp'>{app_name()} <a href='www.google.com' rel='noreferrer' target='_blank'>Privacy Policy</a></p>
                    <h6 style={{ color: 'red', textAlign: 'center', fontSize: '12px', marginTop: '5px' }}>{warning}</h6>
                    <button type='submit' className='kyc_p_btn' ref={btn_ref} disabled>
                        Proceed
                        <span><MdArrowBackIos size={screen_width < 900 ? 15 : 20} color='white' /></span>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default KYCtemp;
