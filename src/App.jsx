import { useState } from "react";
import { GlobalStyle } from "./Styles/GlobalStyles";
import useMediaQuery from "./Hooks";
import NavBar from "./scenes/NavBar/NavBar";

import DotGroup from "./scenes/DotGroup/";
import Landing from "./scenes/Landing/";
import Skills from "./scenes/Skills/";
import Projects from "./scenes/Projects/";
import Contact from "./scenes/Contact/index.jsx/";

import LineGradient from "./Components/LineGradient/";

function App() {
    const [selectedPage, setSelectedPage] = useState("início");
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const isAboveSmallScreens = useMediaQuery("(min-width: 600px)");
    /* Retorna true quando está acima de 1060px e false caso o contrário*/

    return (
        <>
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
            <LineGradient /> {/* Section Division in large Screens */}
            <Skills />
            <LineGradient /> {/* Section Division in large Screens */}
            <Projects />
            <LineGradient /> {/* Section Division in large Screens */}
            <Contact />
        </>
    );
}

export default App;
