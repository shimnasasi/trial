import { PiFlagBannerFold } from "react-icons/pi";
import { MdWorkspacePremium } from "react-icons/md";
import { FaPaintBrush } from "react-icons/fa";
import { GiThreeFriends } from "react-icons/gi";
import { RiEmpathizeFill } from "react-icons/ri";
import { FcCollaboration } from "react-icons/fc";
import { FaHandshakeSimple } from "react-icons/fa6";
import image1 from "../assets/service/design.jpg";
import image2 from "../assets/service/marketing.jpg";
import image3 from "../assets/service/branding.JPG";

export const cardData = [
  {
    id: 1,
    name: "Design Services",
    image: image1,
    desc: "Creating Visuals That Speak Volumes"
  },
  {
    id: 2,
    name: "Marketing Services",
    image: image2,
    desc: "Strategies That Drive Engagement and Growth"
  },
  {
    id: 3,
    name: "Branding Services",
    image: image3,
    desc: "Establishing a Strong Brand Identity"
  }
];

export const ourprocessList = [
  {
    name: "Integrity",
    desc: "Every brand is unique, and so is our approach. We tailor our strategies to meet your brand’s specific needs.",
    icon: <PiFlagBannerFold />
  },
  {
    name: "Social Responsibility",
    desc: "Each project we undertake is executed with attention to detail and a commitment to excellence",
    icon: <MdWorkspacePremium />
  },
  {
    name: "Sustainability",
    desc: "We believe in pushing boundaries with fresh, original designs that captivate and communicate effectively.",
    icon: <FaPaintBrush />
  },
  {
    name: "Innovation",
    desc: "Your goals are our goals. We work together with you, creating an open, transparent partnership focused on success",
    icon: <GiThreeFriends />
  },
  {
    name: "Empathy",
    desc: "We believe in pushing boundaries with fresh, original designs that captivate and communicate effectively.",
    icon: <RiEmpathizeFill />
  },
  {
    name: "Collaboration",
    desc: "Your goals are our goals. We work together with you, creating an open, transparent partnership focused on success",
    icon: <FaHandshakeSimple />
    

  }
];
