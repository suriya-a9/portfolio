import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TbBrandGithub } from "react-icons/tb";
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
                  <img className="img-fluid" src={"assets/profile-pic.webp"} alt="img" />
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
                  <h1>Web<br /><span>Developer</span></h1>
                  <p>Passionate about building seamless web solutions from concept to deployment.<br />Skilled in designing dynamic frontends and robust backends, delivering high-<br />performance applications that solve real-world problems.</p>
                  <div className="home-page-experience">
                    <h4>2+<span>Years of<br />Experience</span></h4>
                    <h4>8+<span>Projects<br />Completed</span></h4>
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
                  <p className="development-heading-p"><TbCircleDot /> I specialize in React.js, JavaScript (ES6+), PHP, and Laravel, but my toolkit also includes Node.js, MongoDB, and Drupal CMS. Whether it's developing a user-friendly frontend or designing a robust backend, I enjoy taking on challenges that push me to grow and learn.
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
                  <img className="img-fluid" src={"assets/profile-pic.webp"} alt="img" />
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
                  <h1>Web<br /><span>Developer</span></h1>
                  <p>Passionate about building seamless web solutions from concept to deployment.<br />Skilled in designing dynamic frontends and robust backends, delivering high-<br />performance applications that solve real-world problems.</p>
                  <div className="home-page-experience">
                    <h4>2+<span>Years of<br />Experience</span></h4>
                    <h4>8+<span>Projects<br />Completed</span></h4>
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
                  <p className="development-heading-p"><TbCircleDot /> I specialize in React.js, JavaScript (ES6+), PHP, and Laravel, but my toolkit also includes Node.js, MongoDB, and Drupal CMS. Whether it's developing a user-friendly frontend or designing a robust backend, I enjoy taking on challenges that push me to grow and learn.
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
