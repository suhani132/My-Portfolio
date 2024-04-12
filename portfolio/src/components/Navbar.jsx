import logo2 from "../assets/logo2.jpg"
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-8">
        <div className="flex flex-shrink-0 items-center">
            <img className=" ml-10 wx-2 w-90 lg:mx-16" src={logo2} alt="" />
        </div>
         <div className="m-8 flex items-center justify-between gap-4 text-2xl">
            <a href=""> 
            <FaLinkedin></FaLinkedin>
            </a>
            <a href="https://github.com/suhani132">
            <FaGithub></FaGithub>
            </a>
            <a href="https://www.instagram.com/_suhani132/">
            <FaInstagram></FaInstagram>
            </a>
            <a href="">
            <FaTwitter></FaTwitter>
            </a>
        </div> 
    </nav>
  );
};

export default Navbar
