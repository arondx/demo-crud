import { useReducer, useState, useRef, useEffect } from "react";
import { data } from "../../data";
import contactsReducer from "./contactsReducer";
import {ContactsForm }from "./ContactsForm";
import TileList from "./TileList/TileList";

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

    const formRef = useRef(null);
    const inputRef = useRef(null);

    function handleOnEditAnimation(){
        inputRef.current.focus();
        formRef.current.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
    
    const ref = [
        formRef,
        inputRef
    ];

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
    
    function handleCancelEditContact(){
        setContact({
            name: "",
            email: "",
            phone: ""
        });
        setIsEditing(!isEditing);
    }

    return (
        <div className="container border rounded my-5">
            
            <div key="12" className="row justify-content-center">
                <div className="col p-3">
                    <ContactsForm
                        values={contact}
                        isEditing={isEditing}
                        onChange={handleChangeContact}
                        onAdd={handleCreateContact}
                        onUpdate={handleUpdateContact}
                        onCancel={handleCancelEditContact}
                        ref={ref}
                    />
                </div>
            </div>

            <div key="13" className="row justify-content-center bg-secondary-subtle">
                <div className="col p-3">
                    <TileList 
                        data={contacts}
                        isEditing={isEditing}
                        onEdit={handleEditContact}
                        onEditAnimation={handleOnEditAnimation}
                        onDelete={handleDeleteContact}>
                    </TileList>
                </div>
            </div>
        </div>


    );
}