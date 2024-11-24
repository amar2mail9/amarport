import React from "react";
import Layout from "../../layout/Layout";
import Contact_Us from "./Contact_Us";
import { motion } from "framer-motion";

export default function Contact_Us_Page() {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        <Contact_Us />
      </motion.div>
    </Layout>
  );
}
