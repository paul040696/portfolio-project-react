import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Huawei from "../../assets/img/experience/huawei.svg";
import Tilt from "react-tilt";
import "./experience-style.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card className="container-fluid">
              <Card.Header
                as="h5"
                className="d-flex justify-content-center flex-wrap"
              >
                <Card.Img
                  variant="top"
                  className="img-resize"
                  src={Huawei}
                  alt="Accenture logo"
                />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">
                    Software developer
                  </Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">
                      Jr.Software Developer
                    </strong>
                    <br />
                    <strong> Technologies: </strong> Python, ANTRobot, ReactJS,
                    Apache Hadoop
                    <br />
                    <strong> Duration: </strong> November 2020 - Present
                    <br />
                    <strong> Description </strong>
                    <br />
                    <ul className="text-left">
                      <li>
                        <strong>Developed </strong> automation tools using
                        Python, Selenium and ANTRobot
                      </li>
                      <li>
                        <strong>Developed </strong> a dashboard page for an
                        internal app using React and Node.js
                      </li>
                      <li>
                        <strong>Developed </strong> SEQ Analyst apps for various
                        network carriers accross Europe.
                      </li>
                    </ul>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>

        <br />
        <br />
        <br />

        <Container className="max-width:70%">
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header
                as="h5"
                className="d-flex justify-content-center flex-wrap"
              >
                <Card.Img
                  variant="top"
                  className="img-resize"
                  src={Huawei}
                  alt="Accenture logo"
                />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">
                    Software developer
                  </Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style">
                      Software Developer Intern
                    </strong>
                    <br />
                    <strong> Technologies: </strong> JavaScript, Selenium, Java,
                    Python, Powershell.
                    <br />
                    <strong> Duration: </strong> April 2019 - July 2019
                    <br />
                    <strong> Description </strong>
                    <dl className="text-left">
                      <dt>
                        <strong>Development team: </strong>
                        <dd> - Developed a small Android app using Java</dd>
                        <dd>
                          {" "}
                          - Developed testing scripts using Protractor and
                          successfully found bugs on some internal platforms.
                        </dd>
                      </dt>
                      <dt>
                        <strong>Implementation team: </strong>
                        <dd>
                          {" "}
                          - We learned how to use the company's software
                          products(especially ORD)
                        </dd>
                        <dd>
                          {" "}
                          - Developed some Python &amp; Powershell scripts for
                          learning purpose.
                        </dd>
                      </dt>
                      <dt>
                        <strong>Data storage &amp; Customer Service </strong>
                        <dd>
                          {" "}
                          - Accumulated experience in the Customer Service area.
                        </dd>
                      </dt>
                    </dl>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;
