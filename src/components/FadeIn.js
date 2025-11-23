import { motion } from "framer-motion";

const FadeIn = ({ children, delay = 0, y = 16 }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-10% 0% -10% 0%" }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

export default FadeIn;
