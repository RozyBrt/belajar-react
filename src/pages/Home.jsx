import parse from 'html-react-parser';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Tutors from '../components/Tutors';
import Partners from '../components/Partners';
import Contact from '../components/Contact';

import { homeSection } from '../data/HomeSection';
import { coursesSection } from '../data/CoursesSection';
import { tutorsSection, tutorsList } from '../data/TutorsSection';
import { partnersSections, partnersList } from '../data/PartnersSections';
import { contactSection } from '../data/ContactSection';

import '../styles/Home.css';


function Home() {
    return (
        <>
            <Navbar />
            <div className="wrapper">
                {/* home */}
                <section id="home">
                    <img src={homeSection.image} />
                    <div className="kolom">
                        {parse(homeSection.content)}
                    </div>
                </section>

                {/* online courses */}
                <section id="courses">
                    <div className="kolom">
                        {parse(coursesSection.content)}
                    </div>
                    <img src={coursesSection.image} />
                </section>

                {/* bagian tutors */}
                <section id="tutors">
                    <div className="tengah">
                        <div className="kolom">
                            {parse(tutorsSection.content)}
                        </div>

                        <Tutors tutorsList={tutorsList} />

                    </div>
                </section>

                {/* bagian partners */}
                <section id="partners">
                    <div className="tengah">
                        <div className="kolom">
                            {parse(partnersSections.content)}
                        </div>
                        <Partners partnersList={partnersList}/>
                    </div>
                </section>
            </div>
            <Contact contactSection={contactSection} />
            <Footer />
        </>
    )
}

export default Home
