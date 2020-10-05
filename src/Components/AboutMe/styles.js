import styled from "styled-components";

export const Container = styled.div`
  height: 70vh;
  display: flex;
  justify-content: center;
  .left {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50vw;

    @media only screen and (min-width: 1920px) {
      margin-left: 13%;

      p {
        padding-right: 60%;
      }
    }
    img {
      height: 75%;
      width: auto;
    }
  }
  .right {
    padding-top: 6%;

    h1 {
      font-size: 35px;
      font-weight: bolder;
    }

    p {
      color: grey;
      font-weight: light;
      opacity: 60%;
    }

    h4 {
      color: grey;
      opacity: 90%;
      margin-top: 20px;
      padding-right: 100px;
    }
    span {
      color: black;
    }

    @media only screen and (min-width: 1920px) {
      h4 {
        padding-right: 60%;
      }
    }
  }
`;
