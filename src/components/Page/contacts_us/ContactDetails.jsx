import React from "react";
import { FaPhone, FaPhoneAlt, FaVoicemail } from "react-icons/fa";
import { FiVoicemail } from "react-icons/fi";
import { IoLocation } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";

export default function ContactDetails() {
  return (
    <section
      className="
    w-10/12 mx-auto p-8 my-8 shadow-lg rounded-xl bg-white "
    >
      {/* Get in Touch Section */}
      <div className="mb-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 ">
          Get in Touch
        </h2>
        <p className="text-gray-600  mt-2">
          Feel free to reach out to me using the contact details below!
        </p>
      </div>

      {/* Contact Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        {/* Address */}
        <div className="flex flex-col items-center">
          <div className="text-4xl text-blue-500 mb-2">
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 ">Address</h3>
          <p className="text-gray-600  flex gap-1 items-center">
            {" "}
            <IoLocation />
            Noida,Delhi,India , 110096
          </p>
        </div>

        {/* Phone */}
        <div className="flex flex-col items-center">
          <div className="text-4xl text-green-500 mb-2">
            <i className="fas fa-phone-alt"></i>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 ">Phone</h3>
          <p className="text-gray-600 flex items-center gap-1 ">
            {" "}
            <FaPhoneAlt />
            +91 9608553167
          </p>
        </div>

        {/* Email */}
        <div className="flex flex-col items-center">
          <div className="text-4xl text-red-500 mb-2">
            <i className="fas fa-envelope"></i>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 ">Email</h3>
          <p className="text-gray-600 flex items-center justify-center gap-1 ">
            <MdOutlineMail /> <span>amar47kumar47@gmail.com</span>
          </p>
        </div>
      </div>
    </section>
  );
}
