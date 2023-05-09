import { useState, useRef } from "react";
import { useContacts } from "./ContactsContext";
import { useContact, useContactDispatch } from "../ContactContext";
import {ContactsForm }from "./ContactsForm";
import TileList from "./TileList/TileList";

export default function Contacts() {
    
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
    
    return (
        <div className="container border rounded my-5">
            <div key="12" className="row justify-content-center">
                <div className="col p-3">
                    <ContactsForm
                        ref={ref}
                    />
                </div>
            </div>

            <div key="13" className="row justify-content-center bg-secondary-subtle">
                <div className="col p-3">
                    <TileList 
                        onEditAnimation={handleOnEditAnimation}>
                    </TileList>
                </div>
            </div>
        </div>


    );
}