import styled from "styled-components";
import Background from "../../Assets/background.png";

export const Container = styled.div`
  height: 100vh;
  background: url(${Background});
  background-size: cover;
  background-repeat: no-repeat;

  .wrapper {
    display: flex;
    height: 90vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /* background: red; */

    #alignText {
      display: flex;
      align-items: center;
      margin-top: 4%;
    }

    h1 {
      color: white;
      font-size: 60px;
    }

    h3 {
      margin-left: 30px;
      color: white;
      font-size: 60px;
      font-weight: 100;
    }

    .devPerfil {
      height: 40%;
      width: auto;
      border-radius: 50%;
      border: solid 10px white;
    }

    .Test {
      color: white;
      font-size: 100px;
    }

    #textTransition {
      display: flex;
    }

    .iconProps {
      opacity: 40%;
      color: white;
      font-size: 40px;
      margin: 0 15px;
      margin-top: 15px;
      transition: 0.3s;
    }

    .iconProps:hover {
      opacity: 100%;
      color: white;
      font-size: 50px;
      margin: 0 15px;
      transition: 0.3s;
    }
  }

  .meVideo {
    height: 330px;
    width: 330px;
    background: blue;
  }
`;
