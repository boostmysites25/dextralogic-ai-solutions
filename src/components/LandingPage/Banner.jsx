import { useState } from "react";
import vid from "../../assets/vids/banner.mp4";
import ReactPlayer from "react-player";
import robot from "../../assets/robot-img.png";
import { motion } from "framer-motion";
import { FaCode, FaMobileAlt, FaRocket, FaServer } from "react-icons/fa";
import { Link } from "react-scroll";

const Banner = ({ page }) => {
  const isWebDevelopment = Boolean(page === "web-development");
  const [isVideoLoaded, setVideoLoaded] = useState(false);

  // Features based on page type
  const features = isWebDevelopment
    ? [
        { icon: <FaCode />, text: "Custom Web Development" },
        { icon: <FaServer />, text: "Responsive Design" },
        { icon: <FaRocket />, text: "Performance Optimization" },
      ]
    : [
        { icon: <FaMobileAlt />, text: "Native App Development" },
        { icon: <FaCode />, text: "Cross-Platform Solutions" },
        { icon: <FaRocket />, text: "Seamless User Experience" },
      ];

  return (
    <div id="banner" className="min-h-screen relative overflow-hidden">
      {/* Video Background with Overlay */}
      <div className="absolute inset-0 w-full h-full banner">
        <ReactPlayer
          url={vid}
          playing
          loop
          muted
          width="100%"
          height="100%"
          playsinline
          onReady={() => setVideoLoaded(true)}
          pip={false}
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
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
      </div>

      {/* Content Container */}
      <div className="absolute inset-0 flex items-center">
        <div className="wrapper flex items-center gap-10">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: isVideoLoaded ? 1 : 0,
              y: isVideoLoaded ? 0 : 30,
            }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center text-center justify-center z-10"
          >
            <span className="px-4 py-1 bg-primary/20 text-primary rounded-full text-sm font-bold mb-6">
              {isWebDevelopment
                ? "Web Development Solutions"
                : "Mobile App Development"}
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {isWebDevelopment ? (
                <>
                  Websites That <span className="text-primary">Convert</span>{" "}
                  Visitors Into Customers
                </>
              ) : (
                <>
                  Apps That <span className="text-primary">Engage</span> Users
                  And Drive Growth
                </>
              )}
            </h1>

            <p className="text-lg text-white max-w-7xl mx-auto mb-8">
              {isWebDevelopment
                ? "Create a powerful online presence with our custom web development services. We build responsive, high-performance websites that deliver exceptional user experiences and drive business results."
                : "Transform your business with our custom mobile app development services. We create intuitive, feature-rich applications that engage users and provide seamless experiences across all devices."}
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: isVideoLoaded ? 1 : 0,
                    y: isVideoLoaded ? 0 : 20,
                  }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
                >
                  <span className="text-primary">{feature.icon}</span>
                  <span className="text-white text-sm">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                to="services"
                smooth={true}
                duration={800}
                offset={-80}
                className="px-6 py-3 primary-btn"
              >
                Explore Our Services
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={800}
                className="px-6 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-medium rounded-full transition-colors cursor-pointer"
              >
                Get a Free Quote
              </Link>
            </div>
          </motion.div>

          {/* Robot Image */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: isVideoLoaded ? 1 : 0,
              scale: isVideoLoaded ? 1 : 0.8,
            }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hidden lg:block relative"
          >
            <motion.img
              id="robot"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              }}
              src={robot}
              className="h-[80vh] w-fit object-contain z-10"
              alt="AI Robot"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20rem] h-[20rem] bg-primary/20 rounded-full blur-3xl -z-10"></div>
          </motion.div> */}
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
