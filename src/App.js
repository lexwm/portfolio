import Header from "./header/Header";
import HeroSection from "./hero/HeroSection";
import ScrollContent from "./ScrollContent";
import AOS from 'aos';
import React from 'react';
import Helper from "./Helper";

class App extends React.Component{

    componentDidMount () {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out'
        });

        document.addEventListener('scroll', this.setNavBarLinksActive, true);
    }

    setNavBarLinksActive () {
        let helper = new Helper();
        let position = window.scrollY + 200;
        helper.select('#navbar .scrollto', true).forEach(navbarlink => {
            if (!navbarlink.hash) return;
            let section = helper.select(navbarlink.hash);
            if (!section) return;
            if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
                navbarlink.classList.add('active');
            } else {
                navbarlink.classList.remove('active');
            }
        });
        helper.toggleBackToTop();
    }

    render() {
        return (
            <div>
                <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>
                <Header/>
                <HeroSection/>
                <ScrollContent/>
                <a href="#" className="back-to-top d-flex align-items-center justify-content-center">
                    <i className="bi bi-arrow-up-short"></i>
                </a>
            </div>
        );
    }
}

export default App;
