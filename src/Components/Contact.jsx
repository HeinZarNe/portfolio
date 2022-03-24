import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { RiSendPlaneFill } from "react-icons/ri";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiFillBehanceCircle,
} from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import { MdContactMail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const Result = () => {
  return <h5 className="text-dark">Your message is successfully recieved.</h5>;
};

const Button = () => {
  const navigate = useNavigate();
  return (
    <div
      className="Button rounded-3 animate__animated  animate__bounce animate__infinite"
      onClick={(_) => navigate("/contact")}
    >
      Contact Me{" "}
      <IconContext.Provider value={{ className: "mb-2" }}>
        <MdContactMail />
      </IconContext.Provider>
    </div>
  );
};

const Contact = () => {
  const form = useRef();
  const [isSend, setIsSend] = useState(false);

  const formik = useFormik({
    initialValues: {
      from_name: "",
      from_email: "",
      message: "",
    },
    validationSchema: Yup.object({
      from_name: Yup.string().required("Name must be fill."),
      from_email: Yup.string()
        .required("Please,fill your email")
        .email("Invalid email address."),
      message: Yup.string()
        .min(5, "Message must exceed 5 characters")
        .required("Please, fill your message"),
    }),
    onSubmit: (e) => {
      sendEmail(e);
    },
  });

  const sendEmail = (e) => {
    emailjs
      .sendForm(
        "service_r7oor39",
        "template_c8yjbdt",
        form.current,
        "YR5wXOC2ZAHr0jk06"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setIsSend(true);

    setTimeout((_) => setIsSend(false), 3000);
  };
  return (
    <>
      <div className="Contact">
        <div className="upper-inner-div p-5 d-flex flex-column justify-content-around align-items-start">
          <span className="fs-1  text-center d-block fw-bolder w-100">
            Contact <span className="highlight px-3 py-1">Me</span>
          </span>
          <div className="profiles d-flex justify-content-center ">
            {" "}
            <IconContext.Provider value={{ size: "30px" }}>
              <a href="https://github.com/HeinZarNe">
                <div className="github w-fit mx-2 cursor-p">
                  <AiOutlineGithub />
                </div>
              </a>
              <a href="https://www.linkedin.com/in/hein-zar-ne-783a01229/">
                <div className="linkedIn w-fit mx-2 cursor-p">
                  <AiFillLinkedin />
                </div>
              </a>
              <a href="https://behance.net/hein-zarne">
                <div className="behance w-fit mx-2 cursor-p">
                  <AiFillBehanceCircle />
                </div>
              </a>
            </IconContext.Provider>
          </div>
        </div>
        <div className="lower-inner-div">
          <div className="p-3 form-shell border-2 m-0 rounded-2 ">
            <form
              className="row g-3"
              ref={form}
              onSubmit={(e) => {
                formik.handleSubmit(e);
                setTimeout((_) => formik.resetForm(), 3000);
              }}
            >
              <div className="mb-3 col-12 col-md-6">
                <div className="input-group me-2 ps-0 shadow-lg ">
                  <span className="input-group-text border-0" id="basic-addon1">
                    Name
                  </span>
                  <input
                    type="text"
                    className="form-control border-0"
                    id="validationCustom01"
                    placeholder="Your name"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    name="from_name"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.from_name}
                  />
                </div>

                {formik.touched.from_name && formik.errors.from_name ? (
                  <p
                    className="error-text
             fs-6 position-absolute "
                  >
                    {formik.errors.from_name}
                  </p>
                ) : null}
              </div>
              <div className="mb-3 col-12 col-md-6">
                <div className="input-group  ps-0 shadow-lg">
                  <span
                    className="input-group-text border-0"
                    id="validationCustom02"
                  >
                    Email
                  </span>

                  <input
                    type="text"
                    className="form-control border-0"
                    placeholder="tom@gmail.com"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    name="from_email"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.from_email}
                  />
                </div>
                {formik.touched.from_email && formik.errors.from_email ? (
                  <p
                    className="error-text
             fs-6 position-absolute "
                  >
                    {formik.errors.from_email}
                  </p>
                ) : null}
              </div>
              <div className="mb-3 col-12 ">
                <div className="input-group shadow-lg ">
                  <span className="input-group-text border-0">Message</span>
                  <textarea
                    className="form-control border-0"
                    name="message"
                    placeholder="You are a good website developer !"
                    aria-label="With textarea"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    rows="5"
                    value={formik.values.message}
                  />
                </div>
                {formik.touched.message && formik.errors.message ? (
                  <p
                    className="error-text
             fs-6 position-absolute "
                  >
                    {formik.errors.message}
                  </p>
                ) : null}
              </div>
              <div className="col-12">
                <button className="btn btn-info w-50 " type="submit">
                  Send
                  <RiSendPlaneFill
                    className="ms-2 icon text-dark
                "
                  />
                </button>
              </div>
              <div className="text-success h6">
                {isSend ? <Result /> : null}
              </div>
            </form>
          </div>
        </div>
      </div>
      <Button />
    </>
  );
};

export default Contact;
