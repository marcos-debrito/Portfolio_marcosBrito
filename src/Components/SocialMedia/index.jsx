import { SiLinkedin, SiGithub, SiInstagram } from "react-icons/si";
import { motion } from "framer-motion";

const MotionIcons = ({ link, name, delay }) => {
    const rediretionate = () => {
        window.open(link, "_blank");
    };

    const getIcon = () => {
        switch (name) {
            case "linkedin":
                return SiLinkedin;
            case "github":
                return SiGithub;
            case "instagram":
                return SiInstagram;
            default:
                return null;
        }
    };

    const Icon = getIcon();

    return (
        <div className="">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: delay, duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1 ,x: 0 },
                }}
            >
                {Icon && (
                    <Icon
                        className="cursor-pointer hover:scale-105 transition duration-300"
                        size={30}
                        onClick={rediretionate}
                    />
                )}
            </motion.div>
        </div>
    );
};

export default MotionIcons;