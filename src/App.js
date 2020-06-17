import React from 'react';
import testing from './test2.jpg'
import './App.css';
import 'bootstrap';
import { UncontrolledTooltip } from 'reactstrap';
function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

      <ul class="icon-bar">
        <li>
          <a href="https://www.facebook.com/dylan.lynn.56" class="facebook" id="facebook"><i class="fa fa-facebook"></i></a>
          <UncontrolledTooltip placement="right" target="facebook">
            Facebook
          </UncontrolledTooltip>
        </li>
        <li>
          <a href="https://github.com/Dlynn2" class="github" id="github"><i class="fa fa-github"></i></a>
          <UncontrolledTooltip placement="right" target="github">
            Github
          </UncontrolledTooltip>
        </li>
        <li>
          <a href="#" class="google" id="email"><i class="fa fa-envelope"></i></a>
          <UncontrolledTooltip placement="right" target="email">
            Email me!
          </UncontrolledTooltip>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/dylan-lynn-47b76965/" class="linkedin" id="linkedIn"><i class="fa fa-linkedin"></i></a>
          <UncontrolledTooltip placement="right" target="linkedIn">
            LinkedIn
          </UncontrolledTooltip>
        </li>
        <li>
          <a href="#" class="resume"  id="resume"><i class="fa fa-file-pdf-o"></i></a>
          <UncontrolledTooltip placement="right" target="resume">
            Download my resume.
          </UncontrolledTooltip>
        </li>
      </ul>
      <header className="App-header">
        <div className="landing-container">
          <header className="overlay">I'm Dylan Lynn.
          <br />
          A Developer
          </header>
          {/* <img src={testing} className="landing-image" /> */}
        </div>
      </header>
    </div>
  );
}

export default App;
