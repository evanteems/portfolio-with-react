import React, { useState } from 'react';

function Portfolio() {
    const [projects] = useState([
        {
            name: "MVC Blog",
            pageLink: "https://evanteems.github.io/mvc-blog/",
            repo: "https://github.com/evanteems/mvc-blog",
            img:0,
        },
        {
            name: "Musix Genre",
            pageLink: "https://evanteems.github.io/Musix-Genre/",
            repo:"https://github.com/evanteems/Musix-Genre",
            img:1,
        },
        {
            name: "Weather Dashboard",
            pageLink: "https://evanteems.github.io/weather-dashboard/",
            repo: "https://github.com/evanteems/weather-dashboard",
            img:2,
        },
        {
            name: "Note Taker",
            pageLink: "https://evanteems.github.io/note-taker/",
            repo: "https://github.com/evanteems/note-taker",
            img:3,
        },
        {
            name: "Password Generator",
            pageLink: "https://evanteems.github.io/3rd-Assignment/",
            repo: "https://github.com/evanteems/3rd-Assignment",
            img:6,
        },
        {
            name: "Multiple Choice",
            pageLink: "https://evanteems.github.io/Multiple-Choice/",
            repo: "https://github.com/evanteems/Multiple-Choice",
            img:5
        }
    ])

    const apps = projects.map((apps, i) => 
    <div className="pox-2">
        <h2>{apps.name}</h2>
        <a href={apps.pageLink} target="_blank" rel="noreferrer">Link</a>
        <a href={apps.repo} target="_blank" rel="noreferrer">GitHub</a>
        <div className={`projects${i} repoBG`}></div>
    </div>
    )
    return (
        <section className="my-5">
            <h1 id='about'>Portfolio</h1>
                <div className="flex-row">
                    {apps}
                </div>
        </section>
    );
}

export default Portfolio;