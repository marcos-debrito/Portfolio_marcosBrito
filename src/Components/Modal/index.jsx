import { ModalOverlay } from "./style";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { MdClose } from "react-icons/md";
import useMediaQuery from "../../Hooks";

export const Modal = ({ setIsOpen }) => {
    const modalRef = useRef(null);
    const [data, setdata] = useState("");

    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    useEffect(() => {
        const handleOutClick = (event) => {
            if (!modalRef.current?.contains(event.target)) {
                setIsOpen(false);
            }
        };

        window.addEventListener("mousedown", handleOutClick);
        return () => {
            window.removeEventListener("mousedown", handleOutClick);
        };
    }, []);

    useEffect(() => {
        const getInfos = localStorage.getItem("@Portfolio:project");
        const data = JSON.parse(getInfos);
        setdata(data);
    }, []);

    return (
        <ModalOverlay role="dialog">
            <motion.div
                className="modalBox"
                ref={modalRef}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.1, duration: 0.2 }}
                variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 },
                }}
            >
                <div className="left">
                    <p>Detalhes do projeto</p>
                </div>
                <div className="right">
                    {isAboveMediumScreens && (
                        <MdClose
                            size={25}
                            className="closeIcon"
                            onClick={() => {
                                setIsOpen(false);
                            }}
                        />
                    )}
                    <p>{data.desc}</p>
                    <div className="containerButton">
                        {data.vercel != "" && (
                            <a href={data.vercel} target="_blank">
                                Aplicação
                            </a>
                        )}

                        <a href={data.github} target="_blank">
                            Repositório
                        </a>
                    </div>
                </div>
            </motion.div>
        </ModalOverlay>
    );
};
