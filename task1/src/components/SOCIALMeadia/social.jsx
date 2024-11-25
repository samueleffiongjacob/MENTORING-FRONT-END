import React from "react";
import {
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaTiktok,
} from "react-icons/fa";
import "../../assets/styles/SocialMediaBar.css"; 

const SocialMediaBar = () => {
  const socialLinks = [
    { icon: <FaYoutube />, link: "https://youtube.com", className: "youtube-brand" },
    { icon: <FaTwitter />, link: "https://twitter.com", className: "twitter" },
    { icon: <FaYoutube />, link: "https://youtube.com", className: "youtube" },
    { icon: <FaInstagram />, link: "https://instagram.com", className: "instagram" },
    { icon: <FaLinkedin />, link: "https://linkedin.com", className: "linkedin" },
    { icon: <FaFacebook />, link: "https://facebook.com", className: "facebook" },
    { icon: <FaTiktok />, link: "https://tiktok.com", className: "tiktok" },
    { icon: <FaTwitter />, link: "https://twitter.com", className: "twitter" },
  ];

  return (
    <div className="social-media-bar">
      <span className="social-text">Follow us on socials</span>
      <div className="social-icons">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`social-icon ${social.className}`}
            title={`Visit us on ${social.className}`}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaBar;



