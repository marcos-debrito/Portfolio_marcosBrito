import useMediaQuery from "../../Hooks";
import { SkillSection } from "./style";
import Techs from "../../Components/Techs/";
import quadradinhos from "../../assets/square_skills.svg";
import { motion } from "framer-motion";

const Skills = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1420px)");
    return (
        /* Section -> Habilidades */
        <SkillSection id="habilidades" className="Container">
            <motion.div
                className="left"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4 }}
                variants={{
                    hidden: { opacity: 0.5, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 },
                }}
            >
                <h2>Habilidades - Tecnologias</h2>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dicta sapiente nobis odio libero. Aliquam,
                </p>

                <div className="Colorized">
                    <span>Hard Skills </span>
                    <span>Front-end e Back-end</span>
                </div>
            </motion.div>

            <div className="right">
                <Techs />
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
        </SkillSection>
    );
};

export default Skills;
