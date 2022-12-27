// import { Link } from "react-router-dom";
import { Link } from "react-scroll";
import {
  FaFacebook,
  FaGooglePlus,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaHome,
  FaUserGraduate,
} from "react-icons/fa";
import { IoMdPhotos } from "react-icons/io";
import { AiFillProject } from "react-icons/ai";
import { BsPersonFill, BsFillFileEarmarkTextFill } from "react-icons/bs";
import "../../styles/common/SideBar.scss";

function SideBar() {
  return (
    <div>
      <header id="header">
        <div style={{ position: "relative" }}>
          <div class="profile-container">
            <img
              src="https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg"
              alt="Profile"
              width="250px"
            />

            <Link className="text-light" to="/">
              <p>Parth Sarkar</p>
            </Link>
            <div class="social-links">
              <Link className="twitter m5" to="/">
                <FaTwitter size={25} />
              </Link>
              <Link className="facebook m5" to="/">
                <FaFacebook size={25} />
              </Link>
              <Link className="instagram m5" to="/">
                <FaInstagram size={25} />
              </Link>
              <Link className="googleplus m5 " to="/">
                <FaGooglePlus size={25} />
              </Link>
              <Link className="linkedin m5" to="/">
                <FaLinkedin size={25} />
              </Link>
            </div>
          </div>
          <nav id="navbar" class="nav-menu navbar">
            <ul>
              <li>
                <Link className="nav-link scrollto " to="Hero" spy={true} smooth={true} offset={0} duration={500}>
                  <FaHome size={25} title="Home" />
                  <span style={{ paddingLeft: "10px" }}>Home</span>
                </Link>
              </li>
              <li>
                <Link className="nav-link scrollto " to="About" spy={true} smooth={true} offset={0} duration={500}>
                  <BsPersonFill size={25} title="about" />
                  <span style={{ paddingLeft: "10px" }}>About</span>
                </Link>
              </li>
              <li>
                <Link className="nav-link scrollto " to="Resume" spy={true} smooth={true} offset={0} duration={500}>
                  <BsFillFileEarmarkTextFill size={25} title="resume" />
                  <span style={{ paddingLeft: "10px" }}>Resume</span>
                </Link>
              </li>
              <li>
                <Link className="nav-link scrollto " to="Students" spy={true} smooth={true} offset={0} duration={500}>
                  <FaUserGraduate size={25} title="student" />
                  <span style={{ paddingLeft: "10px" }}>Students</span>
                </Link>
              </li>
              <li>
                <Link className="nav-link scrollto " to="Gallery" spy={true} smooth={true} offset={0} duration={500}>
                  <IoMdPhotos size={25} title="gallery" />
                  <span style={{ paddingLeft: "10px" }}>Gallery</span>
                </Link>
              </li>
              <li>
                <Link className="nav-link scrollto " to="Projects" spy={true} smooth={true} offset={0} duration={500}>
                  <AiFillProject size={25} title="projects" />
                  <span style={{ paddingLeft: "10px" }}>Projects</span>
                </Link>
              </li>
              <li>
                <Link className="nav-link scrollto " to="Contact" spy={true} smooth={true} offset={0} duration={500}>
                  <AiFillProject size={25} title="contact" />
                  <span style={{ paddingLeft: "10px" }}>Contact</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default SideBar;