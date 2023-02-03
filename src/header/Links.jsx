import Bio from "../helpers/Bio";

function Links() {
    return (
        <div className="social-links mt-3 text-center">
            <a href={Bio.linkedin} className="linkedin" target="_blank">
                <i className="bx bxl-linkedin"></i>
            </a>
            <a href={"mailto:" + Bio.email} className="mail" target="_blank">
                <i className="bx bxl-gmail"></i>
            </a>
            <a href={Bio.telegram} className="telegram" target="_blank">
                <i className="bx bxl-telegram"></i>
            </a>

        </div>
    );
}

export default Links;