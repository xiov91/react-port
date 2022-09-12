import React from "react";

function Nav(props) {

    const {
        portfolioSelected,
        setPortfolioSelected
    } = props;

    return (
        <header>
            <h2>
                <a href="/">
                    ZEE VIROLA
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about" onClick={() => setPortfolioSelected(false)}>
                            About Me
                        </a>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                    <li className={`mx-2 ${portfolioSelected && 'navActive'}`}>
                        <span onClick={() => setPortfolioSelected(true)}>Portfolio</span>
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