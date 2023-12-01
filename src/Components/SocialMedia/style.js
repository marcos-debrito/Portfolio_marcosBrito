import { styled } from "styled-components";

export const SocialMediaContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    gap: 2rem;
    cursor: pointer;

    div {
        .socialmediaIcon {
            transition: 0.3s ease-in-out;
        }

        .socialmediaIcon:hover {
            transform: scale(1.1);
        }
    }

    @media (min-width: 1060px) {
        justify-content: start;
    }
`;
