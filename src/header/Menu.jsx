import Nav from 'react-bootstrap/Nav';
import MenuItem from "./MenuItem";
import MenuData from "./MenuData";


function Menu() {
    return (
        <nav id="navbar" className="nav-menu navbar">
            <Nav defaultActiveKey="#hero" as="ul" bsPrefix="left-menu">
                {
                    MenuData.map(Item => (
                        <MenuItem key={Item.name} name={Item.name} href={Item.href} class={Item.iconClass}/>
                    ))
                }
            </Nav>
        </nav>
    );
}

export default Menu;