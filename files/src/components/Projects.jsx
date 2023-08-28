import React from "react";
import websites from "../websites.js";


export default function Projects() {
    return (
        <div id="projects">
            <h1>Projects</h1>
            <div className="cards">
                {websites.map((object, index) => (
                    <div className="duplicate">
                        <div key={object.id}>
                            <h1>{object.stacks}</h1>
                            <div>
                                <a href={object.link}><img src={object.image}></img></a>
                            </div>
                        </div>
                    </div>
            ))}
            </div>
        </div>
        
    )
}