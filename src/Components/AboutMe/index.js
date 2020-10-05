import React from "react";
import { Container } from "./styles";
import Me from "../../Assets/me.jpg";
import "../../animated.css";

function AboutMe() {
  return (
    <Container className="animate__animated animate__fadeIn">
      <div className="left">
        <img src={Me} alt="MoisésVilaBoasPhoto's" />
      </div>
      <div className="right">
        <h1>About Me.</h1>
        <p>Dev Front-end & Web-Designer & UI/Developer</p>
        {/* <h4>
          I am <span>Moisés Vilas Boas</span> Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Incidunt tenetur illum ut, mollitia
          temporibus repudiandae, enim eos odit repellat vero animi saepe.
          Suscipit odit neque pariatur repellendus aspernatur consectetur est
          aliquid reprehenderit, accusamus, asperiores cumque quibusdam quas,
          consequatur ipsam esse.
        </h4>*/}
        <h4>
          I am <span>Moisés Vilas Boas</span> Developer passionate about
          technology and Front-END Development. I am constantly studying good
          practices and trying to be a better developer every day.
          <br /> <br /> I like to work as a team. I have currently focused my
          studies in
          <span> Javascript, React, ES6, ES5, NODE-JS </span> and also in the{" "}
          <span> UX / UI / IHC</span> area I have experience with some Design
          tools such as:
          <span> Adobe XD, Photoshop. </span>
          <br />
          <br />
          At the time I was developing in Python, I believe that there is no
          better feeling than what you see running that 14-hour script that you
          spent working 100% since my first project where simply the doll had to
          follow from x to y was love at first sight!
        </h4>
      </div>
    </Container>
  );
}

export default AboutMe;
