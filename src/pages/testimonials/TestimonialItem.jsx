import React from 'react';

class TestimonialItem extends React.Component {

    constructor(props) {
        super(props);
        this.item = props.item;
    }

    render() {
        return (
            <div className="swiper-slide">
                <div className="testimonial-item" data-aos="fade-up" data-aos-delay={this.item.delay}>
                    <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                        {this.item.text}
                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                    <img src={this.item.src} className="testimonial-img" alt="" />
                    <h3>{this.item.name}</h3>
                    <h4>{this.item.position}</h4>
                </div>
            </div>
        )
    }
}

export default TestimonialItem;