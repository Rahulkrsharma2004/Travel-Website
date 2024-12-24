import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-yellow-100 text-black pt-10 pb-6 mt-10 bottom-5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          
          {/* Logo Section */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold text-black">TravelExplorer</h2>
            <p className="text-sm mt-2">Explore the world with us.</p>
          </div>
          
          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8">
            <Link to="/" className="hover:text-yellow-200 transition duration-300">Home</Link>
            <Link to="/about" className="hover:text-yellow-200 transition duration-300">About</Link>
            <Link to="/services" className="hover:text-yellow-200 transition duration-300">Services</Link>
            <Link to="/contact" className="hover:text-yellow-200 transition duration-300">Contact</Link>
          </div>
          
          {/* Social Media Section */}
          <div className="flex space-x-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-yellow-200 transition duration-300">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-yellow-200 transition duration-300">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-yellow-200 transition duration-300">
              <FaInstagram size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-yellow-200 transition duration-300">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
        
        {/* Contact Section */}
        <div className="mt-8 text-center md:text-left">
          <div className="flex justify-center md:justify-start space-x-6">
            <div className="flex items-center space-x-2">
              <FaPhoneAlt className="text-black" />
              <p className="text-sm">8084906496</p>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-black" />
              <p className="text-sm">kumarrahulbasdiha@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="text-center mt-6 text-sm text-black">
        <p>&copy; 2024 TravelExplorer. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
