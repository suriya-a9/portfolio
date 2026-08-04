import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TbBrandGithub } from "react-icons/tb";
import { FiLinkedin } from "react-icons/fi";
import { GoArrowUpRight, GoMail } from "react-icons/go";
import "./Home.css";
import "./Experience.css";

const Experience = () => {
    const contentRef = useRef(null);
    const isInView = useInView(contentRef, { once: true, margin: "-50px" });

    return (
        <section className="experience-section">
            <motion.div
                className="experience-layout"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <aside className="experience-sidebar">
                    <img className="sidebar-avatar" src="assets/profile-image.png" alt="Suriya Prakash" />
                    <h4 className="sidebar-name">Suriya Prakash</h4>
                    <p className="sidebar-bio">Building smart and effective web solutions.</p>
                    <div className="sidebar-icons">
                        <a href="https://github.com/suriya-a9" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <TbBrandGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/suriya-prakash-30885818a" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <FiLinkedin />
                        </a>
                        <a href="mailto:uriyaprakash@gmail.com" aria-label="Email">
                            <GoMail />
                        </a>
                    </div>
                </aside>

                <motion.main
                    ref={contentRef}
                    className="experience-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="page-heading">
                        Experience &<br />
                        <span>Education</span>
                    </h1>

                    <section className="experience-block">
                        <h2 className="section-title">Experience</h2>

                        <article className="experience-item">
                            <div className="experience-header">
                                <img src="assets/saras-logo.jpg" alt="Saras Web Solutions" className="company-logo" />
                                <h4 className="company-title">
                                    Saras Web Solutions <span className="duration-tag">March 2025 - Present</span>
                                </h4>
                            </div>

                            <p className="description-text">
                                Working as a Full Stack Developer using the MERN/PERN stack to build scalable web applications, RESTful APIs, and responsive React.js interfaces with secure authentication using JWT and bcrypt.
                            </p>

                            <p className="description-text">
                                Developed AI-powered SaaS features by integrating Claude AI, Voyage AI embeddings, and PGVector, while collaborating with the team to deliver production-ready features, bug fixes, and performance improvements.
                            </p>
                        </article>

                        <article className="experience-item">
                            <div className="experience-header">
                                <img src="assets/embark.webp" alt="Embark Interactive" className="company-logo" />
                                <h4 className="company-title">
                                    Embark Interactive <span className="duration-tag">June 2022 - March 2025</span>
                                </h4>
                            </div>

                            <p className="description-text">
                                Developed scalable web applications using React.js, Node.js, PHP (Laravel), MySQL, MongoDB, and Drupal CMS. Built RESTful APIs, responsive user interfaces, and backend systems for eCommerce, CMS, SaaS, and business applications.
                            </p>

                            <p className="description-text">
                                Integrated third-party APIs, implemented secure authentication (JWT/OAuth), optimized application performance, and collaborated across the full software development lifecycle to deliver production-ready solutions.
                            </p>
                        </article>
                    </section>

                    <section className="experience-block">
                        <h2 className="section-title">Education</h2>

                        <article className="education-card">
                            <img src="assets/tc-arts-logo.webp" alt="TC Arts" className="institution-logo" />
                            <div className="education-details">
                                <h4 className="institution-title">
                                    TC Arts <span className="duration-tag">June 2017 - April 2020</span>
                                </h4>
                                <p className="degree-title">Bachelor of Computer Application</p>
                            </div>
                        </article>

                        <article className="education-card">
                            <img src="assets/tmhss-logo.webp" alt="TMHSS" className="institution-logo" />
                            <div className="education-details">
                                <h4 className="institution-title">
                                    TMHSS <span className="duration-tag">June 2015 - April 2017</span>
                                </h4>
                                <p className="degree-title">Higher Secondary</p>
                            </div>
                        </article>
                    </section>

                    <section className="experience-block">
                        <h2 className="section-title">Certifications</h2>

                        <article className="education-card">
                            <img src="assets/google-logo.webp" alt="Google" className="institution-logo" />
                            <div className="education-details">
                                <h4 className="institution-title">
                                    Google <span className="duration-tag">Dec 2021 - Feb 2022</span>
                                </h4>
                                <p className="degree-title">Google Data Analytics</p>
                                <a
                                    href="https://coursera.org/share/fe32e04beb632fdd61bf33086214af82"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cert-link"
                                >
                                    See my Certificate <GoArrowUpRight />
                                </a>
                            </div>
                        </article>
                    </section>
                </motion.main>
            </motion.div>
        </section>
    );
};

export default Experience;