import React from "react";

let ProjectList = [
  {
    Date: "2020-PRESENT",
    prjTitle: "Blinkit Clone",
    content: `A Blinkit clone was developed using HTML, CSS, media queries, and Bootstrap. The project involved creating a responsive design to ensure seamless functionality across various devices. The focus was on accurately replicating the user interface to provide a comparable user experience to the original Blinkit website.`,
    programming: ["Html", "CSS", "Adavace CSS", "Bootstrap"],
    link: "https://srinijalanda93.github.io/Blinkit-clone-sept/",
  },
  {
    Date: "2020",
    prjTitle: "Apple Clone",
    content: `An Apple clone was developed using HTML, CSS, media queries, and Bootstrap. The project aimed to create a responsive design for optimal performance across different devices. The focus was on meticulously replicating the sleek and minimalist user interface characteristic of Apple's website.`,
    programming: ["Html", "Adavance CSS", "Bootstrap"],
    link: "https://srinijalanda93.github.io/Apple-clone-oct/",
  },
  {
    Date: "2021",
    prjTitle: "Spotify Clone",
    content: `An Apple clone was developed featuring a responsive design to ensure optimal performance across various devices. The project focused on meticulously replicating the sleek and minimalist user interface characteristic of Apple's website.`,
    programming: ["Html", "Adavance CSS", "Bootstrap",'Median queries'],
    link: "https://srinijalanda93.github.io/spotify-clone-October/",
  },
  {
    Date: "2004-PRESENT",
    prjTitle: "Website Clone",
    content: `Bootstrap is a free and
   open-source CSS framework directed
    at responsive, mobile-first front-end 
    web development. It contains HTML, CSS
     and JavaScript-based design templates 
     for typography, forms, buttons, navigation,
      and other interface components.`,
    programming: ["Html", "Adavance CSS", "Bootstrap","Median queries"],
    link: "https://srinijalanda93.github.io/Frontend-1-Module-Test--October-Accio/",
  },
  {
    Date: "2004-PRESENT",
    prjTitle: "Quiz",
    content: `Using basic Javascript
   open-source CSS framework directed
    at responsive, mobile-first front-end 
    web development. It contains HTML, CSS
     and JavaScript-based design templates 
     for typography, forms, buttons, navigation,
      and other interface components.`,
    programming: ["Javascript", "Html", "css", "Bootstrap"],
    link: "https://srinijalanda93.github.io/frontend-2-week-2-test-Dec/",
  },

  {
    Date: "2004-PRESENT",
    prjTitle: "IP Address fetching",
    content: `Advance JS
   open-source CSS framework directed
    at responsive, mobile-first front-end 
    web development. It contains HTML, CSS
     and JavaScript-based design templates 
     for typography, forms, buttons, navigation,
      and other interface components.`,
    programming: ["Javascript", "HTML", "CSS", "BOOTSTRAP"],
    link: " https://srinijalanda93.github.io/F3JAN24MODULE/",
  },
  {
    Date: "2004-PRESENT",
    prjTitle: "Youtube clone",
    content: `Advance JS
   open-source CSS framework directed
    at responsive, mobile-first front-end 
    web development. It contains HTML, CSS
     and JavaScript-based design templates 
     for typography, forms, buttons, navigation,
      and other interface components.`,
    programming: ["Javascript", "HTML", "CSS", "BOOTSTRAP"],
    link: "https://srinijalanda93.github.io/Youtube-CloneF3/",
  },

  {
    Date: "2002-PRESENT",
    prjTitle: "To-do List",
    content: `Advance JS
   open-source CSS framework directed
    at responsive, mobile-first front-end 
    web development. It contains HTML, CSS
     and JavaScript-based design templates 
     for typography, forms, buttons, navigation,
      and other interface components.`,
    programming: ["Javascript", "HTML", "CSS", "BOOTSTRAP"],
    link: "https://srinijalanda93.github.io/F3JAN2024C1/",
  },
];

export const Project = () => {
  return (
    <>
      {ProjectList.map((project, index) => (
        <a
          key={index}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "block",
            textDecoration: "none",
            color: "inherit",
            marginBottom: "20px", // Optional spacing between ProjectList
          }}
        >
          <div className="project">
            <div className="date">
              <p>{project.Date}</p>
            </div>
            <div>
              <p>{project.prjTitle}</p>
              <p style={{ color: "#8396BD" }}>{project.content}</p>
              <div className="language">
                {project.programming.map((element, index) => (
                  <p key={index}>{element}</p>
                ))}
              </div>
            </div>
          </div>
        </a>
      ))}
    </>
  );
};
