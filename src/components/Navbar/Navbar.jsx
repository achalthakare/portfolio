import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

      const section = document.getElementById(sectionId);
  if(section){
    section.scrollIntoView({behavior:"smooth"});
  }
  };



  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  return (
    <nav
      style={isScrolled ? { backgroundColor: "bg-black/50 z-50" } : {}}
      className={`w-full top-0 z-50 fixed transition duration-300 px-[7vw] lg:px-[20vw] ${
        isScrolled
          ?" backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="text-white py-5 flex justify-between items-center">
        <div className="text-lg font-semibold cursor-pointer">
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">Achal</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-white">Thakare</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-[#8245ec] ${
                activeSection === item.id ? "text-[#8245ec]" : ""
              }`}
            >
              <button
                className="cursor-pointer"
                onClick={() => handleMenuItemClick(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social media icons */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/achalthakare"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaGithub size={24}></FaGithub>
          </a>
          <a
            href="https://www.linkedin.com/in/achal-thakare-a6b665257/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaLinkedin size={24}></FaLinkedin>
          </a>
        </div>

        {/* Mobile menu icons */}
        <div className="md:hidden">
          {
          isOpen ? 
          (
            <FiX className="text-3xl text-[#8245ec] cursor-pointer" onClick={()=> setIsOpen(false)}></FiX>
          ):(
            <FiMenu className="text-3xl text-[#8245ec] cursor-pointer " onClick={()=> setIsOpen(true)}></FiMenu>
          )
           }</div>
      </div>


    {isOpen && (
      <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-black opacity-70 backdrop-blur-md z-50 rounded-lg shadow-lg p-5">
        <ul className="flex flex-col items-center space-y-4 text-gray-300">
          {menuItems.map((item)=>(
            <li key={item.id} className={`cursor-pointer hover:text-white ${activeSection ===item.id ? "text-[#8245ec]" : ""}`} onClick={()=> handleMenuItemClick(item.id)}>
              <button>{item.label}</button>
            </li>
          ))}
            <div className="flex space-x-4">
          <a
            href="https://github.com/achalthakare"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaGithub size={24}></FaGithub>
          </a>
          <a
            href="https://www.linkedin.com/in/achal-thakare-a6b665257/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaLinkedin size={24}></FaLinkedin>
          </a>
        </div>
        </ul>
      </div>
     
    )}  
    </nav>
  );
};

export default Navbar;
