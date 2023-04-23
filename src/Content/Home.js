import React from "react";
import "../App.css";
import dev from "../Assets/Dev1.png";
import dev1 from "../Assets/Dev2.png";
import dev2 from "../Assets/Dev3.png";
const Home = () => {
  return (
    <div>
      <h1>What is CI/CD all about?</h1>
      <p>
        The speed with which software releases need to happen these days calls
        for the need to automate and secure the whole software development
        lifecycle.
      </p>
      <img src={dev} alt="img" width={600} height={300} />
      <p>
        Continuous integration (CI) and continuous delivery/deployment (CD) are
        DevOps processes that help to automate the software release process in a
        way that guarantees more seamless deployments. They also save time and
        money for an organization.
      </p>
      <h1>Phases in a CI/CD pipeline</h1>
      <img src={dev1} alt="" width={600} height={300} />
      <ul>
        <li>
          <b>The build stage: </b>
          This is where the source code and its dependencies are bundled. The
          primary purpose of the build stage is to package the application to be
          easily deployed to different environments
        </li>
        <li>
          <b>The test stage: </b>
          This is where automated test cases are executed to verify the
          correctness and behavior of the changes that are being introduced.
        </li>
        <li>
          <b>The release stage: </b>
          This is where the built code is stored in a redistributed format in an
          artifact repository.
        </li>
        <li>
          <b>The deploy stage: </b>
          This is where the build artifact is picked up and deployed to the
          required environment.
        </li>
        <li>
          <b>The monitor stage:</b>
          This is the stage where the overall application performance is
          monitored using a dedicated interface.
        </li>
      </ul>

      <img src={dev2} alt="" width={600} height={300} />
    </div>
  );
};
export default Home;
