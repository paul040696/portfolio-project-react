import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Particles from "react-particles-js";
import About from "./pages/about_me/about_me";
import Skills from "./pages/skills/skills_component";
import Container from "react-bootstrap/Container";
import Experience from "./pages/experience/experience";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import TimeLine from "./components/projects-timeline/projects-timeline";
import ContactForm from "./pages/contact_form/contact-form";
import FooterPanel from "./components/footer/footer";

import { Parallax } from "react-parallax";

function App() {
  return (
    <>
      <Particles
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#f9ab00",
              },
            },
          },
        }}
      />
      <Navbar />
      <Header />

      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background-parallax.webp")}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>

        <Container className="container-box rounded">
          <Slide bottom duration={1000}>
            <hr />
            <Skills />
          </Slide>
        </Container>

        <Container className="container-box rounded">
          <Fade duration={1000}>
            <hr />
            <Experience />
          </Fade>
        </Container>

        <Container className="container-box rounded">
          <Slide bottom duration={500}>
            <hr />
            <TimeLine />
          </Slide>
        </Container>

        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />
            <ContactForm />
          </Fade>
        </Container>

        <hr />
        <FooterPanel />
      </div>
    </>
  );
}

export default App;
