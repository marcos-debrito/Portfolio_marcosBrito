import MotionIcons from "./index";
import { SocialMediaContainer } from "./style";

const SocialMediaIcons = () => {
    return (
        <SocialMediaContainer>
            <MotionIcons
                link="https://www.linkedin.com/in/marcos-debrito/"
                name="linkedin"
                delay="0.5"
            />
            <MotionIcons
                link="https://github.com/marcos-debrito"
                name="github"
                delay="0.7"
            />
            <MotionIcons
                link="https://www.instagram.com/marcos_debritoo/"
                name="instagram"
                delay="0.9"
            />
        </SocialMediaContainer>
    );
};

export default SocialMediaIcons;
