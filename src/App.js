import Header from "./header/Header";
import HeroSection from "./hero/HeroSection";
import ScrollContent from "./ScrollContent";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";

function App() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out'
        });
    }, [])
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

export default App;
