import { useState } from 'react';
import { createContext, useContext } from 'react';

const initialState = {
        id: "",
        name: "",
        email: "",
        phone: ""
}

const ContactContext = createContext();
const ContactDispatchContext = createContext();

export function useContact(){
    return useContext(ContactContext);
}

export function useContactDispatch(){
    return useContext(ContactDispatchContext);
}


export const ContactProvider = ({ children }) => {
    const [contact, setContact] = useState({id: "", name: "", email: "", phone: ""});
    const [isEditing, setIsEditing] = useState(false);
    
    function reset(){
        setContact({id: "", name: "", email: "", phone: ""});
    }

    function toogleEditing(){
        setIsEditing(!isEditing);
    }

    return(
        <ContactContext.Provider value={{contact, isEditing}}>
            <ContactDispatchContext.Provider value={{setContact, toogleEditing, reset}}>
                {children}
            </ContactDispatchContext.Provider>
        </ContactContext.Provider>
        
    )
}

const contactReducer = (draft, action) => {
    switch (action.type) {
        case 'changed':
            draft[action.payload.name] = action.payload.value;
            break;
        case 'setted':{
            draft = action.payload.contact;
            break;
        }
        default:
            break;
    }
}

