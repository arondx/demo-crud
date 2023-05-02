import { useReducer } from "react";
import { data } from "../../data";
import contactsReducer from "./contactsReducer";
import { useState } from "react";
import ContactsForm from "./ContactsForm";
import TileList from "./TileList/TileList";
import Tile from "./TileList/Tile";

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
    const [contact, setContact] = useState({
        name: "",
        email: "",
        phone: ""
    });
    const [isEditing, setIsEditing] = useState(false);
    let nextId = contacts[contacts.length-1].id + 1;
    
    function handleCreateContact(){
        dispatch({
            type: 'created',
            id: nextId,
            contact: contact
        });
        setContact({
            name: "",
            email: "",
            phone: ""
        });
    }

    function handleUpdateContact(id){
        dispatch({
            type: 'updated',
            contact: contact,
            id: id
        });
        setContact({
            name: "",
            email: "",
            phone: ""
        });
    }

    function handleDeleteContact(id){
        alert('in');
        dispatch({
            type: 'deleted',
            id: id
        })
    }

    function handleChangeContact(e){
        const {name, value} = e.target;
        
        setContact({
            ...contact,
            [name]: value
        });     
    }

    function handleEditContact(contact){
        setContact(contact)
        setIsEditing(!isEditing)
    }

    return (
        <div className="container border rounded mt-2 mb-2">
            
            <div key="12" className="row justify-content-center">
                <div className="col p-3">
                    <ContactsForm
                        values={contact}
                        isEditing={isEditing}
                        onChange={handleChangeContact}
                        onAdd={handleCreateContact}
                        onUpdate={handleUpdateContact}
                    />
                </div>
            </div>

            <div key="13" className="row justify-content-center bg-secondary-subtle">
                <div className="col p-3">
                    <TileList 
                        data={contacts}
                        isEditing={isEditing}
                        onEdit={handleEditContact}
                        onDelete={handleDeleteContact}>
                    </TileList>
                </div>
            </div>
        </div>
    );
}