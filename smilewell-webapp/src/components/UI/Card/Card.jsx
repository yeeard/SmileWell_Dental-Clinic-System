import './card.css'
import profilePic from "../../../assets/sample-profile.jpg"

function Card({name, role}){
    return(
        <div className="profileContainer">
            <div className="usernameContainer">
                <h5>{name}</h5>
                <h6>{role}</h6>
            </div>
            <div className="profilePicture">
                <img src={profilePic} className="picture" height="120rem" width="120rem" alt="Profile Picture"/>
            </div>
        </div>
    );
}

export default Card