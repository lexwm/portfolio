import React from "react";
import { Item } from 'react-photoswipe-gallery'

class PortfolioWrap extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cssClass: "col-lg-4 col-md-6 portfolio-item " + props.filter,
            image : props.image,
            title: props.title,
        };
    }

    render() {
        return (
            <div className={this.state.cssClass}>
                <Item
                    caption={this.state.title}
                    original={this.state.image}
                    thumbnail={this.state.image}
                    width="1024"
                    height="768"
                >
                    {({ref, open}) => (
                        <div className="portfolio-wrap">
                            <img ref={ref} onClick={open} src={this.state.image} className="img-fluid"/>
                            <div className="portfolio-links">
                                <a onClick={open} data-gallery="portfolioGallery"
                                   className="portfolio-lightbox" title={this.state.title}><i
                                    className="bx bx-plus"></i></a>
                                <a href="#portfolio" title="More Details"><i className="bx bx-link"></i></a>
                            </div>
                        </div>
                    )}
                </Item>
            </div>
        )
    }
}

export default PortfolioWrap;