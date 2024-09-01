import { motion } from "framer-motion";
import { greeting } from "../../portfolio.js";
import "./Footer.css";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    <div className="footer-div">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
           - {greeting.full_name} -
        </p>
      </motion.div>
    </div>
  );
}
