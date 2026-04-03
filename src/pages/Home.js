import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TbBrandGithub } from "react-icons/tb";
import { PiDevToLogo } from "react-icons/pi";
import { TfiReddit } from "react-icons/tfi";
import { FiLinkedin } from "react-icons/fi";
import { TbCircleDot } from "react-icons/tb";
import { GoMail } from "react-icons/go";
import "./Home.css";

const Home = () => {
  const contentRef = useRef(null);
  const isInView = useInView(contentRef, { once: true });
  return (
    <>
      <section className="home-section">
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
                  <img className="img-fluid" src={"assets/profile-image.png"} alt="img" />
                  <h4>Suriya Prakash</h4>
                  <p>Building smart and effective web solutions.</p>
                  <div className="siderbar-icons">
                    <a href="https://github.com/suriya-a9" target="_blank"><TbBrandGithub /></a>
                    <a href="https://www.linkedin.com/in/suriya-prakash-30885818a" target="_blank"><FiLinkedin /></a>
                    <a href="mailto:uriyaprakash@gmail.com"><GoMail /></a>
                    {/* <a href="https://dev.to/da_faq"><PiDevToLogo /></a>
                    <a href="https://www.reddit.com/user/stanelyvkf/submitted/"><TfiReddit /></a> */}
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
                  <h1>Full Stack<br /><span>Developer</span></h1>
                  <p>I enjoy building web applications from the ground up—taking an idea and turning it into something real and usable. I like working on both the frontend and backend to create smooth, reliable experiences.</p>
                  <div className="home-page-experience">
                    <h4>3+<span>Years of<br />Experience</span></h4>
                    <h4>10+<span>Projects<br />Completed</span></h4>
                  </div>
                </motion.div>
                <motion.div
                  ref={contentRef}
                  className="home-page-content"
                  initial={{ opacity: 0, y: -50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <h4 className="development-heading">What I Bring to the Table</h4>
                  <ul>
                    <li><TbCircleDot /> Expertise in full-stack development, capable of managing projects end-to-end, from designing user interfaces to deploying applications.</li>
                    <li><TbCircleDot /> A knack for solving complex problems with clean, maintainable code following industry best practices.</li>
                    <li><TbCircleDot /> Collaboration and communication skills to work effectively with cross-functional teams, clients, and stakeholders.</li>
                  </ul>
                </motion.div>
                <motion.div
                  className="home-page-content"
                >
                  <h4 className="development-heading">My Journey</h4>
                  <p className="development-heading-p"><TbCircleDot /> My adventure in web development began with a curiosity to understand how the web works. Over the years, this curiosity transformed into a passion for building functional, visually appealing, and efficient web applications.</p>
                  <p className="development-heading-p"><TbCircleDot /> I specialize in the MERN stack—MongoDB, Express.js, React, and Node.js. I enjoy building both user-friendly frontends and reliable backends, and I’m always eager to take on challenges that help me learn and grow.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </section >
      <section className="home-section-mobile">
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
                  <img className="img-fluid" src={"assets/profile-image.png"} alt="img" />
                  <h4>Suriya Prakash</h4>
                  <p>Building smart and effective web solutions.</p>
                  <div className="siderbar-icons">
                    <a href="https://github.com/suriya-a9" target="_blank"><TbBrandGithub /></a>
                    <a href="https://www.linkedin.com/in/suriya-prakash-30885818a" target="_blank"><FiLinkedin /></a>
                    <a href="mailto:uriyaprakash@gmail.com"><GoMail /></a>
                    {/* <a href="https://dev.to/da_faq"><PiDevToLogo /></a>
                    <a href="https://www.reddit.com/user/stanelyvkf/submitted/"><TfiReddit /></a> */}
                  </div>
                </div>
              </div>
              <div className="col-sm-12">
                <motion.div
                  className="home-page-content"
                >
                  <h1>Full Stack<br /><span>Developer</span></h1>
                  <p>I enjoy building web applications from the ground up—taking an idea and turning it into something real and usable. I like working on both the frontend and backend to create smooth, reliable experiences.</p>
                  <div className="home-page-experience">
                    <h4>3+<span>Years of<br />Experience</span></h4>
                    <h4>10+<span>Projects<br />Completed</span></h4>
                  </div>
                </motion.div>
                <motion.div
                  className="home-page-content"
                >
                  <h4 className="development-heading">What I Bring to the Table</h4>
                  <ul>
                    <li><TbCircleDot /> Expertise in full-stack development, capable of managing projects end-to-end, from designing user interfaces to deploying applications.</li>
                    <li><TbCircleDot /> A knack for solving complex problems with clean, maintainable code following industry best practices.</li>
                    <li><TbCircleDot /> Collaboration and communication skills to work effectively with cross-functional teams, clients, and stakeholders.</li>
                  </ul>
                </motion.div>
                <motion.div
                  className="home-page-content"
                >
                  <h4 className="development-heading">My Journey</h4>
                  <p className="development-heading-p"><TbCircleDot /> My adventure in web development began with a curiosity to understand how the web works. Over the years, this curiosity transformed into a passion for building functional, visually appealing, and efficient web applications.</p>
                  <p className="development-heading-p"><TbCircleDot /> I specialize in the MERN stack—MongoDB, Express.js, React, and Node.js. I enjoy building both user-friendly frontends and reliable backends, and I’m always eager to take on challenges that help me learn and grow.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </section >
    </>
  );
};

export default Home;
