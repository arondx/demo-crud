import { useReducer } from "react";
import { data } from "../../data";
import contactsReducer from "./contactsReducer";
import { useState } from "react";
import ContactsForm from "./ContactsForm";
import TileList from "./TileList/TileList";

const initialContacts = data.map(c => {
    return {
        id: c.id,
        name: c.name,
        email: c.email,
        phone: c.phone
    };
});

function Tile({values, onEdit, onDelete, isEditing}) {
    return(
        <div class="card shadow-sm bg-light">
            <div class="card-body pb-0">
                <button type="button" class="btn btn-secondary btn-sm float-end ms-1"
                    disabled={isEditing ? true : false}>
                    <i class="bi bi-trash3" title="Delete"></i>
                </button>
                <button type="button" class="btn btn-secondary btn-sm float-end"
                    disabled={isEditing ? true : false}
                    onClick={() => onEdit(values)}>
                    <i class="bi bi-pencil-square" title="Edit"></i>
                </button>
                <dl>
                <dt>Name:</dt>
                <dd>{values.name}</dd>

                <dt>E-mail:</dt>
                <dd>{values.email}</dd>

                <dt>Phone:</dt>
                <dd>{values.phone}</dd>
                </dl>
            </div>
        </div>
    );
}

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

    const tiles = contacts.map((c, i) => (
        <div key={i} className="col-12 col-sm-6 col-lg-4 col-xxl-3">
            <Tile 
                values={c}
                isEditing={isEditing}
                onEdit={handleEditContact}
                onDelete={handleDeleteContact}>
            </Tile>
        </div>
    ));

    return (
        <div className="container">
            
            <div key="12" className="row justify-content-center border rounded mt-4 mb-4 shadow bg-body">
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

            <div key="13" className="row justify-content-center border rounded shadow mb-4 bg-body">
                <div className="col p-3">
                    <TileList>
                        {tiles}
                    </TileList>
                </div>
            </div>

        </div>
    );
}