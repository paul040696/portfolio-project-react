import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

// projects

import Kotlin_app from "../../assets/img/projects/Kotlin_project.webp";
import Java_app from "../../assets/img/projects/Java_project.webp";
import Portfolio_app from "../../assets/img/projects/Portfolio_app.webp";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// skills imports

import I_HTML5 from "../../assets/img/skills/html-5.svg";
import I_CSS3 from "../../assets/img/skills/css3.svg";
import I_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
import I_REACT from "../../assets/img/skills/react.svg";
import I_FIREBASE from "../../assets/img/skills/firebase.png";
import I_KOTLIN from "../../assets/img/skills/kotlin.png";
import I_JAVA from "../../assets/img/skills/java.svg";
import I_ANDROIDSTUDIO from "../../assets/img/skills/androidstudio.png";

import Image from "react-bootstrap/Image";

import "./projects-timeline-style.css";

const TimeLine = () => {
  return (
    <div id="projects">
      <h1 className="pt=3 text-center font-details-b pb-3">Projects</h1>
      <Timeline>
        <Events>
          {/* Portfolio app */}

          <ImageEvent
            date="10/03/2021"
            className="text-center"
            text="<strong>React Portfolio app</strong>"
            src={Portfolio_app}
            alt="React Portfolio app"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      Project Details
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description: </strong> A portfolio app designed
                        using React and ReactBootstrap.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>A presentation website for my portfolio</li>
                          <li>Responsive Desing</li>
                          <li>Powered by React and React Bootstrap</li>
                        </ul>
                        <hr />
                        <strong>Used technologies: </strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={I_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={I_CSS3}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={I_REACT}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              REACT
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={I_BOOTSTRAP4}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              React Bootstrap
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://akjha96.github.io/Todo-List-React/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/paul040696/portfolio-project-react"
                  target="_blank"
                >
                  Source Code
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Kotlin App */}
          <ImageEvent
            date="15/06/2020"
            className="text-center"
            text="<strong>Food delivery platform</strong>"
            src={Kotlin_app}
            alt="Food delivery platform"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      Project Details
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description: </strong> This project represents a
                        software app designed to provide a necessary platform
                        for the restaurants and catering services that want to
                        impllement a home delivery service.
                        <br />
                        The project is divided in 2 sections: client app and
                        server app.
                        <hr />
                        <strong>Features:</strong>
                        <br />
                        <br />
                        <dl>
                          <dt className="dt-styles">
                            Select a product and:
                            <dd>- view product description and rating</dd>
                            <dd>
                              - customize product( number of items, extra
                              ingredients, select size)
                            </dd>
                            <dd>- add rating and review</dd>
                            <dd>- add to cart</dd>
                          </dt>

                          <dt className="dt-styles">
                            Select cart and:
                            <dd>- modify shopping list</dd>
                            <dd>- clear cart</dd>
                            <dd>- place order</dd>
                          </dt>

                          <dt className="dt-styles">
                            Place order:
                            <dd>
                              - to current location using geolocation/ custom
                              defined location/ account's defined location
                            </dd>
                            <dd>
                              - select payment method: Cash/ Card with Baintree
                              payment
                            </dd>
                          </dt>

                          <dt className="dt-styles">
                            View orders:
                            <dd>- view details about previous placed orders</dd>
                            <dd>- repeat order</dd>
                          </dt>
                        </dl>
                        <hr />
                        <strong>Used technologies: </strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={I_ANDROIDSTUDIO}
                                alt="ANDROID STUDIO"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Android Studio
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={I_KOTLIN}
                                alt="KOTLIN"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Kotlin
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={I_FIREBASE}
                                alt="FIREBASE"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Firebase
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/paul040696/Restaurant-Kotlin"
                  target="_blank"
                >
                  Source Code
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          <ImageEvent
            date="15/06/2018"
            className="text-center"
            text="<strong>Food delivery platform</strong>"
            src={Java_app}
            alt="Food delivery platform"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      Project Details
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description: </strong> This project represents a
                        software app designed to provide a necessary platform
                        for the restaurants and catering services that want to
                        impllement a home delivery service.
                        <br />
                        The project is divided in 2 sections: client app and
                        server app.
                        <hr />
                        <strong>Features:</strong>
                        <br />
                        <br />
                        <dl>
                          <dt className="dt-styles">
                            Select a product and:
                            <dd>- view product description and rating</dd>
                            <dd>
                              - customize product( number of items, extra
                              ingredients, select size)
                            </dd>
                            <dd>- add rating and review</dd>
                            <dd>- add to cart</dd>
                          </dt>

                          <dt className="dt-styles">
                            Select cart and:
                            <dd>- modify shopping list</dd>
                            <dd>- clear cart</dd>
                            <dd>- place order</dd>
                          </dt>

                          <dt className="dt-styles">
                            Place order:
                            <dd>
                              - to current location using geolocation/ custom
                              defined location/ account's defined location
                            </dd>
                            <dd>
                              - select payment method: Cash/ Card with Baintree
                              payment
                            </dd>
                          </dt>

                          <dt className="dt-styles">
                            View orders:
                            <dd>- view details about previous placed orders</dd>
                            <dd>- repeat order</dd>
                          </dt>
                        </dl>
                        <hr />
                        <strong>Used technologies: </strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={I_ANDROIDSTUDIO}
                                alt="ANDROID STUDIO"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Android Studio
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={I_JAVA}
                                alt="JAVA"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Java
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={I_FIREBASE}
                                alt="FIREBASE"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Firebase
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/paul040696/Restaurant-App-Server-Java"
                  target="_blank"
                >
                  Source Code - Server
                </UrlButton>

                <UrlButton
                  href="https://github.com/paul040696/Restaurant-App-client-Java"
                  target="_blank"
                >
                  Source Code - Client
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
        </Events>
      </Timeline>
    </div>
  );
};

export default TimeLine;
