import { ContactSection } from "./style.js";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { verifyForm } from "./schema.js";
import toast from "react-hot-toast";
import useMediaQuery from "../../Hooks/index.jsx";

import right from "../../assets/squares/squares_contact_right.svg";
import left from "../../assets/squares/squares_contact_left.svg";

import { MotionDiv } from "../../Components/MotionDiv/index.jsx";

const ContactMe = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: zodResolver(verifyForm),
    });

    const submit = async (e) => {
        toast.success("EM MANUTENÇÃO!", {
            style: {
                border: "1px solid #010026",
                padding: "16px",
                color: "white",
                background: "#305080",
            },
            iconTheme: {
                primary: "#dfca6a",
                secondary: "#FFFAEE",
            },
        });

        reset();
    };

    return (
        <ContactSection id="contato">
            <motion.h1
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4 }}
                variants={{
                    hidden: { opacity: 0, scale: 0.5 },
                    visible: { opacity: 1, scale: 1 },
                }}
            >
                Entre em contato
            </motion.h1>

            {/* Colocar animação depois */}
            <div className="ContactContainer">
                <form
                    autoComplete="off"
                    target="_blank"
                    onSubmit={handleSubmit(submit)}
                    action="https://formsubmit.com/marcos.debrito@Outlook.com"
                    method="POST"
                >
                    <MotionDiv>
                        <input
                            className="name"
                            type="text"
                            placeholder="Nome"
                            {...register("name")}
                        />
                        {errors.name ? (
                            <span>{errors.name.message}</span>
                        ) : null}
                    </MotionDiv>

                    <MotionDiv delay={0.4}>
                        <input
                            className="email"
                            type="text"
                            placeholder="Email"
                            {...register("email", {
                                required: true,
                                pattern:
                                    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            })}
                        />
                        {errors.email ? (
                            <span>{errors.email.message}</span>
                        ) : null}
                    </MotionDiv>

                    <MotionDiv delay={0.8}>
                        <textarea
                            rows="20"
                            column="50"
                            className="text"
                            type="text"
                            placeholder="Digite sua mensagem"
                            {...register("message")}
                        />
                        {errors.message ? (
                            <span>{errors.message.message}</span>
                        ) : null}
                    </MotionDiv>

                    <MotionDiv delay={1.2}>
                        <button className="sendMessage" type="submit">
                            Enviar mensagem
                        </button>
                    </MotionDiv>
                </form>
            </div>

            {isAboveMediumScreens && (
                <motion.div
                    className="squareContainer"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 5 }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 0.6 },
                    }}
                >
                    <img className="squareLeft" src={left} />
                    <img className="squareRight" src={right} />
                </motion.div>
            )}
        </ContactSection>
    );
};

export default ContactMe;
