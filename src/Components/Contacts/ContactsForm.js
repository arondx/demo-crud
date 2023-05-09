import { useEffect, forwardRef, useState } from 'react';
import { useContactsDispatch } from './ContactsContext';
import { useContact, useContactDispatch } from '../ContactContext';

export const ContactsForm = forwardRef((props, ref) => {

    const [ formRef, inputRef] = ref;
    const { createContact, updateContact } = useContactsDispatch();
    const {contact, isEditing} = useContact();
    const {setContact, toogleEditing, reset} = useContactDispatch();
    
    function change(e){
        const {name, value} = e.target;
        setContact({
            ...contact,
            [name]: value
        })
    }
    
    return (
        <form ref={formRef}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name:</label>
                <input ref={inputRef} type="text" value={contact.name} onChange={change} id="name" name="name" className="form-control rounded"/>
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email:</label>
                <input type="text" value={contact.email} onChange={change} id="email" name="email" className="form-control rounded"/>
            </div>
            <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone:</label>
                <input type="text" value={contact.phone} onChange={change} id="phone" name="phone" className="form-control rounded"/>
            </div>
            {isEditing &&
                <button type="button" className="btn btn-primary w-100 mb-1"
                    onClick={() => {updateContact(contact); toogleEditing(); reset()}}>
                        Update
                </button>}
            {isEditing &&
                <button type="button" className="btn btn-primary w-100 mb-1"
                    onClick={()=> {toogleEditing(); reset();}}>
                        Cancel
                </button>}
            {!isEditing &&
                <button type="button" className="btn btn-primary w-100 mb-1"
                    onClick={() => {createContact(contact); reset()}}>
                        Add
                </button>}
        </form>
    );
});