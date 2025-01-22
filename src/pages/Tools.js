import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";
import { TbBrandGithub } from "react-icons/tb";
import { FiLinkedin } from "react-icons/fi";
import { GoMail } from "react-icons/go";
import "./Tools.css";

const Tools = () => {
    const contentRef = useRef(null);
    const isInView = useInView(contentRef, { once: true });
    return (
        <>
            <section className="project-section">
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
                                    <h1>Tools &<br /><span>Platforms</span></h1>
                                    <div className="tools-list">
                                        <h4>Programming Languages</h4>
                                        <div className="tools-images">
                                            <img src={"portfolio/assets/html-logo.webp"} alt="HTML5" />
                                            <img src={"portfolio/assets/css-logo.webp"} alt="CSS3" />
                                            <img src={"portfolio/assets/js-logo.webp"} alt="JavaScript" />
                                            <img src={"portfolio/assets/node-js-logo.webp"} alt="Node.js" />
                                            <img src={"portfolio/assets/php.webp"} alt="PHP" />
                                        </div>
                                    </div>
                                    <div className="tools-list">
                                        <h4>Framework and Libraries</h4>
                                        <div className="tools-images">
                                            <img src={"portfolio/assets/react-js-logo.webp"} alt="React.js" />
                                            <img src={"portfolio/assets/laravel.webp"} alt="Laravel" />
                                            <img src={"portfolio/assets/bootstrap.webp"} alt="Bootstrap" />
                                        </div>
                                    </div>
                                    <div className="tools-list">
                                        <h4>CMS</h4>
                                        <div className="tools-images">
                                            <img src={"portfolio/assets/drupal-logo.webp"} alt="Drupal" />
                                        </div>
                                    </div>
                                    <div className="tools-list">
                                        <h4>Databases</h4>
                                        <div className="tools-images">
                                            <img src={"portfolio/assets/mysql.webp"} alt="Mysql" />
                                            <img src={"portfolio/assets/mongodb-logo.webp"} alt="Mongodb" />
                                            <img src={"portfolio/assets/postgre-sql-logo.webp"} alt="Postgre-sql" />
                                        </div>
                                    </div>
                                    <div className="tools-list">
                                        <h4>Version Control</h4>
                                        <div className="tools-images">
                                            <img src={"portfolio/assets/git-logo.webp"} alt="Git" />
                                            <img src={"portfolio/assets/GitHub-Logo.webp"} alt="Github" style={{ background: 'white' }} />
                                        </div>
                                    </div>
                                    <div className="tools-list">
                                        <h4>Tools for Development</h4>
                                        <div className="tools-images">
                                            <img src={"portfolio/assets/vs-code-logo.webp"} alt="VS Code" />
                                            <img src={"portfolio/assets/npm-logo.webp"} alt="NPM" />
                                            <img src={"portfolio/assets/composer-logo.webp"} alt="Composer" />
                                        </div>
                                    </div>
                                    <div className="tools-list">
                                        <h4>Currently Learning</h4>
                                        <div className="tools-images">
                                            <img src={"portfolio/assets/tailwindcss-logotype-white.svg"} alt="Tailwind" style={{ width: '200px', height: '100px' }} />
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section >
            <section className="project-section-mobile">
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
                                    <h1>Tools &<br /><span>Platforms</span></h1>
                                    <div className="tools-list">
                                        <h4>Programming Languages</h4>
                                        <div className="tools-images">
                                            <img src={"portfolio/assets/html-logo.webp"} alt="HTML5" />
                                            <img src={"portfolio/assets/css-logo.webp"} alt="CSS3" />
                                            <img src={"portfolio/assets/js-logo.webp"} alt="JavaScript" />
                                            <img src={"portfolio/assets/node-js-logo.webp"} alt="Node.js" />
                                            <img src={"portfolio/assets/php.webp"} alt="PHP" />
                                        </div>
                                    </div>
                                    <div className="tools-list">
                                        <h4>Framework and Libraries</h4>
                                        <div className="tools-images">
                                            <img src={"portfolio/assets/react-js-logo.webp"} alt="React.js" />
                                            <img src={"portfolio/assets/laravel.webp"} alt="Laravel" />
                                            <img src={"portfolio/assets/bootstrap.webp"} alt="Bootstrap" />
                                        </div>
                                    </div>
                                    <div className="tools-list">
                                        <h4>CMS</h4>
                                        <div className="tools-images">
                                            <img src={"portfolio/assets/drupal-logo.webp"} alt="Drupal" />
                                        </div>
                                    </div>
                                    <div className="tools-list">
                                        <h4>Databases</h4>
                                        <div className="tools-images">
                                            <img src={"portfolio/assets/mysql.webp"} alt="Mysql" />
                                            <img src={"portfolio/assets/mongodb-logo.webp"} alt="Mongodb" />
                                            <img src={"portfolio/assets/postgre-sql-logo.webp"} alt="Postgre-sql" />
                                        </div>
                                    </div>
                                    <div className="tools-list">
                                        <h4>Version Control</h4>
                                        <div className="tools-images">
                                            <img src={"portfolio/assets/git-logo.webp"} alt="Git" />
                                            <img src={"portfolio/assets/GitHub-Logo.webp"} alt="Github" style={{ background: 'white' }} />
                                        </div>
                                    </div>
                                    <div className="tools-list">
                                        <h4>Tools for Development</h4>
                                        <div className="tools-images">
                                            <img src={"portfolio/assets/vs-code-logo.webp"} alt="VS Code" />
                                            <img src={"portfolio/assets/npm-logo.webp"} alt="NPM" />
                                            <img src={"portfolio/assets/composer-logo.webp"} alt="Composer" />
                                        </div>
                                    </div>
                                    <div className="tools-list">
                                        <h4>Currently Learning</h4>
                                        <div className="tools-images">
                                            <img src={"portfolio/assets/tailwindcss-logotype-white.svg"} alt="Tailwind" style={{ width: '200px', height: '100px' }} />
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section >
        </>
    )
}

export default Tools;