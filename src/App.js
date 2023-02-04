import Header from "./header/Header";
import HeroSection from "./hero/HeroSection";
import ScrollContent from "./ScrollContent";
import Footer from "./pages/Footer";
import MobileToggle from "./MobileToggle";
import AOS from 'aos';
import React from 'react';
import Helper from "./helpers/Helper";

class App extends React.Component{

    constructor(props) {
        super(props);
        this.onScrollHandle = this.onScrollHandle.bind(this);
        this.helper = new Helper();
        this.navLinks = null;
    }

    componentDidMount () {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out'
        });

        this.navLinks = this.helper.select('#navbar .scrollto', true);
        this.helper.onscroll(document, this.onScrollHandle);

        if (window.location.hash) {
            if (this.helper.select(window.location.hash)) {
                this.helper.scrollTo(window.location.hash)
            }
        }
    }

    onScrollHandle () {
        let position = window.scrollY + 200;
        this.navLinks.forEach(navbarLink => {
            if (!navbarLink.hash) return;
            let section = this.helper.select(navbarLink.hash);
            if (!section) return;
            if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
                navbarLink.classList.add('active');
            } else {
                navbarLink.classList.remove('active');
            }
        });
        this.helper.toggleBackToTop();
    }

    render() {
        return (
            <div>
                <MobileToggle/>
                <Header/>
                <HeroSection/>
                <ScrollContent/>
                <Footer/>
                <a href="#" className="back-to-top d-flex align-items-center justify-content-center">
                    <i className="bi bi-arrow-up-short"></i>
                </a>
            </div>
        );
    }
}

export default App;
