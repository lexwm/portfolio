import Profile from "./Profile";
import Menu from "./Menu";

function Header() {
    return (
        <header id="header">
            <div className="d-flex flex-column">
                <Profile/>
                <Menu/>
            </div>
        </header>
    );
}

export default Header;