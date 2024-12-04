import emailjs from "@emailjs/browser";
import React, { useState } from "react";
import { MdContactMail } from "react-icons/md";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact_Us() {
  const [isLoading, setIsLoading] = useState(false);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [disable, setDisable] = useState(true);

  const sendEmail = async (e) => {
    e.preventDefault();
    setDisable(true);
    if (fullname.trim() === "") {
      toast.warn("Please enter your name", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    } else if (email.trim() === "") {
      toast.warn("Please enter Your  email ID", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        transition: Bounce,
      });
      return;
    } else if (message.trim() === "") {
      toast.warn("Please Type Some Message", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        transition: Bounce,
      });
      return;
    }

    const templateParams = {
      from_name: fullname,
      from_email: email,
      to_name: "Amar Kumar",
      to_email: "amarkumar010120042018@gmail.com",
      message: message,
    };

    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    // console.log(serviceId, templateId, publicKey);

    try {
      setIsLoading(true);
      await emailjs
        .send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
          console.log("success", response);
          setIsLoading(false);

          toast.success("Email Sent Successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        });
    } catch (error) {
      setIsLoading(true);
      console.log("Failed", error);
      toast.error("Email Not Send! Try Again", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      setIsLoading(false);
    }
  };
  return (
    <section
      className="w-full h-[100vh] relative flex items-center justify-center bg-gray-200"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://wallpapers.com/images/hd/finger-pointing-contact-us-nmgnzu9fqlu25pri.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <section className="absolute w-full h-full bg-gradient-to-r from-[rgba(46,39,14,0.5)] via-[rgba(0,0,0,.5)] to-[rgba(0,0,0,.5)] ">
        <div className="flex justify-center items-center h-full">
          <div className="bg-[rgba(255,255,255,0.2)] backdrop-blur-lg rounded-lg shadow-xl p-6 w-10/12 sm:w-96">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-semibold text-white">Contact Us</h2>
              <MdContactMail className="text-4xl text-orange-500 mx-auto mt-3" />
            </div>

            <form
              onSubmit={sendEmail}
              className="flex flex-col gap-6 bg-transparent"
            >
              <input
                autoFocus={true}
                type="text"
                name="name"
                onChange={(e) => {
                  setFullname(e.target.value);
                  setDisable(false);
                }}
                value={fullname}
                placeholder="Full Name"
                className="w-full p-3 border-b-2 border-gray-300 outline-none rounded-lg bg-transparent text-white placeholder-gray-300"
              />

              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setDisable(false);
                }}
                placeholder="Email"
                className="w-full p-3 border-b-2 border-gray-300 outline-none  rounded-lg bg-transparent text-white placeholder-gray-300"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  setDisable(false);
                }}
                className="w-full p-3 border-2 border-gray-300 outline-none  rounded-lg bg-transparent text-white  placeholder-gray-300"
              ></textarea>

              <button
                type="submit"
                className={`w-full py-3 px-6 rounded-lg text-white font-semibold bg-gray-700  text-lg transition-all ease-in-out duration-300 ${
                  disable ? "cursor-not-allowed opacity-40" : "cursor-pointer"
                }   `}
                disabled={disable}
              >
                {isLoading ? "Sending..." : "Send"}
              </button>
            </form>
          </div>
        </div>
      </section>
      <ToastContainer />
    </section>
  );
}
