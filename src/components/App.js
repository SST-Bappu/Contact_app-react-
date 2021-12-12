import React,{ useEffect, useState } from "react";
import {BrowserRouter as Router, Routes as Switch, Route} from 'react-router-dom';
import {uuid} from 'uuidv4'
import './App.css';
import Header from "./Header";
import ContactList from "./ContactList";
import AddContact from "./AddContact";

function App() {
  const [contacts,setContacts]=useState([]);
  const LOCAL_STORAGE_KEY = "contacts";

  const ContactHandler = (contact) =>{
    setContacts([...contacts,{id:uuid(),...contact}]);
  };
  
  const removeContact = (id) =>{
    const newContactList = contacts.filter((contact) =>{
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  useEffect(()=>{
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrieveContacts) setContacts(retrieveContacts);
  },[]);

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
  },[contacts]);
  return (
    <div className="ui container">
      <Header />
      <AddContact ContactHandler={ContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContact}/>
      <Router>
            <Switch>
              {/* <Route exact path='/' render={(props)=> (
                  <ContactList {...props} contacts={contacts} getContactId={removeContact}/>)}/>
 */}
              <Route exact path='/add' component={AddContact}/>
              {/* <Route exact path='/add' component={() =>
                <AddContact ContactHandler={ContactHandler}/>}/> */}
              {/* <Route exact path='/add'  render={(props)=> (
                  <AddContact {...props} ContactHandler={ContactHandler} />)}/> */}
            </Switch>
      </Router>
      
    </div>
  );
}

export default App;
