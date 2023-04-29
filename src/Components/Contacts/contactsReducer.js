export default function contactsReducer(contacts, action) {
    switch(action.type){
        case 'created': {
            return [
                ...contacts,
                {
                    id: action.id,
                    name: action.contact.name,
                    email: action.contact.email,
                    phone: action.contact.phone

                }
            ]
        }
        case 'updated': {
            return contacts.map(c => {
                if(c.id === action.id){
                    return {
                        id: action.id,
                        ...action.contact
                    }
                }else{
                    return c;
                }
            })
        }
        case 'deleted': {
            return contacts.filter(c => {
                if(c.id !== action.id){
                    return c;
                }
            })
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}