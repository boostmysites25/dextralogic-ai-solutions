import React, { useEffect, useState } from "react";
import vid from "../../assets/vids/banner.mp4";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import robot from "../../assets/robot-img.png";
import { motion } from "framer-motion";
import { FaRocket, FaRobot, FaCode, FaChartLine, FaArrowRight } from "react-icons/fa";

const Banner = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    // Simulate video loading
    const timer = setTimeout(() => {
      setIsVideoLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const features = [
    { icon: <FaRobot />, text: "AI & Machine Learning" },
    { icon: <FaCode />, text: "Web & Mobile Development" },
    { icon: <FaChartLine />, text: "Digital Transformation" }
  ];

  return (
    <div id="banner" className="min-h-screen relative overflow-hidden">
      {/* Video Background with Improved Overlay */}
      <div className="absolute inset-0 w-full h-full banner">
        <ReactPlayer
          url={vid}
          playing
          loop
          muted
          width="100%"
          height="100%"
          playsinline
          pip={false}
          onReady={() => setIsVideoLoaded(true)}
          config={{
            file: {
              attributes: {
                controlsList: "nodownload noplaybackrate",
                disablePictureInPicture: true,
                playsinline: true,
              },
            },
          }}
          controls={false}
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>

      {/* Content Container */}
      <div className="absolute inset-0 flex items-center">
        <div className="wrapper grid md:grid-cols-[1fr_auto] items-center gap-10">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVideoLoaded ? 1 : 0, y: isVideoLoaded ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-start justify-center z-10"
          >
            <span className="px-4 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6">
              Welcome to Dextralogic AI Solutions
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Empowering Your <span className="text-primary">Digital</span> Transformation
            </h1>
            
            <p className="text-lg text-gray-200 mb-8">
              Are you looking to scale with AI-powered automation, launch a new
              mobile or web app, explore blockchain solutions, or elevate your
              UI/UX design? We're your technology partner for the future.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isVideoLoaded ? 1 : 0, y: isVideoLoaded ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: 0.4 + (index * 0.2) }}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
                >
                  <span className="text-primary">{feature.icon}</span>
                  <span className="text-white text-sm">{feature.text}</span>
                </motion.div>
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
          </motion.div>
          
          {/* Robot Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isVideoLoaded ? 1 : 0, scale: isVideoLoaded ? 1 : 0.8 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hidden lg:block relative"
          >
            <motion.img
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
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: isVideoLoaded ? 1 : 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-white/70 text-sm mb-2">Scroll to explore</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-white rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Banner;