import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import { TbBrandGithub } from "react-icons/tb";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FiLinkedin } from "react-icons/fi";
import { GoMail } from "react-icons/go";
import "./About.css";
const About = () => {
  const contentRef = useRef(null);
  const isInView = useInView(contentRef, { once: true });
  return (
    <>
      <section className="about-section">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-4">
                <div className="sidebar">
                  <img className="img-fluid" src={"portfolio/assets/profile-pic.webp"} alt="img" />
                  <h4>Suriya Prakash</h4>
                  <p>A Web Developer who has developed countless innovative solutions.</p>
                  <div className="siderbar-icons">
                    <a href="https://github.com/suriya-a9" target="_blank"><TbBrandGithub /></a>
                    <a href="https://www.linkedin.com/in/suriya-prakash-30885818a" target="_blank"><FiLinkedin /></a>
                    <a href="mailto:youremail@example.com"><GoMail /></a>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-8">
                <motion.div
                  ref={contentRef}
                  className="home-page-content"
                  initial={{ opacity: 0, y: -50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <h1>About<br /><span>Me</span></h1>
                  <div className="about-me">
                    <p>Hi, I’m Suriya Prakash, a skilled web developer specializing in building responsive frontends with React.js and scalable backends using Laravel and Node.js. With a passion for creating impactful digital solutions, I bring ideas to life with clean and efficient code.</p>
                    <h4>Contact Me</h4>
                    <div className="contact">
                      <a href="tel:+916384820056"><FaPhoneAlt /> +91 63848 20056</a>
                      <a href="mailto:uriyaprakash@gmail.com"><IoMdMail /> uriyaprakash@gmail.com</a>
                    </div>
                    📄 <a className="resume" href="assets/resume.pdf" download="Suriya Prakash Resume.pdf">See My Resume <FiDownload /></a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </section >
      <section className="about-section-mobile">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="sidebar">
                  <img className="img-fluid" src={"portfolio/assets/profile-pic.webp"} alt="img" />
                  <h4>Suriya Prakash</h4>
                  <p>A Web Developer who has developed countless innovative solutions.</p>
                  <div className="siderbar-icons">
                    <a href="https://github.com/suriya-a9" target="_blank"><TbBrandGithub /></a>
                    <a href="https://www.linkedin.com/in/suriya-prakash-30885818a" target="_blank"><FiLinkedin /></a>
                    <a href="mailto:youremail@example.com"><GoMail /></a>
                  </div>
                </div>
              </div>
              <div className="col-sm-12">
                <motion.div
                  className="home-page-content"
                >
                  <h1>About<br /><span>Me</span></h1>
                  <div className="about-me">
                    <p>Hi, I’m Suriya Prakash, a skilled web developer specializing in building responsive frontends with React.js and scalable backends using Laravel and Node.js. With a passion for creating impactful digital solutions, I bring ideas to life with clean and efficient code.</p>
                    <h4>Contact Me</h4>
                    <div className="contact">
                      <a href="tel:+916384820056"><FaPhoneAlt /> +91 63848 20056</a>
                      <a href="mailto:uriyaprakash@gmail.com"><IoMdMail /> uriyaprakash@gmail.com</a>
                    </div>
                    📄 <a className="resume" href="assets/resume.pdf" download="Suriya Prakash Resume.pdf">See My Resume <FiDownload /></a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </section >
    </>
  );
};

export default About;
