"use client";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header style={headerStyle}>
      <motion.div
        transition={{ type: "spring", damping: 18, mass: 0.75 }}
        initial={{ opacity: 0, x: -1000 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <h1 className="fff">Book App</h1>
      </motion.div>
    </header>
  );
}

const headerStyle = {
  padding: "1rem 1re 1rem 0",
  color: "#fff",
};
