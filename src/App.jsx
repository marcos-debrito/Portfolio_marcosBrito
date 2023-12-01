import { useState, useEffect, useRef } from "react";
import { GlobalStyle } from "./Styles/GlobalStyles";
import useMediaQuery from "./Hooks";
import NavBar from "./scenes/NavBar/NavBar";
import DotGroup from "./scenes/DotGroup/";
import Landing from "./scenes/Landing/";
import Skills from "./scenes/Skills/";
import Projects from "./scenes/Projects/index.jsx";
import ContactMe from "./scenes/Contact/index.jsx/";
import { Toaster } from "react-hot-toast";
import { motion, useAnimation } from "framer-motion";

function App() {
    const [selectedPage, setSelectedPage] = useState("início");
    const isAboveSmallScreens = useMediaQuery("(min-width: 600px)");

    const landingRef = useRef(null);
    const skillsRef = useRef(null);
    const projectsRef = useRef(null);
    const contactMeRef = useRef(null);

    const controls = useAnimation();

    const handleIntersection = (entry, targetPage) => {
        if (entry.isIntersecting) {
            setSelectedPage(targetPage);
        }
    };
    useEffect(() => {
        const observerOptions = {
            threshold: 0.5,
        };

        const observerLanding = new IntersectionObserver(
            (entries) => handleIntersection(entries[0], "início"),
            observerOptions
        );
        observerLanding.observe(landingRef.current);

        const observerSkills = new IntersectionObserver(
            (entries) => handleIntersection(entries[0], "habilidades"),
            observerOptions
        );
        observerSkills.observe(skillsRef.current);

        const observerProjects = new IntersectionObserver(
            (entries) => handleIntersection(entries[0], "projetos"),
            observerOptions
        );
        observerProjects.observe(projectsRef.current);

        const observerContactMe = new IntersectionObserver(
            (entries) => handleIntersection(entries[0], "contato"),
            observerOptions
        );
        observerContactMe.observe(contactMeRef.current);

        return () => {
            observerLanding.disconnect();
            observerSkills.disconnect();
            observerProjects.disconnect();
            observerContactMe.disconnect();
        };
    }, []);

    return (
        <>
            <Toaster />
            <GlobalStyle />

            <NavBar
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
            />
            {isAboveSmallScreens && (
                <div className="DotStyle">
                    <DotGroup
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                </div>
            )}

            <motion.div
                ref={landingRef}
                animate={controls}
                transition={{ duration: 0.5 }}
            >
                <Landing />
            </motion.div>

            <motion.div
                ref={skillsRef}
                animate={controls}
                transition={{ duration: 0.5 }}
            >
                <Skills />
            </motion.div>

            <motion.div
                ref={projectsRef}
                animate={controls}
                transition={{ duration: 0.5 }}
            >
                <Projects />
            </motion.div>

            <motion.div
                ref={contactMeRef}
                animate={controls}
                transition={{ duration: 0.5 }}
            >
                <ContactMe />
            </motion.div>
        </>
    );
}

export default App;
