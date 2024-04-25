import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Highlight benefits",
  desc: "Artificio Network tackles challenges with a comprehensive platform, simplifying the complexities of the Web3 world for users.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Operation with One-Click Chart Generation",
      desc: "Allow users to generate insightful charts and visualizations with few clicks, facilitating easy analysis and decision-making",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Smart Contract Analysis with ML/DL",
      desc: "Utilize advanced AI algorithms to analyze smart contracts for security vulnerabilities, efficiency, and compliance with industry standards.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Cross-Chain Compatibility",
      desc: "Ensure compatibility with multiple blockchains and Web3 protocols, allowing users to access and analyze data from various sources.",
      icon: <SunIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "Truly reducing cognitive costs, providing clearer results at a glance, allowing decentralized models to have a greater variety of projects.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Predictive Analytics ",
      desc: "Leverage AI-powered predictive analytics to forecast trends and developments within the Web3 ecosystem, enabling users to make informed investment and strategic decisions.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Real-Time Data Insights Dashboard",
      desc: "Provide users with a comprehensive dashboard offering real-time insights and analytics on blockchain data, smart contracts, and market trends.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Streamlined data visualization",
      desc: "Streamlined visualization tools for meaningful insights and efficient navigation for data management",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};


export { benefitOne, benefitTwo };
