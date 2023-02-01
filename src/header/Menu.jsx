import Nav from 'react-bootstrap/Nav';
import MenuItem from "./MenuItem";

function Menu() {
    return (
        <nav id="navbar" className="nav-menu navbar">
            <Nav defaultActiveKey="#hero" as="ul" bsPrefix="left-menu">
                <MenuItem name="Home" href="#hero" class="bx bx-home"/>
                <MenuItem name="About" href="#about" class="bx bx-user"/>
                <MenuItem name="Resume" href="#resume" class="bx bx-file-blank"/>
                <MenuItem name="Portfolio" href="#portfolio" class="bx bx-book-content"/>
                <MenuItem name="Services" href="#services" class="bx bx-server"/>
                <MenuItem name="Contact" href="#contact" class="bx bx-envelope"/>
            </Nav>
        </nav>
    );
}

export default Menu;