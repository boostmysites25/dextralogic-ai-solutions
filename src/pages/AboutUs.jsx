import React, { lazy, useRef } from "react";
import Header from "../components/Website/Header";
import Footer from "../components/Website/Footer";
import img1 from "../assets/aboutus-1.webp";
import bannerImg from "../assets/about-us-banner.webp";
import mission from "../assets/mission.png";
import vision from "../assets/vision.png";
import GetInTouch from "../components/GetInTouch";
import CallToAction from "../components/CallToAction";

const PageBanner = lazy(() => import("../components/Website/PageBanner"));
const BrandLogos = lazy(() => import("../components/BrandLogos"));

const AboutUs = () => {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <Header />
      <PageBanner
        position="left"
        title={"About Us"}
        banner={bannerImg}
        description="Empowering businesses with innovative technology solutions to thrive in the digital era."
      />

      {/* Hero Section */}
      <section className="py-[4rem] wrapper grid gap-12 lg:grid-cols-2 items-center">
        <div className="flex flex-col">
          <span
            data-aos="fade-right"
            className="text-primary font-semibold mb-2"
          >
            OUR STORY
          </span>
          <h1 data-aos="fade-right" className="text-4xl font-bold mb-6">
            Shaping the Future with Technology Excellence
          </h1>
          <p data-aos="fade-right" className="text-lg leading-relaxed mb-8">
            At Dextralogic, we believe in building digital solutions that
            empower businesses to grow, adapt, and lead. We're not just a
            service provider—we're a team of passionate engineers, designers,
            and innovators who partner with companies worldwide to shape the
            future with technology.
          </p>
          <div data-aos="fade-right">
            <button onClick={scrollToContact} className="primary-btn">
              Partner With Us
            </button>
          </div>
        </div>
        <div
          data-aos="fade-left"
          className="relative rounded-xl overflow-hidden shadow-2xl"
        >
          <img
            loading="lazy"
            src={img1}
            alt="Dextralogic Team"
            className="w-full h-[450px] object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
            <div className="flex justify-between text-white">
              <div>
                <p className="text-3xl font-bold">3+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
              <div>
                <p className="text-3xl font-bold">30+</p>
                <p className="text-sm">Skilled Professionals</p>
              </div>
              <div>
                <p className="text-3xl font-bold">100%</p>
                <p className="text-sm">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-[4rem] bg-gray-50">
        <div className="wrapper">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span data-aos="fade-up" className="text-primary font-semibold">
              WHO WE ARE
            </span>
            <h2 data-aos="fade-up" className="text-3xl font-bold mt-2 mb-6">
              Our Journey of Innovation
            </h2>
            <p data-aos="fade-up" className="text-lg">
              We're a team of passionate technologists dedicated to transforming
              businesses through innovative digital solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div data-aos="fade-right">
              <div className="bg-white p-8 rounded-xl shadow-lg h-full">
                <h3 className="text-2xl font-bold mb-4">About Us</h3>
                <p className="mb-6 leading-relaxed">
                  At Dextralogic, we believe in building digital solutions that
                  empower businesses to grow, adapt, and lead. We're not just a
                  service provider—we're a team of passionate engineers,
                  designers, and innovators who partner with companies worldwide
                  to shape the future with technology.
                </p>
                <p className="leading-relaxed">
                  Our expertise spans across AI, mobile development, blockchain,
                  cloud computing, and UI/UX design. We combine technical
                  excellence with creative thinking to deliver solutions that
                  not only meet current needs but anticipate future challenges.
                </p>
              </div>
            </div>

            <div data-aos="fade-left">
              <div className="bg-white p-8 rounded-xl shadow-lg h-full">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="mb-6 leading-relaxed">
                  To deliver smart, scalable, and future-ready digital products
                  using the power of AI, mobile, blockchain, cloud, and design
                  excellence. We build to make a change and fuel the fire of
                  your business by implementing precisely crafted technologies.
                </p>
                <p className="leading-relaxed">
                  Through our global expertise in AI, Web3, blockchain, and the
                  development of web and mobile applications, we create scalable
                  systems that automate, optimize, and elevate your business to
                  its highest potential.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-[4rem]">
        <div className="wrapper">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span data-aos="fade-up" className="text-primary font-semibold">
              OUR ADVANTAGES
            </span>
            <h2 data-aos="fade-up" className="text-3xl font-bold mt-2 mb-6">
              Why Choose Us?
            </h2>
            <p data-aos="fade-up" className="text-lg">
              We combine technical expertise with business acumen to deliver
              solutions that drive real results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                id: 1,
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                ),
                title: "Expertise Across Technologies",
                desc: "Our team possesses deep knowledge in various domains, ensuring comprehensive solutions.",
              },
              {
                id: 2,
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                    />
                  </svg>
                ),
                title: "Tailored Solutions",
                desc: "We understand that each business is unique, and we provide customized solutions to meet your specific needs.",
              },
              {
                id: 3,
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                ),
                title: "Commitment to Quality",
                desc: "We adhere to industry best practices to deliver high-quality solutions that drive results.",
              },
              {
                id: 4,
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                ),
                title: "Customer-Centric Approach",
                desc: "Your satisfaction is our priority, and we work closely with you to achieve your business goals.",
              },
            ].map((item) => (
              <div
                key={item.id}
                data-aos="fade-up"
                data-aos-delay={item.id * 100}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-primary"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-[4rem] bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="wrapper">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span data-aos="fade-up" className="text-primary font-semibold">
              PARTNERSHIP
            </span>
            <h2 data-aos="fade-up" className="text-3xl font-bold mt-2 mb-6">
              Why Work With Us?
            </h2>
            <p data-aos="fade-up" className="text-lg">
              We're more than just a service provider—we're your technology
              partner committed to your success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div
              data-aos="fade-right"
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-primary/10 p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Innovation-First Approach
                  </h3>
                  <p>
                    We constantly explore emerging tech to keep your business
                    future-ready.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Global Experience</h3>
                  <p>
                    We've worked across industries and geographies, delivering
                    consistent value with each launch.
                  </p>
                </div>
              </div>
            </div>

            <div
              data-aos="fade-left"
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-primary/10 p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Collaborative Culture
                  </h3>
                  <p>
                    We treat every project like a partnership—transparent,
                    responsive, and tailored.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Focus on Results</h3>
                  <p>
                    We care about real outcomes—be it user growth, ROI, or
                    digital transformation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-[4rem]">
        <div className="wrapper">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span data-aos="fade-up" className="text-primary font-semibold">
              OUR PRINCIPLES
            </span>
            <h2 data-aos="fade-up" className="text-3xl font-bold mt-2 mb-6">
              Our Core Values
            </h2>
            <p data-aos="fade-up" className="text-lg">
              These principles guide everything we do and define who we are as
              an organization.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                id: 1,
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                ),
                title: "Innovation",
                desc: "We constantly push boundaries to create solutions that are ahead of the curve.",
              },
              {
                id: 2,
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                ),
                title: "Collaboration",
                desc: "We believe in the power of teamwork and partnership to achieve extraordinary results.",
              },
              {
                id: 3,
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                ),
                title: "Integrity",
                desc: "We uphold the highest ethical standards in all our interactions and deliverables.",
              },
              {
                id: 4,
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                ),
                title: "Excellence",
                desc: "We strive for excellence in everything we do, from code quality to client communication.",
              },
              {
                id: 5,
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
                title: "Adaptability",
                desc: "We embrace change and continuously evolve to meet the dynamic needs of the market.",
              },
              {
                id: 6,
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                ),
                title: "Client Focus",
                desc: "We prioritize our clients' success and build long-term relationships based on trust and results.",
              },
            ].map((item) => (
              <div
                key={item.id}
                data-aos="fade-up"
                data-aos-delay={item.id * 50}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-[4rem] bg-gray-900 text-white mb-[3rem]">
        <div className="wrapper">
          <div className="grid md:grid-cols-2 gap-10">
            <div
              data-aos="fade-right"
              className="bg-gradient-to-br from-primary/20 to-primary/5 p-8 rounded-xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={vision}
                  alt="Vision"
                  className="h-16 w-16 object-contain"
                />
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-lg leading-relaxed">
                To be the world's most trusted partner in technology innovation,
                empowering businesses of all sizes to thrive in an increasingly
                complex and competitive digital landscape.
              </p>
            </div>

            <div
              data-aos="fade-left"
              className="bg-gradient-to-br from-secondary/20 to-secondary/5 p-8 rounded-xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={mission}
                  alt="Mission"
                  className="h-16 w-16 object-contain"
                />
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-lg leading-relaxed">
                To deliver smart, scalable, and future-ready digital products
                using the power of AI, mobile, blockchain, cloud, and design
                excellence. We build to make a change and fuel the fire of your
                business by implementing precisely crafted technologies.
              </p>
            </div>
          </div>
        </div>
      </section>  

      <div ref={contactRef}>
        <CallToAction />
        <BrandLogos />
        <GetInTouch />
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
