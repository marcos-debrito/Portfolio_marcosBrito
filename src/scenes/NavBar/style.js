import styled, { keyframes } from "styled-components";

export const Nav = styled.nav`
    z-index: 40;
    width: 100%;
    position: fixed;
    top: 0px;
    padding: 0.2rem 0.2rem;
    background: #010026d4;
    backdrop-filter: ${(props) => (props.$blur ? "blur(3px)" : "none")};

    .ContainerNav {
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin: 0 auto;
        max-width: 1500px;

        .desktop {
            margin: 0 1rem;
            display: flex;
            justify-content: center;
            gap: 1rem;
            width: 40%;
            font-weight: 600;
        }
    }
`;

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`;

export const MenuMobile = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: fixed;
    right: 0;
    bottom: 0;
    height: 100%;
    background: #305080;
    gap: 80px;
    animation: ${(props) => (props.$isopen ? slideOut : slideIn)} 0.5s ease;

    .CloseButton {
        display: flex;
        flex-direction: row-reverse;
        padding: 50px 40px 0 0;
    }

    .Container {
        width: 50vw;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 1.9rem;
    }
`;
