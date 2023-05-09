import { useContact, useContactDispatch } from "../../ContactContext";
import { useContacts, useContactsDispatch } from "../ContactsContext";
export default function Tile({values, onEditAnimation}) {
    const {isEditing} = useContact();
    const {setContact, toogleEditing} = useContactDispatch();
    const { deleteContact } = useContactsDispatch();

    function edit(){
        setContact(values);
    }

    return(
        <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <div class="card">
                <div class="card-body pb-0">
                    <button type="button" class="btn btn-secondary btn-sm float-end ms-1 "
                        disabled={isEditing ? true : false}
                        onClick={() => deleteContact(values.id)}>
                        <i class="bi bi-trash3" title="Delete"></i>
                    </button>
                    <button type="button" class="btn btn-secondary btn-sm float-end"
                        disabled={isEditing ? true : false}
                        onClick={() => {edit(); toogleEditing(); onEditAnimation()}}>
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
        </div>
    );
}