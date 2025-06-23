import React, { lazy, useState } from "react";
import Header from "../components/Website/Header";
import Footer from "../components/Website/Footer";
import map from "../assets/map.webp";
import { clientDetails } from "../constants";
import { FaEnvelope, FaPhoneAlt, FaCheck } from "react-icons/fa";
import SEO from "../components/SEO";
import {
  FaMapLocationDot,
  FaRegClock,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaHeadset,
  FaUserTie,
  FaComments,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import banner from "../assets/contact-us-banner.webp";
import { InquiryForm } from "../components/GetInTouch";

const PageBanner = lazy(() => import("../components/Website/PageBanner"));

const ContactUs = () => {
  const [activeTab, setActiveTab] = useState("general");

  const contactCategories = [
    {
      id: "general",
      title: "General Inquiries",
      description:
        "For general questions about our services and how we can help your business.",
      icon: <FaComments />,
    },
    {
      id: "support",
      title: "Technical Support",
      description:
        "Need help with an existing project? Our support team is ready to assist you.",
      icon: <FaHeadset />,
    },
    {
      id: "careers",
      title: "Careers",
      description:
        "Interested in joining our team? Mention 'Job Application' in your message.",
      icon: <FaUserTie />,
    },
  ];

  const activeCategory = contactCategories.find(
    (category) => category.id === activeTab
  );

  const faqItems = [
    {
      question: "What services does Dextralogic offer?",
      answer:
        "Dextralogic offers a comprehensive range of technology solutions including AI development, web and mobile application development, cloud services, blockchain solutions, and digital transformation consulting.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on complexity and requirements. A simple website might take 4-6 weeks, while complex enterprise applications can take several months. We provide detailed timelines during our initial consultation.",
    },
    {
      question: "Do you offer ongoing maintenance and support?",
      answer:
        "Yes, we offer various support and maintenance packages to ensure your digital solutions remain secure, up-to-date, and performing optimally after launch.",
    },
    {
      question: "How do you handle project pricing?",
      answer:
        "We offer transparent pricing based on project requirements. Depending on the nature of work, we may use fixed-price models, time and materials pricing, or retainer arrangements. We provide detailed quotes after understanding your specific needs.",
    },
  ];

  return (
    <>
      <SEO 
        title="Contact Us" 
        description="Get in touch with Dextralogic AI solutions. Let's start a conversation about transforming your business with technology."
        keywords="contact Dextralogic, technology consultation, AI solutions contact, tech support, business inquiry, project consultation"
        canonicalUrl="https://dextralogic.com/contact-us"
      />
      <Header />
      <PageBanner
        title={"Contact Us"}
        banner={banner}
        position={"left"}
        description="Let's start a conversation about transforming your business with technology."
      />

      {/* Elegant Contact Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="wrapper">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span data-aos="fade-up" className="text-primary font-semibold">
              GET IN TOUCH
            </span>
            <h1 data-aos="fade-up" className="text-4xl font-bold mt-2 mb-4">
              Let's Build Something Amazing Together
            </h1>
            <p data-aos="fade-up" className="text-lg text-gray-600">
              Whether you have a question about our services, need a custom
              quote, or want to discuss how we can help your business grow, our
              team is ready to answer all your questions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form Card */}
            <div
              data-aos="fade-right"
              className="bg-white rounded-xl shadow-xl p-8 border border-gray-100"
            >
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <InquiryForm />
            </div>

            {/* Contact Info Card */}
            <div data-aos="fade-left">
              {/* Contact Categories */}
              <div className="bg-white rounded-xl shadow-xl overflow-hidden mb-8">
                <div className="flex border-b">
                  {contactCategories.map((category) => (
                    <button
                      key={category.id}
                      className={`flex-1 py-4 px-4 text-center font-medium transition-colors ${
                        activeTab === category.id
                          ? "bg-primary text-white"
                          : "hover:bg-gray-50"
                      }`}
                      onClick={() => setActiveTab(category.id)}
                    >
                      {category.title}
                    </button>
                  ))}
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      {activeCategory.icon}
                    </div>
                    <h3 className="text-xl font-semibold">
                      {activeCategory.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 mb-6">
                    {activeCategory.description}
                  </p>

                  <div className="space-y-4 bg-gray-50 p-5 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                        <FaEnvelope />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <a
                          href={`mailto:${clientDetails.email}`}
                          className="font-medium hover:text-primary transition-colors"
                        >
                          {clientDetails.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                        <FaPhoneAlt />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Phone</p>
                        <a
                          href={`tel:${clientDetails.phone}`}
                          className="font-medium hover:text-primary transition-colors"
                        >
                          {clientDetails.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Information */}
              <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Our Office</h3>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                        <FaMapLocationDot />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Address</p>
                        <p className="font-medium">{clientDetails.address}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                        <FaRegClock />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Business Hours</p>
                        <p className="font-medium">
                          Monday - Friday: 9:00 AM - 6:00 PM
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <p className="text-sm text-gray-500 mb-3">
                      Connect With Us
                    </p>
                    <div className="flex gap-3">
                      <Link
                        to=""
                        className="w-9 h-9 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                      >
                        <FaLinkedin />
                      </Link>
                      <Link
                        to=""
                        className="w-9 h-9 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                      >
                        <FaFacebook />
                      </Link>
                      <Link
                        to=""
                        className="w-9 h-9 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                      >
                        <FaInstagram />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section with Elegant Overlay */}
      <section
        style={{ backgroundImage: `url(${map})` }}
        className="relative bg-center bg-cover py-20"
      >
        <div className="absolute inset-0 bg-primary/80"></div>

        <div className="wrapper relative z-10">
          <div className="grid md:grid-cols-1 gap-12">
            <div
              data-aos="fade-right"
              className="bg-white rounded-xl shadow-xl p-8"
            >
              <h2 className="text-2xl font-bold mb-6">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                {faqItems.map((item, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-100 pb-6 last:border-0 last:pb-0"
                  >
                    <h3 className="text-lg font-semibold mb-2">
                      {item.question}
                    </h3>
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            <div
              data-aos="fade-left"
              className="bg-white rounded-xl shadow-xl p-8 h-fit"
            >
              <h2 className="text-2xl font-bold mb-6">Why Partner With Us</h2>

              <div className="space-y-4">
                {[
                  "Expert team with deep technical knowledge",
                  "Transparent communication throughout your project",
                  "Tailored solutions designed for your specific needs",
                  "Ongoing support and maintenance services",
                  "Commitment to delivering on time and within budget",
                  "Strategic approach focused on business outcomes",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center text-white text-xs">
                      <FaCheck />
                    </div>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactUs;
