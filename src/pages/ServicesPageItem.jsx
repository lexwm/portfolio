
function ServicesPageItem (props) {
    return (
        <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay={props.item.delay}>
            <div className="icon"><i className={props.item.icon}></i></div>
            <h4 className="title"><a href="#services">{props.item.title}</a></h4>
            <p className="description">{props.item.description}</p>
        </div>
    );
}

export default ServicesPageItem;