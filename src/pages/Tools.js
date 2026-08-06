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
                                <p className="tools-note">
                                    Proficient in building responsive web applications using HTML, CSS,
                                    JavaScript, and Node.js for frontend and backend development.
                                </p>
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
                                <p className="tools-note">
                                    Experienced with React, Express.js, and Tailwind CSS to 
                                    build modern, scalable, and responsive web applications.
                                </p>
                            </div>

                            <div className="tools-category">
                                <div className="section-header">
                                    <h2>
                                        AI <span>Integrations</span>
                                    </h2>
                                </div>

                                <div className="tools-grid">
                                    <div className="tool-card">
                                        <img src="assets/claude.webp" alt="Claude API" />
                                    </div>

                                    <div className="tool-card">
                                        <img src="assets/voyage.webp" alt="Voyage AI" />
                                    </div>

                                    <div className="tool-card tool-card-wide tool-card-light">
                                        <img src="assets/pgvector.png" alt="pgvector" />
                                    </div>
                                </div>
                                <p className="tools-note">
                                    Experienced integrating Claude API for conversational AI,
                                    Voyage AI for embeddings, and pgvector with PostgreSQL for
                                    semantic search and Retrieval-Augmented Generation (RAG)
                                    in a SaaS chatbot platform.
                                </p>
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
                                <p className="tools-note">
                                    Worked with MySQL, MongoDB, and PostgreSQL for designing 
                                    schemas, optimizing queries, and managing application data.
                                </p>
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
                                <p className="tools-note">
                                    Use Git and GitHub for version control, collaborative 
                                    development, code reviews, and deployment workflows.
                                </p>
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
                                <p className="tools-note">
                                    Develop applications using Visual Studio Code, npm, and 
                                    Composer to streamline development and dependency management.
                                </p>
                            </div>
                        </motion.main>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tools;