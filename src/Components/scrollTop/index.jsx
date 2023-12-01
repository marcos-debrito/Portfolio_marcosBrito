import React, { useEffect, useRef } from "react";

const ScrollToTopOnReload = () => {
    const rootRef = useRef(null);

    useEffect(() => {
        // Verifica se o elemento raiz existe antes de chamar scrollIntoView
        if (rootRef.current) {
            rootRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    }, []);

    return <div ref={rootRef} />;
};

export default ScrollToTopOnReload;
