import { Analytics } from "@vercel/analytics/react";
import { useState, useEffect, useRef } from "react";
import { GlobalStyle } from "./Styles/GlobalStyles";
import useMediaQuery from "./Hooks";
import NavBar from "./scenes/NavBar/NavBar";
import DotGroup from "./scenes/DotGroup/";
import Landing from "./scenes/Landing/";
import Skills from "./scenes/Skills/";
import Projects from "./scenes/Projects/index.jsx";
import Certificates from "./scenes/Contact/index.jsx/";
import { Toaster } from "react-hot-toast";
import { motion, useAnimation } from "framer-motion";

function App() {
  const [selectedPage, setSelectedPage] = useState("início");
  const isAboveSmallScreens = useMediaQuery("(min-width: 600px)");

  const sectionRefs = {
    landing: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    certificates: useRef(null),
  };

  const controls = useAnimation();

  const handleIntersection = (entry, targetPage) => {
    if (entry.isIntersecting) {
      switch (targetPage) {
        case "landing":
          setSelectedPage("início");
          break;
        case "skills":
          setSelectedPage("habilidades");
          break;
        case "projects":
          setSelectedPage("projetos");
          break;
        case "certificates":
          setSelectedPage("certificados");
          break;
      }
    }
  };

  const setupObserver = (ref, targetPage) => {
    const observerOptions = {
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(
      (entries) => handleIntersection(entries[0], targetPage),
      observerOptions
    );
    observer.observe(ref.current);

    return observer;
  };

  useEffect(() => {
    const observers = Object.entries(sectionRefs).map(([key, ref]) =>
      setupObserver(ref, key)
    );

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <>
      <Toaster />
      <GlobalStyle />

      <NavBar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      {isAboveSmallScreens && (
        <div className="DotStyle">
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        </div>
      )}

      {Object.entries(sectionRefs).map(([key, ref]) => (
        <motion.div
          key={key}
          ref={ref}
          animate={controls}
          transition={{ duration: 0.5 }}
        >
          {key === "landing" && <Landing />}
          {key === "skills" && <Skills />}
          {key === "projects" && <Projects />}
          {key === "certificates" && <Certificates />}
        </motion.div>
      ))}

      <Analytics />
    </>
  );
}

export default App;
