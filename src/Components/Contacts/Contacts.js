import { useReducer } from "react";
import { data } from "../../data";
import contactsReducer from "./contactsReducer";
import { useState } from "react";

const initialContacts = data.map(c => {
    return {
        id: c.id,
        name: c.name,
        email: c.email,
        phone: c.phone
    };
});

export default function Contacts() {
    const [contacts, dispatch] = useReducer(contactsReducer, initialContacts);
    const [contact, setContact] = useState({});
    let nextId = contacts[contacts.length-1].id + 1; 

    function handleCreateContact(contact, nextId){
        dispatch({
            type: 'created',
            id: nextId,
            contact: contact
        })
    }

    function handleUpdateContact(contact, id){
        dispatch({
            type: 'updated',
            contact: contact,
            id: id
        })
    }

    function handleDeleteContact(id){
        dispatch({
            type: 'deleted',
            id: id
        })
    }

    
    return (
        <p>Contacts</p>
    );
}