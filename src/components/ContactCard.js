import React from "react";
import profile from "../images/profile.png";
const ContactCard =(props) =>{
    const {id,name,email,message} = props.contact;
    return (
        <div className="item">
            <img className="ui avatar image" src={profile} alt="user"/>
            <div className="content">
                <div className="header">{name}</div>
                <div>{email}</div>
                <div>{message}</div>
            </div>
            <i className="trash alternate outiline icon"
                onClick={() => props.clickHandler(id)}
                style={{color:"red",marginTop:"7px",paddingLeft:"200px"}}></i>
        </div>
    );
};
export default ContactCard