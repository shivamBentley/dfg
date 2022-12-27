import { useState } from 'react'
import '../styles/MainContainer.scss'
import SideBar from './common/Sidebar';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import About from './page/About'
import Resume from './page/Resume'
import Students from './page/Students'
import Gallery from './page/Gallery'
import Projects from './page/Projects'
import Contact from './page/Contact'
import Hero from './page/Hero';
import Footer from './common/Footer'

function MainContainer({ children }) {

    const [toggler, setToggler] = useState(false)

    const handleChange = () => {
        setToggler(!toggler);
    }

    return (
        <div className='top-container'>
            <div className='sidebar' style={toggler ? { display: 'block' } : {}}>
                <SideBar />
            </div>
            <div className='child-content'>
                <Hero />
                <About />
                <Resume />
                <Students />
                <Gallery />
                <Projects />
                <Contact />
                <Footer />
            </div>
            <button
                className='sidebar-toggle-button'
                onClick={handleChange}
            >
                {toggler ?
                    <RxCross1 className="hidebutton" size={25} />
                    :
                    <GiHamburgerMenu className="hamburger" size={25} />
                }
            </button>
        </div>
    )
}

export default MainContainer