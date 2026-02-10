import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-4">
      {[
        {
          icon: <FaFacebookF />,
          link: "https://facebook.com",
        },
        {
          icon: <FaTwitter />,
          link: "https://twitter.com",
        },
        {
          icon: <FaInstagram />,
          link: "https://instagram.com",
        },
        {
          icon: <FaLinkedinIn />,
          link: "https://linkedin.com",
        },
        {
          icon: <FaWhatsapp />,
          link: "https://wa.me/YOUR_NUMBER",
        },
      ].map(({ icon, link }, idx) => (
        <a
          key={idx}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 dark:text-white text-2xl transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-indigo-500 to-cyan-400"
        >
          {icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
