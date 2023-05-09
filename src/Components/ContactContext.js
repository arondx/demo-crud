import { useState, useReducer } from 'react';
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
    const [state, dispatch] = useReducer(contactReducer, initialState);
    const [isEditing, setIsEditing] = useState(false);
    
    function toogleEditing(){
        setIsEditing(!isEditing);
    }

    function reset(){
        dispatch({
            type: 'reseted'
        })
    }

    return(
        <ContactContext.Provider value={{state, isEditing}}>
            <ContactDispatchContext.Provider value={{dispatch, toogleEditing, reset}}>
                {children}
            </ContactDispatchContext.Provider>
        </ContactContext.Provider>
        
    )
}

const contactReducer = (state, action) => {
    switch (action.type) {
        case 'changed': {
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }
        }
        case 'setted':{
            return action.payload.contact;
        }
        case 'reseted':{
            return initialState;
        }
        default:
            break;
    }
}

