import React, { useEffect, useState } from "react";
import vid from "../../assets/vids/banner.mp4";

import { Link } from "react-router-dom";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { FaRobot, FaCode, FaChartLine, FaArrowRight } from "react-icons/fa";

// import bannerImg from "../../assets/landing-about.webp";
const bannerImg = "/assets/landing-about.webp"; // Served from public/assets

const Banner = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Determine loading state based on mobile/desktop
    if (isMobile) {
      setIsVideoLoaded(true);
    } else {
      // Fallback timer in case video takes too long or fails
      const timer = setTimeout(() => {
        setIsVideoLoaded(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isMobile]);

  const features = [
    { icon: <FaRobot />, text: "AI & Machine Learning" },
    { icon: <FaCode />, text: "Web & Mobile Development" },
    { icon: <FaChartLine />, text: "Digital Transformation" }
  ];

  return (
    <LazyMotion features={domAnimation}>
      <div id="banner" className="min-h-screen relative overflow-hidden">
        {/* Video Background with Improved Overlay */}
        <div className="absolute inset-0 w-full h-full banner">
          {isMobile ? (
            <img
              src={bannerImg}
              alt="Banner"
              fetchPriority="high"
              className="w-full h-full object-cover"
            />
          ) : (
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              poster={bannerImg}
              onLoadedData={() => setIsVideoLoaded(true)}
              className="w-full h-full object-cover"
              style={{ objectFit: "cover" }}
            >
              <source src={vid} type="video/mp4" />
            </video>
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
        </div>

        {/* Content Container */}
        <div className="absolute inset-0 flex items-center">
          <div className="wrapper flex text-center items-center gap-10">
            {/* Text Content */}
            <m.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVideoLoaded ? 1 : 0, y: isVideoLoaded ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col items-center justify-center z-10"
            >
              <span className="px-4 py-1 bg-primary/20 text-primary rounded-full text-sm font-bold mb-6">
                Welcome to Dextralogic AI Solutions
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Empowering Your <span className="text-primary">Digital</span> Transformation
              </h1>

              <p className="text-lg text-white max-w-7xl mx-auto mb-8">
                Are you looking to scale with AI-powered automation, launch a new
                mobile or web app, explore blockchain solutions, or elevate your
                UI/UX design? We're your technology partner for the future.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                {features.map((feature, index) => (
                  <m.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isVideoLoaded ? 1 : 0, y: isVideoLoaded ? 0 : 20 }}
                    transition={{ duration: 0.5, delay: 0.4 + (index * 0.2) }}
                    className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
                  >
                    <span className="text-primary">{feature.icon}</span>
                    <span className="text-white text-sm">{feature.text}</span>
                  </m.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link to="/contact-us" className="px-6 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-full transition-colors flex items-center gap-2">
                  Get Started Now <FaArrowRight />
                </Link>
                <Link to="/services" className="px-6 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-medium rounded-full transition-colors">
                  Explore Services
                </Link>
              </div>
            </m.div>

            {/* Robot Image */}
            {/* <m.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isVideoLoaded ? 1 : 0, scale: isVideoLoaded ? 1 : 0.8 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hidden lg:block relative"
          >
            <m.img
              animate={{ 
                y: [0, -20, 0],
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 4,
                ease: "easeInOut"
              }}
              src={robot}
              className="h-[80vh] w-fit object-contain z-10"
              alt="AI Robot"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20rem] h-[20rem] bg-primary/20 rounded-full blur-3xl -z-10"></div>
          </m.div> */}
          </div>
        </div>

        {/* Scroll Indicator */}
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVideoLoaded ? 1 : 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-white/70 text-sm mb-2">Scroll to explore</span>
          <m.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          >
            <m.div
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 bg-white rounded-full mt-2"
            />
          </m.div>
        </m.div>
      </div>
    </LazyMotion>
  );
};

export default Banner;