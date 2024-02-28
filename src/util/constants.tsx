import { AiFillStar } from "react-icons/ai";
import {
  BsFillSendFill,
  BsShieldFillCheck,
  BsDropbox,
  BsInstagram,
} from "react-icons/bs";
import { FaAirbnb, FaFacebookF, FaTelegram } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { TbBrandBinance, TbBrandCoinbase } from "react-icons/tb";
export const navigationLinks = [
  {
    id: 'home',
    title: "Home"
  },
  {
    id: 'features',
    title: "Services"
  },
  {
    id: 'product',
    title: "Products"
  },
  {
    id: 'clients',
    title: "Clients"
  },
  
]

export const statistics=[
  {
    id:1,
    title: 'Active customers',
    value:'9300+'
  },
  {
    id:1,
    title: 'Sponsoring companies',
    value:'100+'
  },
  {
    id:1,
    title: 'Transaction',
    value:'100M+'
  },
]

export const features = [
  {
    id: 1,
    icon: <AiFillStar className={`w-[50%] h-[50%] object-contain icons`} />,
    title: "Awards",
    content:
      "The best credit cards offer a great combination of promotions and rewards.",
  },
  {
    id: 2,
    icon: (
      <BsShieldFillCheck className={`w-[50%] h-[50%] object-contain icons`} />
    ),
    title: "100% Protected",
    content:
      "Steps to make sure your information and transactions are secure.",
  },
  {
    id: 3,
    icon: <BsFillSendFill className={`w-[50%] h-[50%] object-contain icons`} />,
    title: "Balance transfer",
    content:
      "A balance transfer credit card can save you a lot of money on interest payments.",
  },
];

export const feedbacks = [
  {
    id: 1,
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    title: "Founder & Ledaer",
  },
  {
    id: 2,
    content:
      "Money makes your life easier. If you are lucky to have it, you are lucky.",
    name: "Steve Mark",
    title: "Founder & Ledaer",
  },
  {
    id: 3,
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Ledaer",
  },
];

export const clients = [
  {
    id: 1,
    title: "AIRBNB",
    logo: (
      <FaAirbnb className="sm:w-[50px] w-[40px] sm:h-[50px] h-[40px] object-contain icons mr-3" />
    ),
  },
  {
    id: 2,
    title: "BINANCE",
    logo: (
      <TbBrandBinance className="sm:w-[50px] w-[40px] sm:h-[50px] h-[40px] object-contain icons mr-3" />
    ),
  },
  {
    id: 3,
    title: "COINBASE",
    logo: (
      <TbBrandCoinbase className="sm:w-[50px] w-[40px] sm:h-[50px] h-[40px] object-contain icons mr-3" />
    ),
  },
  {
    id: 4,
    title: "DROPBOX",
    logo: (
      <BsDropbox className="sm:w-[50px] w-[40px] sm:h-[50px] h-[40px] object-contain icons mr-3" />
    ),
  },
];

export const footerLinks = [
  {
    title: "Society",
    links: [
      { name: "Service centre", link: "https://www.hoobank.com/help-center/" },
      { name: "Partners", link: "https://www.hoobank.com/partners/" },
      { name: "Offers", link: "https://www.hoobank.com/suggestions/" },
      { name: "Blog", link: "https://www.hoobank.com/blog/" },
      { name: "News", link: "https://www.hoobank.com/newsletters/" },
    ],
  },

  {
    title: "Useful links",
    links: [
      { name: "Content", link: "https://www.sammi.ac/content/" },
      { name: "How to work", link: "https://www.sammi.ac/how-it-works/" },
      {
        name: "Terms & Services",
        link: "https://www.sammi.ac/terms-and-services/",
      },
    ],
  },

  {
    title: "Partner",
    links: [
      {
        name: "Our partner",
        link: "https://www.sammi.ac/our-partner/",
      },
      {
        name: "Become a partner",
        link: "https://www.sammi.ac/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: (
      <BsInstagram className="w-[21px] h-[21px] object-contain cursor-pointer icons hover:translate-y-[-3px] transition-all duration-300" />
    ),
    link: "https://instagram.com/moriarty_0909?igshid=OGQ5ZDc2ODk2ZA==",
  },
  {
    id: "social-media-2",
    icon: (
      <FaFacebookF className="w-[21px] h-[21px] object-contain cursor-pointer icons hover:translate-y-[-3px] transition-all duration-300" />
    ),
    link: "https://www.facebook.com/asadbek.muydinov.56?mibextid=ZbWKwL",
  },
  {
    id: "social-media-3",
    icon: (
      <FaTelegram className="w-[21px] h-[21px] object-contain cursor-pointer icons hover:translate-y-[-3px] transition-all duration-300" />
    ),
    link: "https://t.me/Moriarty_09",
  },
  {
    id: "social-media-4",
    icon: (
      <FiLinkedin className="w-[21px] h-[21px] object-contain cursor-pointer icons hover:translate-y-[-3px] transition-all duration-300" />
    ),
    link: "https://www.linkedin.com/in/moriarty09?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
];