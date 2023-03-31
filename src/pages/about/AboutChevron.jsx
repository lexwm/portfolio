import React from "react";

function AboutChevron (props) {
    return (
        <li>
            <i className="bi bi-chevron-right"></i> <strong>{props.name}:</strong> <span>{props.value}</span>
        </li>
    );
}

export default AboutChevron;