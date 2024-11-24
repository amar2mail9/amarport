import React from "react";
import { AiFillContacts } from "react-icons/ai";
import { FiPhoneCall, FiMail } from "react-icons/fi";
import { motion } from "framer-motion";
export default function Contact_Us() {
  return (
    <article className="relative z-10 h-[90vh] bg-gray-100 py-7 flex items-center justify-center">
      {/* SVG Wave */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 310"
        className="absolute bottom-0 left-0 w-full z-0"
      >
        <path
          fill="#f47315"
          fillOpacity="1"
          d="M0,64L720,224L1440,32L1440,320L720,320L0,320Z"
        ></path>
      </svg>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="bg-white md:w-6/12 lg:w-5/12 mx-auto w-11/12 md:p-6 p-3 rounded-xl shadow-xl z-10 relative"
      >
        <section>
          <h3 className="text-3xl flex items-center justify-center gap-3 text-gray-500 font-semibold text-center">
            Contact Us <AiFillContacts className="text-orange-500" />
          </h3>
          <form action="" className="py-8 text-gray-600 grid gap-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full border-2 outline-none rounded-lg py-2 text-lg px-4 border-gray-400 focus:outline-none focus:ring-0 focus:border-orange-500 hover:border-orange-400 transition-colors"
                />
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full border-2 outline-none rounded-lg py-2 text-lg px-4 border-gray-400 focus:outline-none focus:ring-0 focus:border-orange-500 hover:border-orange-400 transition-colors"
                />
              </div>
            </div>

            <div className="relative">
              <FiPhoneCall className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-500" />
              <input
                type="text"
                className="w-full pl-12 border-2 border-gray-400 py-2 text-lg rounded-lg px-4 focus:outline-none focus:ring-0 focus:border-orange-500 hover:border-orange-400 transition-colors"
                placeholder="Phone No."
              />
            </div>

            <div className="relative">
              <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-500" />
              <input
                type="email"
                className="w-full pl-12 border-2 border-gray-400 py-2 text-lg rounded-lg px-4 focus:outline-none focus:ring-0 focus:border-orange-500 hover:border-orange-400 transition-colors"
                placeholder="Email"
              />
            </div>

            <textarea
              name=""
              id=""
              className="w-full p-4 text-gray-600 border-2 border-slate-400 rounded-lg focus:outline-none focus:ring-0 focus:border-orange-500 hover:border-orange-400 transition-colors"
              placeholder="Message"
              rows={4}
            ></textarea>

            <button
              type="submit"
              className="w-full py-2 px-6 bg-orange-500 text-white rounded-lg transition-colors hover:bg-orange-600"
            >
              Send
            </button>
          </form>
        </section>
      </motion.div>
    </article>
  );
}
