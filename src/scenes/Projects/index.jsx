import { ProjectSection } from "./style.js";
import { motion } from "framer-motion";
import projectsData from "../../data/index.js";
import quadradinhos from "../../assets/squares/squares_projects.svg";
import useMediaQuery from "../../Hooks/index.jsx";
import { useState } from "react";
import { Modal } from "../../Components/Modal/index.jsx";

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  const putInLocalStorage = (project) => {
    const stringfy = JSON.stringify(project);

    localStorage.setItem("@Portfolio:project", stringfy);
    setIsOpen(true);
  };

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
        <h1>Principais Projetos</h1>
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
                putInLocalStorage(project);
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

      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </ProjectSection>
  );
};

export default Projects;
