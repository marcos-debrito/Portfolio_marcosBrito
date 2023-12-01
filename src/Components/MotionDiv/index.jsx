import { motion } from "framer-motion";

export const MotionDiv = ({ children, delay = 0 }) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: delay, duration: 0.3 }}
            variants={{
                hidden: { opacity: 0, scale: 0.5 },
                visible: { opacity: 1, scale: 1 },
            }}
        >
            {children}
        </motion.div>
    );
};
