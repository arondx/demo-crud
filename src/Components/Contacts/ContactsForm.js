import $ from 'jquery';
import { useEffect, forwardRef, useState } from 'react';

export const ContactsForm = forwardRef(({ onChange, values, isEditing, onAdd, onUpdate, onCancel}, ref) => {

    const [ formRef, inputRef] = ref;
    const [toogleModal, setToogleModal] = useState(false);

    const jQueryCode = () =>{
        $(".btn").mouseup(function(){
            $(this).blur();
        })
    }

    useEffect(() => {
        jQueryCode();
    });

    return (
        <form ref={formRef}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name:</label>
                <input ref={inputRef} type="text" value={values.name} onChange={onChange} id="name" name="name" className="form-control rounded"/>
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email:</label>
                <input type="text" value={values.email} onChange={onChange} id="email" name="email" className="form-control rounded"/>
            </div>
            <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone:</label>
                <input type="text" value={values.phone} onChange={onChange} id="phone" name="phone" className="form-control rounded"/>
            </div>
            {isEditing &&
                <button type="button" className="btn btn-primary w-100 mb-1"
                    onClick={() => onUpdate(values.id)}>
                        Update
                </button>}
            {isEditing &&
                <button type="button" className="btn btn-primary w-100 mb-1"
                    onClick={onCancel}>
                        Cancel
                </button>}
            {!isEditing &&
                <button type="button" className="btn btn-primary w-100 mb-1"
                    onClick={onAdd}>
                        Add
                </button>}
        </form>
    );
});