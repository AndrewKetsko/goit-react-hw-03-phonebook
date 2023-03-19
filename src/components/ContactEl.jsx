import React from "react";

export default function ContactEl({contact, delFunc}) { 
    // console.log(contact.id);
    return <>
        <li key={contact.id} data-key={contact.id}>{contact.name}: {contact.number}
        <button type="button" onClick={delFunc}>Delete</button>
        </li>
    </>
};