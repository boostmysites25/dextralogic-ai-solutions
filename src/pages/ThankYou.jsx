import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi";

const ThankYou = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative">
      {/* Background elements */}
      <div className="blurred-red-circle h-[25rem] w-[25rem] top-[5rem] right-[10%] -z-10"></div>
      <div className="blurred-red-circle h-[20rem] w-[20rem] bottom-[10%] left-[5%] -z-10"></div>
      
      <div className="max-w-3xl w-full space-y-8">
        <div 
          className="bg-white p-8 sm:p-12 rounded-2xl shadow-xl border border-primary/10"
          data-aos="fade-up"
        >
          <div className="text-center">
            <div className="flex justify-center">
              <FaCheckCircle className="text-primary text-7xl sm:text-8xl mb-6 animate-pulse" />
            </div>
            
            <h1 className="heading mb-4">Thank You for Contacting Us!</h1>
            
            <p className="description mb-8">
              We've received your message and appreciate your interest in our services. 
              Our team will review your inquiry and get back to you as soon as possible, 
              typically within 24-48 business hours.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/" className="primary-btn">
                Return to Home
              </Link>
              
              <Link to="/services" className="secondary-btn">
                Explore Our Services
              </Link>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">What Happens Next?</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 rounded-lg bg-background">
                  <div className="font-bold text-primary text-xl mb-2">1</div>
                  <h4 className="font-medium mb-2">Review</h4>
                  <p className="text-sm">Our team will carefully review your message</p>
                </div>
                
                <div className="p-4 rounded-lg bg-background">
                  <div className="font-bold text-primary text-xl mb-2">2</div>
                  <h4 className="font-medium mb-2">Contact</h4>
                  <p className="text-sm">We'll reach out to discuss your requirements</p>
                </div>
                
                <div className="p-4 rounded-lg bg-background">
                  <div className="font-bold text-primary text-xl mb-2">3</div>
                  <h4 className="font-medium mb-2">Solution</h4>
                  <p className="text-sm">We'll propose the best solution for your needs</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Link to="/" className="inline-flex items-center text-primary hover:text-secondary transition-colors">
              <BiArrowBack className="mr-2" /> Back to website
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;