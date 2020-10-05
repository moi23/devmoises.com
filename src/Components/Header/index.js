import React from "react";
import { Container } from "./styles";

import Navbar from "../Navbar";
import Typical from "react-typical";
import devPerfil from "../../Assets/dev.jpg";
import devVideo from "../../Assets/devVideo.mp4";

import {
  FaGithubSquare,
  FaWhatsappSquare,
  FaLinkedin,
  FaFacebookSquare,
} from "react-icons/fa";

const Header = () => {
  return (
    <Container>
      <Navbar />
      <div className="wrapper">
        <video
          className="devPerfil"
          src={devVideo}
          autoPlay={true}
          loop={true}
          muted={true}
        />
        {/* <img src={devPerfil} alt="Imagem de Moisés Vilas Boas" /> */}
        <div id="alignText">
          <h1>Hello Friend</h1>
          <h3>I am</h3>
        </div>
        <Typical
          className="Test"
          steps={[
            "Front-End",
            3000,
            "WEB-DESIGNER",
            2000,
            "UX/UI DEVELOPER",
            2000,
            "ANDROID/IOS DEV",
            2000,
          ]}
          loop={Infinity}
          wrapper="p"
        />
        <div className="socialIcons">
          <a href="www.github.com">
            <FaGithubSquare className="iconProps" />
          </a>
          <a href="www.github.com">
            <FaWhatsappSquare className="iconProps" />
          </a>
          <a href="www.github.com">
            <FaLinkedin className="iconProps" />
          </a>
          <a href="www.github.com">
            <FaFacebookSquare className="iconProps" />
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Header;
