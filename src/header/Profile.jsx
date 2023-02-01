import profile from '../assets/IMG_4110.jpeg';
import Links from "./Links";
function Profile() {
    return (
        <div className="profile">
            <img src={profile} className="img-fluid rounded-circle"/>
            <h1 className="text-light"><a href="/">Alexey Ranuk</a></h1>
            <Links/>
        </div>
    );
}

export default Profile;