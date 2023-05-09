import { createContext, useContext } from "react";
import { useImmerReducer } from 'use-immer';
import { data } from "../../data";

const ContactsContext = createContext(null);
const ContactsDispatchContext = createContext(null);

export function useContacts() {
    return useContext(ContactsContext);
}

export function useContactsDispatch() {
    return useContext(ContactsDispatchContext);
}

const contactsReducer = (draft, action) => {
    switch(action.type){
        case 'created': {
            draft.contacts.push({
                id: draft.nextId ++,
                name: action.payload.contact.name,
                email: action.payload.contact.email,
                phone: action.payload.contact.phone
            });
            break;
        }
        case 'updated': {
            const index = draft.contacts.findIndex(((c) => c.id === action.payload.contact.id));
            draft.contacts[index] = action.payload.contact;
            break;
        }
        case 'deleted': {
            draft.contacts = draft.contacts.filter((c) => {if(c.id !== action.payload.id) return c});
            break;
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

const initialContacts = data.map(c => {
    return {
        id: c.id,
        name: c.name,
        email: c.email,
        phone: c.phone
    };
});

let nextId = initialContacts[initialContacts.length-1].id + 1;

const initialState = {
    contacts: initialContacts,
    nextId: nextId  
};

export function ContactsProvider({ children }) {
    const [state, dispatch] = useImmerReducer(contactsReducer, initialState);

    function createContact(contact){
        dispatch({
            type: 'created',
            payload: {
                contact: contact
            }
        })
    }

    function updateContact(contact){
        dispatch({
            type: 'updated',
            payload: {
                contact: contact
            }
        });
    }

    function deleteContact(id){
        dispatch({
            type: 'deleted',
            payload: {
                id: id
            }
        });
    }

    const actions = {
        createContact,
        updateContact,
        deleteContact
    }
   

    return (
        <ContactsContext.Provider value={state.contacts}>
            <ContactsDispatchContext.Provider value={actions}>
                {children}
            </ContactsDispatchContext.Provider>
        </ContactsContext.Provider>
    );
}

