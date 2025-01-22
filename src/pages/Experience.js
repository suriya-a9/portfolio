import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TbBrandGithub } from "react-icons/tb";
import { FiLinkedin } from "react-icons/fi";
import { GoArrowUpRight } from "react-icons/go";
import { GoMail } from "react-icons/go";
import "./Home.css";
import "./Experience.css";

const Experience = () => {
    const contentRef = useRef(null);
    const isInView = useInView(contentRef, { once: true });
    return (
        <>
            <section className="experience-section">
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
                                    <h1>Experience &<br /><span>Education</span></h1>
                                    <h2 className="title-experience">Experience</h2>
                                    <h4 className="experience-title"><img src={"assets/embark.webp"} alt="img" className="img-fluid" /> Embark Interractive <span>June 2022 - Present</span></h4>
                                    <p>Full-stack development of scalable web applications using PHP (Laravel) and modern JavaScript frameworks (React.js). Designed and implemented robust backend architectures, including RESTful APIs and database management with MySQL and MongoDB. Developed dynamic, responsive front-end interfaces with React.js, JavaScript (ES6+), HTML5, and CSS3 (Sass), ensuring seamless user experiences. Leveraged Laravel's MVC architecture to handle complex business logic, middleware, and data validation.</p>
                                    <p>Built and customized web solutions using Drupal CMS platforms, integrating modules, themes, and plugins to meet client requirements. Followed best practices for code maintainability, including SOLID principles, PSR standards, and design patterns. Integrated third-party APIs, handled authentication/authorization (OAuth, JWT), and optimized performance for high-traffic applications.</p>

                                    <h2 className="title-experience">Education</h2>
                                    <div className="education-div" style={{ display: 'flex' }}>
                                        <img src={"assets/tc-arts-logo.webp"} alt="img" className="img-fluid" />
                                        <div className="education-div-content">
                                            <h4 className="experience-title"> TC Arts <span>June 2017 - April 2020</span></h4>
                                            <p>Bachelor of Computer Application</p>
                                        </div>
                                    </div>
                                    <div className="education-div" style={{ display: 'flex' }}>
                                        <img src={"assets/tmhss-logo.webp"} alt="img" className="img-fluid" />
                                        <div className="education-div-content">
                                            <h4 className="experience-title"> TMHSS <span>June 2015- April 2017</span></h4>
                                            <p>Higher Secondary</p>
                                        </div>
                                    </div>

                                    <h2 className="title-experience">Certifications</h2>
                                    <div className="education-div" style={{ display: 'flex' }}>
                                        <img src={"assets/google-logo.webp"} alt="img" className="img-fluid" />
                                        <div className="education-div-content">
                                            <h4 className="experience-title"> Google <span>Dec 2021 - Feb 2022</span></h4>
                                            <p style={{ marginBottom: '0px' }}>Google Data Analytics</p>
                                            <a href="https://coursera.org/share/fe32e04beb632fdd61bf33086214af82" target="_blank">See my Certificate <GoArrowUpRight /></a>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div >
            </section >
            <section className="experience-section-mobile">
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
                                    <h1>Experience &<br /><span>Education</span></h1>
                                    <h2 className="title-experience">Experience</h2>
                                    <h4 className="experience-title"><img src={"assets/embark.webp"} alt="img" className="img-fluid" /> Embark Interractive <span>June 2022 - Present</span></h4>
                                    <p>Full-stack development of scalable web applications using PHP (Laravel) and modern JavaScript frameworks (React.js). Designed and implemented robust backend architectures, including RESTful APIs and database management with MySQL and MongoDB. Developed dynamic, responsive front-end interfaces with React.js, JavaScript (ES6+), HTML5, and CSS3 (Sass), ensuring seamless user experiences. Leveraged Laravel's MVC architecture to handle complex business logic, middleware, and data validation.</p>
                                    <p>Built and customized web solutions using Drupal CMS platforms, integrating modules, themes, and plugins to meet client requirements. Followed best practices for code maintainability, including SOLID principles, PSR standards, and design patterns. Integrated third-party APIs, handled authentication/authorization (OAuth, JWT), and optimized performance for high-traffic applications.</p>

                                    <h2 className="title-experience">Education</h2>
                                    <div className="education-div" style={{ display: 'flex' }}>
                                        <img src={"assets/tc-arts-logo.webp"} alt="img" className="img-fluid" />
                                        <div className="education-div-content">
                                            <h4 className="experience-title"> TC Arts <span>June 2017 - April 2020</span></h4>
                                            <p>Bachelor of Computer Application</p>
                                        </div>
                                    </div>
                                    <div className="education-div" style={{ display: 'flex' }}>
                                        <img src={"assets/tmhss-logo.webp"} alt="img" className="img-fluid" />
                                        <div className="education-div-content">
                                            <h4 className="experience-title"> TMHSS <span>June 2015- April 2017</span></h4>
                                            <p>Higher Secondary</p>
                                        </div>
                                    </div>

                                    <h2 className="title-experience">Certifications</h2>
                                    <div className="education-div" style={{ display: 'flex' }}>
                                        <img src={"assets/google-logo.webp"} alt="img" className="img-fluid" />
                                        <div className="education-div-content">
                                            <h4 className="experience-title"> Google <span>Dec 2021 - Feb 2022</span></h4>
                                            <p style={{ marginBottom: '0px' }}>Google Data Analytics</p>
                                            <a href="https://coursera.org/share/fe32e04beb632fdd61bf33086214af82" target="_blank">See my Certificate <GoArrowUpRight /></a>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div >
            </section >
        </>
    )
}

export default Experience;