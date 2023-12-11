import styled from "styled-components";

export const CertificatesSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 900px;
  min-height: 100vh;
  margin: 0 auto;
  position: relative;

  .ContainerImages {
    display: flex;
    flex-wrap: wrap;
    width: 300px;
    margin: 0 auto;

    justify-content: center;

    .item {
      z-index: 10;

      img {
        max-height: 100%;
        max-width: 100%;
        transition: 0.5s ease-in-out;
      }

      img:hover {
        transform: scale(1.05);
        cursor: pointer;
      }
    }
  }

  .squareLeft {
    overflow: hidden;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 0;
  }

  .squareRight {
    overflow: hidden;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 0;
  }

  @media (min-width: 650px) {
    margin: 200px auto;

    .ContainerImages {
      width: 50vw;

      .item {
        height: 300px;
        padding: 20px;
      }
    }
  }

  @media (min-width: 1060px) {
    height: 100vh;
  }
`;
