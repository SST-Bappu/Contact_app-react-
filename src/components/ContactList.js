import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) =>{
    const removeContact = (id) =>{
        props.getContactId(id);
    }
    
    const renderContactList = props.contacts.map((contact)=>{
        
        return (
            <ContactCard contact={contact} clickHandler={removeContact} />
        );
    });
    
    return (
        <div className="main">
            <h2>
                Contact List
                <button className="ui button blue right" style={{marginLeft:'150px'}}>Add Contact</button>
            </h2>
            <div className="ui celled list">{renderContactList}</div>
        </div>);
    };

export default ContactList;