import { useState } from "react";
import { GlobalStyle } from "./Styles/GlobalStyles";
import useMediaQuery from "./Hooks";
import NavBar from "./scenes/NavBar/NavBar";

import DotGroup from "./scenes/DotGroup/";
import Landing from "./scenes/Landing/";
import Skills from "./scenes/Skills/";
import Projects from "./scenes/Projects/index.jsx";
import ContactMe from "./scenes/Contact/index.jsx/";
import { Toaster } from "react-hot-toast";
import ScrollToTopOnReload from "./Components/scrollTop/index.jsx";

import { motion } from "framer-motion";

function App() {
    const [selectedPage, setSelectedPage] = useState("início");
    const isAboveSmallScreens = useMediaQuery("(min-width: 600px)");
    /* Retorna true quando está acima de 1060px e false caso o contrário*/

    return (
        <>
            <Toaster />
            <ScrollToTopOnReload />
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
            
            <Landing />
            <Skills />
            <Projects />
            <ContactMe />
        </>
    );
}

export default App;
