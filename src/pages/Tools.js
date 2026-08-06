import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./Home.css";
import "./Tools.css";

const Tools = () => {
    const contentRef = useRef(null);
    const isInView = useInView(contentRef, { once: true, margin: "-50px" });

    return (
        <section className="tools-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-10 col-xl-9">
                        <motion.main
                            ref={contentRef}
                            className="tools-content"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <div className="tools-category">
                                <div className="section-header">
                                    <h2>
                                        Programming <span>Languages</span>
                                    </h2>
                                </div>
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
                                <div className="section-header">
                                    <h2>
                                        Frameworks & <span>Libraries</span>
                                    </h2>
                                </div>
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
                                <div className="section-header">
                                    <h2>
                                        Databases
                                    </h2>
                                </div>
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
                                <div className="section-header">
                                    <h2>
                                        Version <span>Control</span>
                                    </h2>
                                </div>
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
                                <div className="section-header">
                                    <h2>
                                        Tools for <span>Development</span>
                                    </h2>
                                </div>
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
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tools;