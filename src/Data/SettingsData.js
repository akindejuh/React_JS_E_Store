import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaLinkedin, FaGooglePlus } from 'react-icons/fa';

export const promotionsData = [
    {
        id: 1,
        name: "My Subscriptions"
    },
    {
        id: 2,
        name: "Privacy Policy"
    },
    {
        id: 3,
        name: "Legal Information"
    },
    {
        id: 4,
        name: "Check for update"
    },
    {
        id: 5,
        name: "Make a suggestion"
    },
    {
        id: 6,
        name: "Submit a complaint"
    },
    {
        id: 7,
        name: "E-Store Blog"
    },
    {
        id: 8,
        name: "Rate Us"
    }
]

export const SocialLinks = ({ iconsize }) => {
    return [
        {
            id: 1,
            icon: <FaFacebook size={iconsize} color={'rgb(74, 74, 173)'} />,
            link: "www.facebook.com"
        },
        {
            id: 2,
            icon: <FaTwitter size={iconsize} color={'rgb(74, 74, 173)'} />,
            link: "www.twitter.com"
        },
        {
            id: 3,
            icon: <FaInstagram size={iconsize} color={'rgb(74, 74, 173)'} />,
            link: "www.instagram.com"
        },
        {
            id: 4,
            icon: <FaWhatsapp size={iconsize} color={'rgb(74, 74, 173)'} />,
            link: "www.whatsapp.me"
        },
        {
            id: 5,
            icon: <FaLinkedin size={iconsize} color={'rgb(74, 74, 173)'} />,
            link: "www.linkedin.com"
        },
        {
            id: 6,
            icon: <FaGooglePlus size={iconsize} color={'rgb(74, 74, 173)'} />,
            link: "www.google.com"
        }
    ]
}