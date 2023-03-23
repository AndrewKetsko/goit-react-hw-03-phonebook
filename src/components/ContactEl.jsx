import React from "react";
import { Delete, Card } from "./ContactEl.styled";

export default function ContactEl({contact, delFunc}) { 
    // console.log(contact.id);
    return <>
        <Card data-key={contact.id}>{contact.name}: {contact.number}
        <Delete type="button" onClick={delFunc}>Delete</Delete>
        </Card>
    </>
};