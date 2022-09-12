import React from 'react';
import runBuddy from '../../assets/Run-Buddy.png';
import fureverPets from '../../assets/Furever-Pets.png';

function ProjectList() {


    return (
        <main>
        <div>

        <h1>Star Projects:</h1>

        <h2>Run Buddy</h2>
        <h4><a href="https://github.com/xiov91/run-buddy" target="_blank">GitHub Repo</a></h4>
        <p>An exercise in HTML and CSS for a clean, professional page with a focus on forms and input.</p>
        <a href="https://xiov91.github.io/run-buddy/" target="_blank"> <img src={runBuddy} /> </a>

        </div>

        <div>
        <h2>Furever Pets</h2>
        <h4><a href="https://github.com/wagnergabe/Furever-Pets" target="_blank">GitHub Repo</a></h4>
        <p>A collaborative effort to make a fully functional site with the use of third-party APIs. My primary task was to design the main layout of the website while assisting in the aesthetics and helping with the various bug fixes.</p>
        <a href="https://xiov91.github.io/run-buddy/" target="_blank"> <img src={runBuddy} /> </a>
        </div>

        </main>
    )
}


export default ProjectList;