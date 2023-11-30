import useMediaQuery from "../../Hooks";
import { motion } from "framer-motion";
import { LandingPage, AnchorDownload } from "./style";
import profileImage from "../../assets/profilePhoto.png";
import quadradinhos from "../../assets/quadradinhos_inicio.svg";
import SocialMediaIcons from "../Components/SocialMedia/SocialMediaIcons.jsx";

const Landing = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1420px)");

    return (
        /* Section -> LandingPage */
        <LandingPage id="início">
            {/* First -> IMAGE SECTION */}
            <motion.div
                className="containerImage"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                variants={{
                    hidden: { opacity: 0, x: +50 },
                    visible: { opacity: 1, x: 0 },
                }}
            >
                <figure>
                    <img src={profileImage} alt="profile image" />
                </figure>
            </motion.div>

            {/* Main Section */}
            <div className="containerTexts">
                {/* Headings Section */}

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.7 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <p className="title">
                        Desenvolvedor <span>Full Stack</span>
                    </p>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Numquam similique fuga odit incidunt unde at,
                        repudiandae
                    </p>
                </motion.div>

                {/* ACTIONS */}
                <motion.div
                    className="containerActions"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.7 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <AnchorDownload>
                        <a href="">Currículo</a>
                        <a
                            href="https://docs.google.com/document/d/1k7G72Rx1zewPdOAgqsXjQiEXheWTc73_oeN5cVTaDsY/edit"
                            target="_blank"
                            className="download"
                        >
                            Download
                        </a>
                    </AnchorDownload>
                </motion.div>

                <SocialMediaIcons />
            </div>

            {isAboveMediumScreens && (
                <motion.div
                    className="squareContainer"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 15 }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 0.6 },
                    }}
                >
                    <img className="square" src={quadradinhos} />
                </motion.div>
            )}
        </LandingPage>
    );
};

export default Landing;
