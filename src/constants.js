// work process
import process1 from "./assets/working-process-1.png";
import process2 from "./assets/working-process-2.png";
import process3 from "./assets/working-process-3.png";
import process4 from "./assets/working-process-4.png";

// web development services icons
import ecomWebIcon from "./assets/icons/online-shopping.png";
import socialWebIcon from "./assets/icons/socialmedia.png";
import landingWebIcon from "./assets/icons/landing-page.png";
import customWebIcon from "./assets/icons/software-development.png";

// app development services icons
import iosAppIcon from "./assets/icons/ios-development.png";
import androidAppIcon from "./assets/icons/android-development.png";
import flutterAppIcon from "./assets/icons/flutter-development.png";
import hybridAppIcon from "./assets/icons/hybrid-app-development.png";

// clients
import client1 from "./assets/client-1.png";
import client2 from "./assets/client-2.png";
import client3 from "./assets/client-3.png";
import client4 from "./assets/client-4.png";

// logo - use SVG for better performance
import logo from "./assets/logo/logo.png";

export { logo };

// client details
export const clientDetails = {
  phone: "917339002329",
  whatsapp:"https://api.whatsapp.com/send/?phone=917339002329",
  email: "contact@dextralogic.com",
  emailForCareers: "carreers@dextralogic.com",
  emailForTechSupport: "techsupport@dextralogic.com",
  address: "3/14 Annai Parvathy Nagar, Thoraipakkam, chennai-600097",
  instagram: "https://www.instagram.com/d_logic_ai?igsh=YjU0d2NkcTRlOHBs",
  twitter: "https://x.com/dlogic_ai?t=5jeXHiKuXlSNVDc4FoP8_g&s=09",
  linkedin: "https://www.linkedin.com/company/dextralogic-ai-solutions/",
  youtube: "https://www.youtube.com/@dlogic23",
  facebook: "https://www.facebook.com/share/1CVJazX4s2/",
};

// landing page header links
export const landingPageHeaderLinks = [
  {
    id: 1,
    title: "Home",
    link: "banner",
  },
  {
    id: 2,
    title: "About Us",
    link: "about-us",
  },
  {
    id: 3,
    title: "Services",
    link: "services",
  },
  // {
  //   id: 4,
  //   title: "Contact Us",
  //   link: "contact",
  // },
];

// website pages
export const websitePagesLinks = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  // {
  //   id: 2,
  //   title: "Industries",
  //   link: "/industries",
  // },
  {
    id: 3,
    title: "Our Services",
    link: "/services",
  },
  {
    id: 4,
    title: "Portfolio",
    link: "/portfolio",
  },
];

// working process
export const workingProcess = [
  {
    id: 1,
    title: "In-Depth Consultation",
    description: "Understand your needs, discuss goals.",
    img: process1,
  },
  {
    id: 2,
    title: "Strategic Planning",
    description: "Create roadmap, define KPIs, set timeline.",
    img: process2,
  },
  {
    id: 3,
    title: "Design and Development",
    description: "Design visually stunning, develop functional website",
    img: process3,
  },
  {
    id: 4,
    title: "Rigorous Testing",
    description: "Ensure optimal performance, compatibility, security",
    img: process4,
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerce Websites",
    icon: ecomWebIcon,
    img: require("./assets/landingpage-services-imgs/ecommerce.webp"),
    description:
      "We create powerful e-commerce websites that enhance customer engagement, streamline business operations, and drive sustainable revenue growth.",
  },
  {
    id: 2,
    title: "Social Media Websites",
    icon: socialWebIcon,
    img: require("./assets/landingpage-services-imgs/socialmedia.webp"),
    description:
      "Developing dynamic and engaging social media websites designed to foster community interaction, boost brand awareness, and encourage user loyalty.",
  },
  {
    id: 3,
    title: "Landing Websites",
    icon: landingWebIcon,
    img: require("./assets/landingpage-services-imgs/landing.webp"),
    description:
      "Crafting high-conversion landing pages that grab attention and drive meaningful action, tailored to showcase your brand and optimize results.",
  },
  {
    id: 4,
    title: "Custom Websites",
    icon: customWebIcon,
    img: require("./assets/landingpage-services-imgs/customweb.webp"),
    description:
      "Building bespoke websites designed specifically for your business, combining innovative design and seamless functionality for a remarkable online presence.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    icon: iosAppIcon,
    img: require("./assets/landingpage-services-imgs/ios.webp"),
    description:
      "We create exceptional iOS apps using Swift and Objective-C, delivering seamless performance, modern design, and enhanced user engagement.",
  },
  {
    id: 2,
    title: "Android App Development",
    icon: androidAppIcon,
    img: require("./assets/landingpage-services-imgs/android.webp"),
    description:
      "Our Android apps, crafted with Java and Kotlin, are tailored to your business vision, offering robust features and outstanding user experiences.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    icon: flutterAppIcon,
    img: require("./assets/landingpage-services-imgs/flutter.webp"),
    description:
      "Leverage Flutter's single codebase to build responsive apps for iOS and Android, ensuring efficiency without compromising on quality.",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    icon: hybridAppIcon,
    img: require("./assets/landingpage-services-imgs/hybrid.webp"),
    description:
      "Our hybrid apps deliver seamless functionality across platforms, combining native performance with versatile design for an enhanced user experience.",
  },
];

// all services
export const allServices = [
  {
    id: 1,
    img1: require("./assets/services-details/ai1.webp"),
    img2: require("./assets/services-details/ai2.webp"),
    title: "AI & ML Solutions",
    smallPara:
      "Unlock the power of Artificial Intelligence and Machine Learning to revolutionize your business operations. Our AI & ML solutions are designed to transform your data into actionable insights, automate routine tasks, and enhance decision-making processes. By implementing intelligent systems, we help businesses stay competitive in an increasingly data-driven world.\n\nOur team of experts specializes in developing custom AI solutions that address your specific business challenges, from intelligent automation to predictive analytics and natural language processing.",
    keyBenefits: [
      "Enhanced operational efficiency through automation",
      "Improved decision-making with data-driven insights",
      "Personalized customer experiences",
      "Scalable solutions that grow with your business",
    ],
    detailsPageContent: {
      firstPara: `Unlock the power of Artificial Intelligence and Machine Learning to revolutionize your business operations. Our services include:
          \n
          • AI Agents & Assistants: Develop intelligent agents that automate tasks and enhance user interactions.
          • Chatbots: Implement conversational AI to provide 24/7 customer support.
          • ML Ops: Streamline machine learning workflows for faster deployment and scalability.
          • AI Integration: Seamlessly integrate AI capabilities into your existing systems.`,
      servicesSection: `Our AI & ML solutions are designed to transform your data into actionable insights, automate routine tasks, and enhance decision-making processes. By implementing intelligent systems, we help businesses stay competitive in an increasingly data-driven world.
          \n
          Leverage our expertise to transform data into actionable insights and drive business growth. Our team of experts specializes in developing custom AI solutions that address your specific business challenges, from intelligent automation to predictive analytics and natural language processing.`,
    },
  },
  {
    id: 2,
    img1: require("./assets/services-details/web-app-1.webp"),
    img2: require("./assets/services-details/web-app-2.webp"),
    title: "Web & Mobile Application Development",
    smallPara:
      "In today's mobile-first world, having a robust online presence is crucial for business success. Our web and mobile application development services are designed to create engaging, user-friendly, and high-performing digital experiences across all platforms. We combine cutting-edge technologies with innovative design to deliver solutions that meet your business objectives.\n\nFrom responsive websites to native mobile applications, we focus on creating seamless user experiences that drive engagement and conversion. Our development process is collaborative, transparent, and focused on delivering measurable results.",
    keyBenefits: [
      "Cross-platform compatibility for wider reach",
      "User-centric design for better engagement",
      "Scalable architecture for future growth",
      "Optimized performance for faster loading times",
    ],
    detailsPageContent: {
      firstPara: `In today's mobile-first world, having a robust online presence is crucial. We offer comprehensive development services for:
          \n
          • Android & iOS Applications: Create native apps that deliver seamless user experiences.
          • Cross-Platform Solutions: Develop applications that run on multiple platforms with a single codebase.
          • Web Applications: Build responsive and scalable web applications tailored to your business needs.`,
      servicesSection: `Our web and mobile application development services are designed to create engaging, user-friendly, and high-performing digital experiences across all platforms. We combine cutting-edge technologies with innovative design to deliver solutions that meet your business objectives.
          \n
          Our solutions are designed to enhance user engagement and drive business success. From responsive websites to native mobile applications, we focus on creating seamless user experiences that drive engagement and conversion. Our development process is collaborative, transparent, and focused on delivering measurable results.`,
    },
  },
  {
    id: 3,
    img1: require("./assets/services-details/blockchain1.webp"),
    img2: require("./assets/services-details/blockchain2.webp"),
    title: "Blockchain & Web3 Solutions",
    smallPara:
      "Embrace the future of decentralized technology with our Blockchain and Web3 services. Blockchain technology offers unprecedented levels of security, transparency, and efficiency for businesses across various industries. Our solutions help you leverage this transformative technology to streamline operations, enhance trust, and create new business models.\n\nFrom smart contracts to decentralized applications (DApps), we provide end-to-end blockchain development services tailored to your specific needs. Our team stays at the forefront of Web3 innovations to deliver cutting-edge solutions that give you a competitive edge.",
    keyBenefits: [
      "Enhanced security and transparency",
      "Reduced operational costs and inefficiencies",
      "Immutable record-keeping and audit trails",
      "Innovative business models and revenue streams",
    ],
    detailsPageContent: {
      firstPara: `Embrace the future of decentralized technology with our Blockchain and Web3 services:
          \n
          • DApps (Decentralized Applications): Develop applications that run on blockchain networks, ensuring transparency and security.
          • Smart Contracts: Automate agreements and transactions with self-executing contracts.
          • Blockchain Integration: Integrate blockchain technology into your existing systems for enhanced security and efficiency.`,
      servicesSection: `Blockchain technology offers unprecedented levels of security, transparency, and efficiency for businesses across various industries. Our solutions help you leverage this transformative technology to streamline operations, enhance trust, and create new business models.
          \n
          Stay ahead of the curve by adopting blockchain solutions that offer trust and transparency. From smart contracts to decentralized applications (DApps), we provide end-to-end blockchain development services tailored to your specific needs. Our team stays at the forefront of Web3 innovations to deliver cutting-edge solutions that give you a competitive edge.`,
    },
  },
  // {
  //   id: 4,
  //   img1: require("./assets/services-details/uiux1.webp"),
  //   img2: require("./assets/services-details/uiux2.webp"),
  //   title: "UI/UX Design",
  //   smallPara:
  //     "A great user experience is key to customer satisfaction and business success. Our UI/UX design services focus on creating intuitive, engaging, and visually appealing interfaces that enhance user satisfaction and drive conversion. We combine aesthetic design with functional usability to deliver exceptional digital experiences.\n\nOur design process is user-centered, research-driven, and iterative, ensuring that the final product meets both user needs and business objectives. From wireframing and prototyping to usability testing and implementation, we provide comprehensive design services that set your digital products apart.",
  //   keyBenefits: [
  //     "Increased user engagement and satisfaction",
  //     "Higher conversion rates and customer retention",
  //     "Reduced development costs through early problem identification",
  //     "Consistent brand experience across all touchpoints",
  //   ],
  //   detailsPageContent: {
  //     firstPara: `A great user experience is key to customer satisfaction. Our UI/UX design services include:
  //         \n
  //         • User Research: Understand your users' needs and behaviors.
  //         • Wireframing & Prototyping: Design intuitive interfaces that enhance usability.
  //         • Usability Testing: Ensure your designs meet user expectations and business goals.`,
  //     servicesSection: `Our UI/UX design services focus on creating intuitive, engaging, and visually appealing interfaces that enhance user satisfaction and drive conversion. We combine aesthetic design with functional usability to deliver exceptional digital experiences.
  //         \n
  //         We focus on creating designs that are not only visually appealing but also user-friendly. Our design process is user-centered, research-driven, and iterative, ensuring that the final product meets both user needs and business objectives. From wireframing and prototyping to usability testing and implementation, we provide comprehensive design services that set your digital products apart.`,
  //   },
  // },
  {
    id: 5,
    img1: require("./assets/services-details/cloud-computing-1.webp"),
    img2: require("./assets/services-details/cloud-computing-2.webp"),
    title: "Cloud Services",
    smallPara:
      "Scale your business with our comprehensive cloud solutions. Cloud computing has transformed the way businesses operate, offering unprecedented levels of scalability, flexibility, and cost-efficiency. Our cloud services help you leverage these benefits to optimize your IT infrastructure, enhance collaboration, and accelerate innovation.\n\nFrom cloud migration and infrastructure management to application development and optimization, we provide end-to-end cloud solutions tailored to your specific needs. Our expertise spans across major cloud platforms, ensuring you get the most out of your cloud investment.",
    keyBenefits: [
      "Scalable infrastructure that grows with your business",
      "Reduced IT costs and improved resource utilization",
      "Enhanced data security and disaster recovery",
      "Increased agility and faster time-to-market",
    ],
    detailsPageContent: {
      firstPara: `Scale your business with our comprehensive cloud solutions:
          \n
          • Infrastructure as a Service (IaaS): Access scalable computing resources on-demand.
          • Platform as a Service (PaaS): Develop and deploy applications without managing the underlying infrastructure.
          • Software as a Service (SaaS): Utilize software applications hosted on the cloud, accessible via the internet.`,
      servicesSection: `Cloud computing has transformed the way businesses operate, offering unprecedented levels of scalability, flexibility, and cost-efficiency. Our cloud services help you leverage these benefits to optimize your IT infrastructure, enhance collaboration, and accelerate innovation.
          \n
          Our cloud services ensure flexibility, scalability, and cost-efficiency for your business. From cloud migration and infrastructure management to application development and optimization, we provide end-to-end cloud solutions tailored to your specific needs. Our expertise spans across major cloud platforms, ensuring you get the most out of your cloud investment.`,
    },
  },
];

// clients
export const clients = [
  {
    id: 1,
    img: client1,
  },
  {
    id: 2,
    img: client2,
  },
  {
    id: 3,
    img: client3,
  },
  {
    id: 4,
    img: client4,
  },
];

// industries

// industry company serve
export const industriesCompanyServe = [
  {
    id: 1,
    title: "Healthcare",
    img: require("./assets/industries/Healthcare.webp"),
    desc: "Transforming patient care and operations with AI-powered diagnostics, data analytics, and telemedicine solutions.",
  },
  {
    id: 2,
    title: "Retail",
    img: require("./assets/industries/E-commerce & Retail.webp"),
    desc: "Enhancing customer experiences with personalized recommendations, inventory management, and secure online transactions.",
  },
  {
    id: 3,
    title: "Fintech",
    img: require("./assets/industries/Fintech.webp"),
    desc: "Streamlining financial services with AI-driven fraud detection, automated customer support, and predictive analytics.",
  },
  {
    id: 4,
    title: "Insurance",
    img: require("./assets/industries/Insurance.webp"),
    desc: "Improving risk assessment, claims processing, and customer engagement through advanced analytics and AI solutions.",
  },
  {
    id: 5,
    title: "Hospitality",
    img: require("./assets/industries/Hospitality.webp"),
    desc: "Enhancing guest experiences with smart booking systems, personalized services, and efficient resource management.",
  },
  {
    id: 6,
    title: "Manufacturing",
    img: require("./assets/industries/Manufacturing.webp"),
    desc: "Driving automation, predictive maintenance, and operational efficiency with AI, machine learning, and IoT technologies.",
  },
  {
    id: 7,
    title: "On Demand",
    img: require("./assets/industries/On Demand.webp"),
    desc: "Empowering on-demand platforms with intelligent matchmaking, real-time tracking, and user-centric analytics.",
  },
  {
    id: 8,
    title: "Food & Restaurant",
    img: require("./assets/industries/Food & Restaurant.webp"),
    desc: "Optimizing food services with smart inventory, personalized menus, and efficient order management solutions.",
  },
  {
    id: 9,
    title: "Logistics",
    img: require("./assets/industries/Logistics & Supply Chain.webp"),
    desc: "Enhancing logistics, inventory, and supply chain management with AI and IoT-enabled tracking and optimization.",
  },
  // {
  //   id: 10,
  //   title: "Education",
  //   img: require("./assets/industries/Education.webp"),
  //   desc: "Personalized learning experiences, predictive analytics for student outcomes, and automated administrative processes using AI and ML.",
  // },
  // {
  //   id: 11,
  //   title: "Game",
  //   img: require("./assets/industries/Game.webp"),
  //   desc: "Elevating game development with AI-enhanced graphics, player behavior analytics, and immersive experiences.",
  // },
];

// testimonials
export const testimonials = [
  {
    id: 1,
    name: "Rachel M",
    designation: "CTO, FinTech Startup",
    img: "",
    review:
      "Their AI team helped us deploy intelligent assistants that completely transformed our customer service workflow. The chatbot they developed saved us 50% on support costs, and their ML integration gave us real-time insights that drove key decisions. Their approach to AI isn’t just technical—it’s strategic.",
  },
  {
    id: 2,
    name: "David L",
    designation: "Co-Founder, E-Commerce Brand",
    img: "",
    review:
      "From design to launch, their mobile team exceeded expectations. The Android and iOS apps they built for our retail platform are smooth, scalable, and beautifully designed. Their attention to UX made a noticeable difference in our conversion rates. Highly recommend!",
  },
  {
    id: 3,
    name: "Anita R",
    designation: "Product Manager, DeFi Startup",
    img: "",
    review:
      "We wanted to build a secure DApp with smart contract capabilities—and they absolutely delivered. Their blockchain team was transparent, fast, and incredibly knowledgeable. The platform is now live, and we've had zero issues with smart contract functionality. These guys know Web3 inside and out.",
  },
  {
    id: 4,
    name: "Michael B",
    designation: "CEO, SaaS Company",
    img: "",
    review:
      "They took our raw idea and transformed it into an intuitive, sleek product that our users love. Their UI/UX designers are true experts at blending form and function. We saw a 30% increase in user engagement within the first month after launch.",
  },
];

// portfolio images (web development)
export const webPortfolio = [
  {
    id: 2,
    img: require("./assets/portfolio/web-development/cold-creekcap.webp"),
    title: "Cold Creekcap",
    link: "https://www.coldcreekcap.com",
  },
  {
    id: 3,
    img: require("./assets/portfolio/web-development/think-reality.webp"),
    title: "Think Reality",
    link: "https://thinkrealty.ae",
  },
  {
    id: 4,
    img: require("./assets/portfolio/web-development/akash-mega-mart.webp"),
    title: "Akash Mega Mart",
    link: "https://akashmegamart.com/",
  },
  {
    id: 5,
    img: require("./assets/portfolio/web-development/midwam.webp"),
    title: "Midwam – Immersive Experience Design Company",
    link: "https://www.midwam.com/en/about",
  },
];

// portfolio images (app development)
export const appPortfolio = [
  {
    id: 1,
    img: require("./assets/portfolio/app-development/akash_mega_mart-app.webp"),
    title: "Akash Mega Mart Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.app.akash_mega_mart",
  },
  {
    id: 2,
    img: require("./assets/portfolio/app-development/feelit_app.webp"),
    title: "FeelIt Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.feelit.feelit_app",
  },
  {
    id: 3,
    img: require("./assets/portfolio/app-development/klikomics.webp"),
    title: "Klikomics Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
  },
  {
    id: 4,
    img: require("./assets/portfolio/app-development/autosnap-app.webp"),
    title: "AutoSnap Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
  },
  {
    id: 5,
    img: require("./assets/portfolio/app-development/rentop.webp"),
    title: "Rentop Bike and Car",
    link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
  },
];
