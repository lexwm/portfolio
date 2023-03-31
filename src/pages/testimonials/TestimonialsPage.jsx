import React from 'react';
import Swiper, { Navigation, Pagination } from 'swiper';
import TestimonialItem from "./TestimonialItem";
import testimonials from "../../helpers/testimonials";

class TestimonialsPage extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        new Swiper('.testimonials-slider', {
            modules: [Navigation, Pagination],
            speed: 600,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false
            },
            slidesPerView: 'auto',
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },

                1200: {
                    slidesPerView: 3,
                    spaceBetween: 20
                }
            }
        });
    }

    render() {
        return (
            <section id="testimonials" className="testimonials section-bg">
                <div className="container">
                    <div className="section-title">
                        <h2>Testimonials</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit
                            sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias
                            ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>
                    <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
                        <div className="swiper-wrapper">
                            {
                                testimonials.map(item => (
                                    <TestimonialItem item={item} />
                                ))
                            }
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
            </section>
        );
    }
}

export default TestimonialsPage;