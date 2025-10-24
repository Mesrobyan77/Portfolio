import React from "react";
import { motion } from "framer-motion";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const nameRegex = /^[a-zA-Z\s]{2,50}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validationSchema = Yup.object({
    name: Yup.string()
      .matches(nameRegex, "Name must be 2-50 characters, letters only")
      .required("Name is required"),
    email: Yup.string()
      .matches(emailRegex, "Invalid email address")
      .required("Email is required"),
    message: Yup.string()
      .min(10, "Message must be at least 10 characters")
      .required("Message is required"),
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    emailjs
      .send("service_mfvhdug", "template_wtknazl", {
        name: values.name,
        message: values.message,
        title: "Conect with me ",
        email: values.email,
      },"vsSGQUo9KHaqDrzrq")
      .then(
        () => {
          setSubmitting(false);
          toast.success("Thank you! I will get back to you soon.");
          resetForm();
        },
        (error) => {
          setSubmitting(false);
          console.error(error);
          toast.error("Oops! Something went wrong. Please try again.");
        }
      );
  };

  return (
    <>
      <div
        className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="mt-12 flex flex-col gap-8">
                <label className="flex flex-col">
                  <span className="text-white font-medium mb-4">Your Name</span>
                  <Field
                    type="text"
                    name="name"
                    placeholder="What's your good name?"
                    className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </label>

                <label className="flex flex-col">
                  <span className="text-white font-medium mb-4">
                    Your Email
                  </span>
                  <Field
                    type="email"
                    name="email"
                    placeholder="What's your email?"
                    className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </label>

                <label className="flex flex-col">
                  <span className="text-white font-medium mb-4">
                    Your Message
                  </span>
                  <Field
                    as="textarea"
                    rows={7}
                    name="message"
                    placeholder="What you want to say?"
                    className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </label>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
                >
                  {isSubmitting ? "Sending..." : "Send"}
                </button>
              </Form>
            )}
          </Formik>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>

    </>
  );
};

export default SectionWrapper(Contact, "contact");
