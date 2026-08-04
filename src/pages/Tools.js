import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TbBrandGithub } from "react-icons/tb";
import { FiLinkedin } from "react-icons/fi";
import { GoMail } from "react-icons/go";
import "./Home.css";
import "./Tools.css";

const Tools = () => {
    const contentRef = useRef(null);
    const isInView = useInView(contentRef, { once: true, margin: "-50px" });

    return (
        <section className="tools-section">
            <motion.div
                className="tools-layout"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <aside className="tools-sidebar">
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
                    className="tools-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="page-heading">
                        Tools &<br />
                        <span>Platforms</span>
                    </h1>

                    <div className="tools-category">
                        <h2 className="category-title">Programming Languages</h2>
                        <div className="tools-grid">
                            <div className="tool-card">
                                <img src="assets/html-logo.webp" alt="HTML5" />
                            </div>
                            <div className="tool-card">
                                <img src="assets/css-logo.webp" alt="CSS3" />
                            </div>
                            <div className="tool-card">
                                <img src="assets/js-logo.webp" alt="JavaScript" />
                            </div>
                            <div className="tool-card">
                                <img src="assets/node-js-logo.webp" alt="Node.js" />
                            </div>
                        </div>
                    </div>

                    <div className="tools-category">
                        <h2 className="category-title">Frameworks & Libraries</h2>
                        <div className="tools-grid">
                            <div className="tool-card">
                                <img src="assets/react-js-logo.webp" alt="React.js" />
                            </div>
                            <div className="tool-card tool-card-wide">
                                <img src="assets/tailwindcss-logotype-white.svg" alt="Tailwind CSS" />
                            </div>
                            <div className="tool-card tool-card-light">
                                <img src="assets/expressjs.png" alt="Express.js" />
                            </div>
                        </div>
                    </div>

                    <div className="tools-category">
                        <h2 className="category-title">Databases</h2>
                        <div className="tools-grid">
                            <div className="tool-card">
                                <img src="assets/mysql.webp" alt="MySQL" />
                            </div>
                            <div className="tool-card">
                                <img src="assets/mongodb-logo.webp" alt="MongoDB" />
                            </div>
                            <div className="tool-card">
                                <img src="assets/postgre-sql-logo.webp" alt="PostgreSQL" />
                            </div>
                        </div>
                    </div>

                    <div className="tools-category">
                        <h2 className="category-title">Version Control</h2>
                        <div className="tools-grid">
                            <div className="tool-card">
                                <img src="assets/git-logo.webp" alt="Git" />
                            </div>
                            <div className="tool-card tool-card-light">
                                <img src="assets/GitHub-Logo.webp" alt="GitHub" />
                            </div>
                        </div>
                    </div>

                    <div className="tools-category">
                        <h2 className="category-title">Tools for Development</h2>
                        <div className="tools-grid">
                            <div className="tool-card">
                                <img src="assets/vs-code-logo.webp" alt="VS Code" />
                            </div>
                            <div className="tool-card">
                                <img src="assets/npm-logo.webp" alt="NPM" />
                            </div>
                            <div className="tool-card">
                                <img src="assets/composer-logo.webp" alt="Composer" />
                            </div>
                        </div>
                    </div>
                </motion.main>
            </motion.div>
        </section>
    );
};

export default Tools;