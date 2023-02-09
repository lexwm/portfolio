

function FactsBox(props) {
    return (
        <div
            className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
            data-aos="fade-up"
            data-aos-delay={props.item.delay}
        >
            <div className="count-box">
                <i className={props.item.icon}></i>
                <span
                    data-purecounter-start="0"
                    data-purecounter-end={props.item.count}
                    data-purecounter-duration="1"
                    className="purecounter">0</span>
                <p>
                    <strong>{props.item.title}</strong> {props.item.text}
                </p>
            </div>
        </div>
    );
}

export default FactsBox;