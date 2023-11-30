import { useState } from "react";
import { GlobalStyle } from "./Styles/GlobalStyles";
import useMediaQuery from "./Hooks";
import NavBar from "./scenes/NavBar/NavBar";

import DotGroup from "./scenes/DotGroup/index.jsx";
import Landing from "./scenes/Landing/index.jsx";

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
        </>
    );
}

export default App;
