import React from 'react';
import Isotope from 'isotope-layout';
import AOS from 'aos';
import PortfolioWrap from "./PortfolioWrap";
import Helper from "../../helpers/Helper";
import 'photoswipe/dist/photoswipe.css'
import { Gallery } from 'react-photoswipe-gallery'

const filters = [
    {
        name: "All",
        filter: "*"
    },
    {
        name: "App",
        filter: ".filter-app"
    },
    {
        name: "Card",
        filter: ".filter-card"
    },
    {
        name: "Web",
        filter: ".filter-web"
    }
];

const portfolio = [
    {
        image: "/img/portfolio/portfolio-1.jpg",
        title: "App 1",
        filter: "filter-app"
    },
    {
        image: "/img/portfolio/portfolio-2.jpg",
        title: "Web 1",
        filter: "filter-web"
    },
    {
        image: "/img/portfolio/portfolio-3.jpg",
        title: "App 2",
        filter: "filter-app"
    },
    {
        image: "/img/portfolio/portfolio-4.jpg",
        title: "Card 1",
        filter: "filter-card"
    },
    {
        image: "/img/portfolio/portfolio-5.jpg",
        title: "Web 2",
        filter: "filter-web"
    },
    {
        image: "/img/portfolio/portfolio-6.jpg",
        title: "App 3",
        filter: "filter-app"
    },
    {
        image: "/img/portfolio/portfolio-7.jpg",
        title: "Card 2",
        filter: "filter-card"
    },
    {
        image: "/img/portfolio/portfolio-8.jpg",
        title: "Card 3",
        filter: "filter-card"
    },
    {
        image: "/img/portfolio/portfolio-9.jpg",
        title: "Web 3",
        filter: "filter-web"
    }
];

class PortfolioPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.portfolioContainer = null;
        this.portfolioIsotope = null;
        this.portfolioFilters = null;
        this.helper = new Helper();
    }

    handleClick(e) {
        this.setActive(e);

        this.portfolioIsotope.arrange({
            filter: e.target.dataset.filter
        });
    }

    setActive(e) {
        this.portfolioFilters.forEach(function(el) {
            el.classList.remove('filter-active');
        });
        e.currentTarget.classList.add('filter-active');
    }

    componentDidMount() {
        this.portfolioContainer = this.helper.select('.portfolio-container');
        this.portfolioFilters = this.helper.select('#portfolio-flters li', true);
        this.portfolioIsotope = new Isotope(this.portfolioContainer, {
            itemSelector: '.portfolio-item'
        });
        this.portfolioIsotope.on('arrangeComplete', function() {
            AOS.refresh()
        });
    }

    componentWillUnmount() {
        setTimeout(() => {
            this.portfolioFilters[0].click();
        }, 100);
    }

    render() {
        return (
            <section id="portfolio" className="portfolio section-bg">
                <div className="container">

                    <div className="section-title">
                        <h2>Portfolio</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit
                            sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias
                            ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div className="row" data-aos="fade-up">
                        <div className="col-lg-12 d-flex justify-content-center">
                            <ul id="portfolio-flters">
                                {
                                    filters.map(item => (
                                        <li key={item.name} data-filter={item.filter} onClick={this.handleClick}>{item.name}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>

                    <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">
                        <Gallery withCaption>
                            {
                                portfolio.map(item => (
                                    <PortfolioWrap key={item.image} image={item.image} title={item.title} filter={item.filter}/>
                                ))
                            }
                        </Gallery>
                    </div>
                </div>
            </section>
        );
    }
}

export default PortfolioPage;