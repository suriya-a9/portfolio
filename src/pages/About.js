import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import "./Home.css";
import "./About.css";

const About = () => {
  const contentRef = useRef(null);
  const isInView = useInView(contentRef, { once: true, margin: "-50px" });

  return (
    <section className="about-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-9">
            <motion.main
              ref={contentRef}
              className="about-content"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="section-header">
                <span className="subtitle">PORTFOLIO</span>
                <h2>
                  About <span>Me</span>
                </h2>
              </div>

              <div className="about-body">
                <p className="about-text">
                  Hi, I’m Suriya Prakash, Full Stack Developer with 3.5+ years of experience building web apps using PostgreSQL, MongoDB, Express.js, React.js, and Node.js (PERN/MERN stack).
                </p>
                <p className="about-text">
                  I've worked on CMS platforms, e-commerce applications, and SaaS products, developing responsive React frontends, building scalable Node.js APIs, and designing efficient database solutions. I have worked on AI integrations, including implementing Claude API-powered chatbots and Retrieval-Augmented Generation (RAG) to build smarter, context-aware applications.
                </p>
                <p className="about-text">
                  Always up for learning new tech and building things that solve real problems. Let's connect if you'd like to talk tech, collaboration, or opportunities.
                </p>

                <div className="contact-block">
                  <h2 className="section-title">Contact Me</h2>
                  <div className="contact-links">
                    <a href="tel:+916384820056" className="contact-item">
                      <FaPhoneAlt /> <span>+91 63848 20056</span>
                    </a>
                    <a href="mailto:uriyaprakash@gmail.com" className="contact-item">
                      <IoMdMail /> <span>uriyaprakash@gmail.com</span>
                    </a>
                  </div>
                </div>

                <div className="resume-block">
                  <a
                    className="resume-button"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="assets/Suriya_Prakash_MERN_Stack_Resume.pdf"
                  >
                    <span>See My Resume</span>
                    <FiDownload />
                  </a>
                </div>
              </div>
            </motion.main>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;