import profile from '../assets/600x600.jpg';
import Links from "./Links";
import Bio from "../helpers/Bio";

function Profile() {
    return (
        <div className="profile">
            <img src={profile} className="img-fluid rounded-circle"/>
            <h1 className="text-light"><a href="/">{Bio.name}</a></h1>
            <Links/>
        </div>
    );
}

export default Profile;