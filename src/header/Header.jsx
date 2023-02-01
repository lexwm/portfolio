import Profile from "./Profile";
import Links from "./Links";

function Header() {
    return (
        <header id="header">
            <div className="d-flex flex-column">
                <Profile/>
            </div>
        </header>
    );
}

export default Header;