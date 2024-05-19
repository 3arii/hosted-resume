import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="top-information">
        <h1>Deniz Lapsekili</h1>
        <h1>denizlapsekili@ucsb.edu</h1>
        <h1>
          <a href="https://www.linkedin.com/in/deniz-lapsekili-71530a19b">
            LinkedIn
          </a>
        </h1>
      </div>
      <div className="resume-container">
        <h1 className="title">Education</h1>
        <p className="job-desc">
          Bachelor of Computer Science &#x2022; University of California, Santa
          Barbara
        </p>
        <ul>
          <li>GPA: 4.0</li>
          <li>CS 16, CS 24, Math 4A</li>
          <li>
            UCSB ICPC, one of the 3 teams selected from UCSB to participate in
            South California Regionals
          </li>
        </ul>
        <h1 className="title">Experience</h1>
        <p className="job-desc">Research Assistant &#x2022; UCSB Dynamo Labs</p>
        <ul>
          <li>
            Worked on Linearized Contracting Dynamics on Robotics with{" "}
            <b>python</b>.
          </li>
          <li>
            Co-Authored{" "}
            <a href="https://arxiv.org/abs/2402.08090">
              Learning Neural Contracting Dynamics: Extended Linearization and
              Global Guarantees
            </a>
            .
          </li>
          <li>
            Worked with research grade Robotics Toolbox Python, worked with{" "}
            <b>linear algebra</b> for running a convolutional neural network for
            vector field based robotics movement.
          </li>
        </ul>
        <p className="job-desc">
          Research Assistant &#x2022; UCSB Bionic Vision Labs
        </p>
        <ul>
          <li>
            Currently working under Michael Beyeler to develop a smart cane on
            LLMs.
          </li>
          <li>
            {" "}
            <b>Linux/Unix</b> experience with Raspberry Pi, on visual processing
            with Real Sense.
          </li>
          <li>
            {" "}
            Utilized <b>Python</b> for converting ROS(Robot Operating System)
            image processing files to universal storage files{" "}
          </li>
        </ul>
        <p className="job-desc">Software Engineering Intern &#x2022; IBM</p>
        <ul>
          <li>
            Engineered a financial API to connect banking information to an
            interactive dashboard with python and <b>React.js</b>.
          </li>
          <li>
            Developed with full-stack technologies such as python to organize
            and iterate data leveraged fastAPI to handle the python to React
          </li>
          <li>
            Improved the speed of the previous application by 45% and improved
            the UX/UI testing score of the previous interface by 75%, according
            to a user survey.
          </li>
        </ul>

        <p className="job-desc">Software Engineering Intern &#x2022; WeWalk</p>
        <ul>
          <li>
            Designed the WeWalk Vibration Testing software to be deployed in 20+
            WeWalk Smart Walking Cane production facilities
          </li>
          <li>
            Deployed python and <b>numpy</b> to calculate the average slope of
            the vibration motors in terms of Hertz, then translated the
            information to <b>java</b>, later implemented it to the android app
            utilizing android studio.
          </li>
          <li>
            Coordinated the organic growth campaign in Germany, leveraged{" "}
            <b>Photoshop</b> and <b>Adobe Illustrator</b> as well as copy
            writing strategies
          </li>
          <li>
            Pitched the idea of a loyalty referral program in order to increase
            the organic spread in the Germany campaign. Increased the total
            attraction of key phrases in German forums by 56%.
          </li>
        </ul>
        <h1 className="title">Projects</h1>
        <p className="job-desc">Learn4Ward &#x2022; Microsoft Imagine Cup</p>
        <p>
          Phonics teaching tools for students with Special Needs, focused
          primarily on Dyslexia.{" "}
          <a href="https://learn4ward.io/">learn4ward.io</a>
        </p>
        <ul>
          <li>
            Worked with a team of developers to develop learn4ward using{" "}
            <b>React.js</b> <b>Node.js</b> and <b>MongoDB</b>{" "}
          </li>
          <li>
            Wrote the business side of profitability and user engagement also
            user accusation.
          </li>
          <li>
            Met with business professionals and teachers of students with
            special needs to create a tailored product.
          </li>
        </ul>
        <h1 className="title">Skills & Technologies</h1>
        <ul className="skills-list">
          <li>React.js</li>
          <li>Node.js</li>
          <li>MongoDB</li>
          <li>HTML/CSS</li>
          <li>Git/Version Control</li>
          <li>Unix/Linux</li>
          <li>Python</li>
          <li>Competitive Programming</li>
          <li>Pytorch & AI/ML</li>
        </ul>
      </div>
    </>
  );
}

export default App;
