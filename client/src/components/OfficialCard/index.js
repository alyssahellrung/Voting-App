import React from "react";
import UserAPI from "../../utils/UserAPI";
import { useAuth0 } from "@auth0/auth0-react";
import "./style.css";

function OfficialCard(props) {
    const {user} = useAuth0();

    function handleOfficialSave() {
        let body = {
            title: props.title, 
            name: props.name, 
            phone: props.phone, 
            email: props.email,
            party: props.party}
        UserAPI.addOfficial(user.email, body);
    }

    return (
        <div>
            <div id={props.party.slice(0, 1)} className="uk-card uk-card-default uk-card-hover uk-card-body officials-card">
                <h2 className="uk-card-title">{props.title}</h2>
                <p className="uk-card-title official-card-info">{props.name}</p>
                <p className="uk-card-title official-card-info">Phone: {props.phone}</p>
                <p className="uk-card-title official-card-info">Email: {props.email}</p>
                {props.loggedIn ? <span onClick={handleOfficialSave} className="save-official">Save Official to Dash</span> : ""}
            </div>
        </div>
    )
};

export default OfficialCard;