import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaLinkedin, FaGooglePlus } from 'react-icons/fa';

export const FooterData = [
    {
        id: 1,
        name: "Our Solutions",
        data: [
            {
                link: "E-Store for Couriers",
                url: "www.google.com"
            },
            {
                link: "E-Store for Stores",
                url: "www.google.com"
            },
            {
                link: "Delivery Protection",
                url: "www.google.com"
            },
            {
                link: "Subsription Management",
                url: "www.google.com"
            },
            {
                link: "Payment Gateway",
                url: "www.google.com"
            },
            {
                link: "Payment Links",
                url: "www.google.com"
            },
            {
                link: "Bill payment",
                url: "www.google.com"
            },
            {
                link: "Wallet",
                url: "www.google.com"
            }
        ]
    },
    {
        id: 2,
        name: "Integrations",
        data: [
            {
                link: "E-Store web SDK",
                url: "www.google.com"
            },
            {
                link: "E-Store web links",
                url: "www.google.com"
            },
            {
                link: "E-Store Android SDK",
                url: "www.google.com"
            },
            {
                link: "E-Store IOS SDK",
                url: "www.google.com"
            },
            {
                link: "Integration Consultant",
                url: "www.google.com"
            },
            {
                link: "Developer Doc",
                url: "www.google.com"
            }
        ]
    },
    {
        id: 3,
        name: "Learn",
        data: [
            {
                link: "Integrations",
                url: "www.google.com"
            },
            {
                link: "E-Store Blog",
                url: "www.google.com"
            },
            {
                link: "Pricing",
                url: "www.google.com"
            },
            {
                link: "Why Us",
                url: "www.google.com"
            },
            {
                link: "Why You",
                url: "www.google.com"
            }
        ]
    },
    {
        id: 4,
        name: "Legal",
        data: [
            {
                link: "Privacy Policy",
                url: "www.google.com"
            },
            {
                link: "Cookie Policy",
                url: "www.google.com"
            },
            {
                link: "Terms & Conditions",
                url: "www.google.com"
            },
            {
                link: "Payment Protection",
                url: "www.google.com"
            },
            {
                link: "Dispute Resolution",
                url: "www.google.com"
            },
            {
                link: "Other protocols",
                url: "www.google.com"
            },

        ]
    },
    {
        id: 5,
        name: "E-Store",
        data: [
            {
                link: "About Us",
                url: "www.google.com"
            },
            {
                link: "Speak With Us",
                url: "www.google.com"
            },
            {
                link: "Mission & Vision",
                url: "www.google.com"
            },
            {
                link: "Store Summit",
                url: "www.google.com"
            },
            {
                link: "Developers Conference",
                url: "www.google.com"
            },
            {
                link: "Staffs",
                url: "www.google.com"
            },

        ]
    },
    {
        id: 6,
        name: "Contact Us",
        data: [
            {
                link: "support@estore.com",
                url: "mailto: support@estore.com"
            },
            {
                link: "+23400 0000 0000",
                url: "tel: +2340000000000"
            },
            {
                link: "+23400 0000 0000",
                url: "tel: +2340000000000"
            },
            {
                link: "E-Store, New York, USA.",
                url: "www.google.com"
            }
        ]
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