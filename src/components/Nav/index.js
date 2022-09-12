import React from "react";

function Nav() {

    const projects = [
        {
            name: "Run Buddy",
            description:
                "An exercise in HTML and CSS for a clean, professional page with a focus on forms and input.",
            github: "https://github.com/xiov91/run-buddy"
        },
        {
            name: "Furever Pets",
            description:
                "A collaborative effort to make a fully functional site with the use of third-party APIs. My primary task was to design the main layout of the website while assisting in the aesthetics and helping with the various bug fixes.",
            github: "https://github.com/wagnergabe/Furever-Pets"
        },
        {
            name: "Readme Generator",
            description: 
                "A from-scratch built CLI program that inquires and compiles information into a README.md file. Born from Node.js and Inquirer, this exports the given information into a properly formatted file.",
            github: "https://github.com/xiov91/readme-generation1"
        },
        {
            name: "Make Tracks",
            description: 
                "Make Tracks is an employee tracker that employs the use of Inquirer and MySQL. A database of employees and managers is created and can be used to view and add to the various tables.",
            github: "https://github.com/xiov91/make-tracks2"
        },
        {
            name: "Thoughts For Your Thoughts",
            description: "T4YT is a MongoDB-based social media API whose name is an obscure Parks & Rec reference that covers an app where users post their thoughts and other users can react to those thoughts.",
            github: "https://github.com/xiov91/thoughts-for-your-thoughts/tree/main"
        },
        {
            name: "Regex Tutorial",
            description: "While the bootcamp course I studied with didn't have a focus on Computer Science, we did cover the study. In doing so, I was familiarized with the concepts enough to be about to breakdown complex information and be able to not only understand it, but share that understanding.",
            github: "https://gist.github.com/xiov91/af5147a53fdbaa499d89622e037ea7b0"
        },
        {}
    ]

    return (
        <header>
            <h2>
                <a href="/">
                    ZEE VIROLA
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li>
                        <a href="#about">
                            About Me
                        </a>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                    <li>
                        <span>Portfolio</span>
                    </li>
{/*                     <li>
                        <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-togle="dropwdown" aria-haspopup="true" aria-expanded="false">
                                <span>Portfolio</span>
                                </button>
                        </div>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a href="#" className="dropdown-item">
                                Run Buddy
                            </a>
                            <a href="#" className="dropdown-item">
                                Furever Pets
                            </a>
                            <a href="#" className="dropdown-item">
                                Readme Generator
                            </a>
                            <a href="#" className="dropdown-item">
                                Make Tracks
                            </a>
                            <a href="#" className="dropdown-item">
                                Thoughts For Your Thoughts
                            </a>
                            <a href="#" className="dropdown-item">
                                Regex Tutorial
                            </a>
                        </div>
                    </li> */}
                </ul>
            </nav>

        </header>
    )
}

export default Nav;