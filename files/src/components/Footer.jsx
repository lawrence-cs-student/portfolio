import React from "react";
import contacts from "../contacts.js"

export default function Footer() {
    return (
        <footer>
            {contacts.map((object, index) => 
            (
                <div id={object.id}>
                    <a>{object.logo}</a>
                    <h1>{object.detail}</h1>
                </div>
            ))};
        </footer>
    )
}