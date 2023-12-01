import React, { useEffect, useRef } from "react";

const ScrollToTopOnReload = () => {
    const rootRef = useRef(null);

    useEffect(() => {
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
