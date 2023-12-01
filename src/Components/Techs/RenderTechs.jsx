import { motion } from "framer-motion";
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { SiStyledcomponents } from "react-icons/si";
import {
    SiJavascript,
    SiTypescript,
    SiReact,
    SiPython,
    SiCsharp,
    SiVite,
    SiNextdotjs,
    SiUnity,
    SiNodedotjs,
    SiExpress,
    SiPostgresql,
    SiDjango,
} from "react-icons/si";
import useMediaQuery from "../../Hooks";

const RenderTechs = ({ name, delay, size = "3rem", link = "#" }) => {
    const getTech = () => {
        switch (name) {
            case "HTML":
                return IoLogoHtml5;
            case "CSS":
                return IoLogoCss3;
            case "SC":
                return SiStyledcomponents;
            case "JS":
                return SiJavascript;
            case "TS":
                return SiTypescript;
            case "REACT":
                return SiReact;
            case "PYTHON":
                return SiPython;
            case "C#":
                return SiCsharp;
            case "VITE":
                return SiVite;
            case "NEXT":
                return SiNextdotjs;
            case "UNITY":
                return SiUnity;
            case "NODE":
                return SiNodedotjs;
            case "EXPRESS":
                return SiExpress;
            case "POSTGRE":
                return SiPostgresql;
            case "DJANGO":
                return SiDjango;
        }
    };

    const Tech = getTech();

    const rediretionate = () => {
        const confirm = window.confirm(
            "Aviso, você será redirecionado para a página da tecnologia"
        );

        if (confirm) {
            window.open(link, "_blank");
        }
    };

    const isUnderSmallScreen = useMediaQuery("(min-width:600px)");
    if (!isUnderSmallScreen) size = "2rem";

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: delay, duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, scale: 0.2 },
                visible: { opacity: 1, scale: 1 },
            }}
        >
            <Tech className="logo" size={size} onClick={rediretionate} />
        </motion.div>
    );
};

export default RenderTechs;
