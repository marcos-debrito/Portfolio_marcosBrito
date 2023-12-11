import { CertificatesSection } from "./style.js";
import { motion } from "framer-motion";
import useMediaQuery from "../../Hooks/index.jsx";

import right from "../../assets/squares/squares_contact_right.svg";
import left from "../../assets/squares/squares_contact_left.svg";

import { MotionDiv } from "../../Components/MotionDiv/index.jsx";

import m3 from "../../assets/certificates/m3.png";
import m4 from "../../assets/certificates/m4.png";
import m5 from "../../assets/certificates/m5.png";

const images = [m3, m4, m5];

const Certificates = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <CertificatesSection id="certificados">
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
        Certificados
      </motion.h1>

      <div className="ContainerImages">
        {images.map((image, index) => (
          <motion.div
            className="item"
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4 + index * 0.2, duration: 0.4 }}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <img src={image} alt="certificados" />
          </motion.div>
        ))}
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
    </CertificatesSection>
  );
};

export default Certificates;
