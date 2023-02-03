function PortfolioWrap(props) {
    let cssClass = "col-lg-4 col-md-6 portfolio-item " + props.filter;
    return (
        <div className={cssClass}>
            <div className="portfolio-wrap">
                <img src={props.image} className="img-fluid" alt="" />
                <div className="portfolio-links">
                    <a href={props.image} data-gallery="portfolioGallery"
                       className="portfolio-lightbox" title={props.title}><i className="bx bx-plus"></i></a>
                    <a href="/portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
            </div>
        </div>
    );
}

export default PortfolioWrap;