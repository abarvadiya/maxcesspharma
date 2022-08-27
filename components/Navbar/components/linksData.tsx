// Import Icons
import { BiHome } from "react-icons/bi";
import { ImInfo } from "react-icons/im";
import { FaTelegramPlane, FaGlobeAmericas, FaQuestion } from "react-icons/fa";
import { RiProductHuntLine } from "react-icons/ri";
import { MdPrecisionManufacturing } from "react-icons/md";

const linksData = [
  {
    title: "Home",
    url: "/",
    Icon: <BiHome size={16} />,
  },
  {
    title: "Products",
    url: "/products",
    Icon: <RiProductHuntLine size={16} />,
  },
  {
    title: "Manufacturing",
    url: "/manufacturing",
    Icon: <MdPrecisionManufacturing size={16} />,
  },
  {
    title: "Global Presence",
    url: "/global-presence",
    Icon: <FaGlobeAmericas size={16} />,
  },
  {
    title: "FAQ",
    url: "/faq",
    Icon: <FaQuestion size={16} />,
  },
  {
    title: "About",
    url: "/about",
    Icon: <ImInfo size={16} />,
  },
  {
    title: "Contact",
    url: "/contact",
    Icon: <FaTelegramPlane size={16} />,
  },
];

export default linksData;
