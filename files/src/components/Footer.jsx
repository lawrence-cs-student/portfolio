import React from "react";
import contacts from "../contacts.js"

export default function Footer() {
    return (
        <footer id="footer">
            {contacts.map((object, index) => 
            (
                <div id={object.id}>
                    {object.logo}
                    <h1>{object.detail}</h1>
                </div>
            ))}
        </footer>
    )
}

