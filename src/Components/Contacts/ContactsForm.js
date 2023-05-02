import $ from 'jquery';
import { useEffect } from 'react';

export default function ContactsForm({ onChange, values, isEditing, onAdd, onUpdate}) {
    const jQueryCode = () =>{
        $(".btn").mouseup(function(){
            $(this).blur();
        })
    }

    useEffect(() => {
        jQueryCode();
    });

    return (
        <form>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name:</label>
                <input type="text" value={values.name} onChange={onChange} id="name" name="name" className="form-control rounded"/>
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email:</label>
                <input type="text" value={values.email} onChange={onChange} id="email" name="email" className="form-control rounded"/>
            </div>
            <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone:</label>
                <input type="text" value={values.phone} onChange={onChange} id="phone" name="phone" className="form-control rounded"/>
            </div>
            {isEditing && <button type="button" className="btn btn-primary w-100 mb-1"
                onClick={() => onUpdate(values.id)}>
                Update</button>}
            <button type="button" className="btn btn-primary w-100" 
                disabled={isEditing ? true : false}
                onClick={onAdd}>
                Add
            </button>
        </form>
    );
}