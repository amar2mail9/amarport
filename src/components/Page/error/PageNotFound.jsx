import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Layout from "../../layout/Layout";
import { MdError } from "react-icons/md";
import { motion } from "framer-motion";

export default function PageNotFound() {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="w-full h-[80vh]  flex items-center justify-center flex-col gap-2"
      >
        <h4 className=" text-rose-600 animate-bounce font-extrabold text-3xl flex items-center ">
          404 Error <MdError />
        </h4>
        <p className="text-lg text-gray-600 font-semibold">Page Not Found</p>
        <Link to={"/"} className="">
          <motion.button
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            className="flex hover:scale-105 hover:animate-pulse duration-500 delay-150  bg-orange-600 px-6 py-2 rounded-lg hover:bg-green-600 items-center gap-2 text-white "
          >
            <FaArrowLeft /> Return to Home Page
          </motion.button>
        </Link>
      </motion.div>
    </Layout>
  );
}
