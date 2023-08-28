import React from "react";
import { Icon } from '@iconify/react';
import Tech from "../tech.js"

export default function Skills() {
    return (
        <div id="skills">
            <h1>SKILLS</h1>
            <div></div>
            <div>
                {Tech.map((object, index) => (
                    <div id={object.id}> 
                        {object.logo}
                        <p>{object.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}