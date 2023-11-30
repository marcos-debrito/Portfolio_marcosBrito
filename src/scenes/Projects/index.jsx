import { ProjectSection } from "./style.js";
import { motion } from "framer-motion";
import projectsData from "../../data/index.jsx";
import quadradinhos from "../../assets/quadradinhos_projetos.svg";
import useMediaQuery from "../../Hooks/index.jsx";

const Projects = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1420px)");
    return (
        <ProjectSection id="projetos">
            <motion.div
                className="titleProject"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 },
                }}
            >
                <h2>Meus projetos</h2>
            </motion.div>
            <div className="containerProjects">
                {projectsData.map((project, index) => (
                    <motion.div
                        key={index}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.4 + index * 0.2, duration: 0.4 }}
                        variants={{
                            hidden: { opacity: 0, scale: 0.8 },
                            visible: { opacity: 1, scale: 1 },
                        }}
                    >
                        <img
                            className="project"
                            src={project.image}
                            alt={project.alt}
                            onClick={() => {
                                console.log(project.index);
                                /* Esse index usaremos para abrir o modal correspondente :D */
                            }}
                        />
                    </motion.div>
                ))}
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
        </ProjectSection>
    );
};

export default Projects;
