import { useEffect, useState } from "react";
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

function App() {
    const [selectedPage, setSelectedPage] = useState("início");
    const isAboveSmallScreens = useMediaQuery("(min-width: 600px)");
    /* Retorna true quando está acima de 1060px e false caso o contrário*/

    useEffect(() => {
        const handleScroll = (e) => {
            e.preventDefault();
        };

        // Adiciona um ouvinte de evento para o evento de rolagem
        window.addEventListener("wheel", handleScroll, { passive: false });

        // Limpa o ouvinte de evento quando o componente é desmontado
        return () => {
            window.removeEventListener("wheel", handleScroll);
        };
    }, []);

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
