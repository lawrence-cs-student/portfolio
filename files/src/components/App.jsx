import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer"

export default function App () {
    return (
        <div id="body">
            <div className="hero-cover">
                <Navbar />
                <Hero />
            </div>
            <Skills />
            <Projects />
            <Footer />
        </div>
    )
}
