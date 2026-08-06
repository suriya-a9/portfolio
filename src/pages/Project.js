import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";
import { TbCircleDot } from "react-icons/tb";
import "./Projects.css";

const PROJECTS_DATA = [
    {
        title: "AI Chatbot SaaS Platform",
        description:
            "A multi-tenant SaaS platform enabling businesses to register, create, and manage AI-powered chatbots. Built the complete application independently using the PERN stack, incorporating Claude AI, Voyage AI embeddings, and PGVector for semantic search.",
        tags: [
            "PERN",
            "PostgreSQL",
            "Node.js",
            "Express",
            "React",
            "Claude AI",
            "Voyage AI",
            "PGVector",
        ],
        objectives:
            "Develop a scalable SaaS platform allowing users to create and manage custom AI chatbots with secure authentication, knowledge base management, semantic search, and role-based administration.",
        key: [
            "Multi-Tenant SaaS Architecture",
            "AI Chatbot Creation & Management",
            "Admin & Client Dashboards",
            "Knowledge Base & Document Processing",
            "Claude AI Integration",
            "Voyage AI Embeddings",
            "PGVector Semantic Search",
            "JWT Authentication & Role-Based Access Control",
            "RESTful API Development",
        ],
        challenges:
            "Designing a scalable multi-tenant architecture, integrating LLMs with vector embeddings, implementing efficient semantic search using PGVector, managing role-based access, and ensuring smooth service communication.",
        thumbnail: "assets/project-thumbnail.webp",
    },
    {
        title: "Service Request System",
        description:
            "A service management platform that streamlines request handling between users, admins, and technicians. Built using the MERN stack to raise service requests, assign tasks, and manage status workflows.",
        tags: ["MERN", "Node.js", "Express", "MongoDB", "React"],
        objectives:
            "Create a centralized system for managing service requests with clear role-based workflows, efficient task assignment, and real-time status tracking.",
        key: [
            "User Service Request Handling",
            "Admin Task Assignment",
            "Technician Workflow Management",
            "Role-Based Access Control",
            "Real-Time Status Updates",
        ],
        challenges:
            "Designing a smooth workflow across multiple user roles, ensuring secure access control, and managing real-time state transitions throughout the system.",
        thumbnail: "assets/project-thumbnail.webp",
    },
    {
        title: "JK Dry Fruits",
        description:
            "An eCommerce platform for premium dry fruits and nuts built using Next.js, React.js, Node.js, and MongoDB Atlas, providing customers with a seamless shopping experience and administrators with efficient product and order management.",
        tags: ["Next.js", "React.js", "MongoDB Atlas", "Tailwind CSS", "Node.js"],
        objectives:
            "Develop a scalable eCommerce platform with secure authentication, product management, shopping features, and an intuitive admin dashboard.",
        key: [
            "Customer Registration & Login",
            "Product Browsing & Search",
            "Wishlist & Cart Management",
            "Admin Dashboard",
            "Product & Order Management",
            "Offer Management",
        ],
        challenges:
            "Implementing dynamic delivery charge calculations based on user location and cart weight while ensuring accurate pricing and a smooth checkout experience.",
        thumbnail: "assets/project-thumbnail.webp",
    },
    {
        title: "Magic Alumni",
        description:
            "A cross-platform alumni networking application built with Flutter and Node.js, enabling students and alumni to connect, share opportunities, and stay updated through a centralized platform.",
        tags: ["Flutter", "Node.js", "Express", "MongoDB"],
        objectives:
            "Create a collaborative platform that strengthens alumni engagement through job postings, events, news, and secure role-based access.",
        key: [
            "Alumni & Student Registration",
            "Job Posting System",
            "News & Events",
            "Role-Based Authentication",
            "Community Engagement",
        ],
        challenges:
            "Implementing secure multi-role authentication, integrating backend services with the mobile application, and delivering a seamless user experience across diverse features.",
        thumbnail: "assets/project-thumbnail.webp",
    },
    {
        title: "House of Paneer",
        description:
            "A restaurant website built with React.js that showcases menu offerings, enables table reservations, and delivers a modern browsing experience for customers.",
        tags: ["React", "Framer Motion", "EmailJS", "React-Bootstrap"],
        objectives:
            "Build a responsive restaurant website with menu management, reservation capabilities, and an engaging customer experience.",
        key: [
            "Restaurant Menu",
            "Table Booking System",
            "Responsive Design",
            "Email Integration",
            "Interactive User Experience",
        ],
        challenges:
            "Organizing extensive menu content, integrating a reliable reservation workflow, and maintaining smooth navigation across all sections of the website.",
        thumbnail: "assets/project-thumbnail.webp",
    },
];

const Projects = () => {
    const contentRef = useRef(null);
    const isInView = useInView(contentRef, { once: true });
    const [popup, setPopup] = useState({ visible: false, details: null });

    const handlePopup = (project) => {
        setPopup({ visible: true, details: project });
        document.body.classList.add("no-scroll");
    };

    const closePopup = () => {
        setPopup({ visible: false, details: null });
        document.body.classList.remove("no-scroll");
    };

    return (
        <section className="project-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-10 col-xl-9">
                        <motion.div
                            ref={contentRef}
                            className="projects-container"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            <div className="section-header">
                                <span className="subtitle">PORTFOLIO</span>
                                <h2>
                                    Recent <span>Projects</span>
                                </h2>
                            </div>

                            <div className="projects-grid">
                                {PROJECTS_DATA.map((project, index) => (
                                    <motion.div
                                        className="project-card"
                                        key={index}
                                        onClick={() => handlePopup(project)}
                                        whileHover={{ y: -4 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <div className="project-card-inner">
                                            <div className="project-thumbnail-wrapper">
                                                <img
                                                    src={project.thumbnail}
                                                    alt={project.title}
                                                    className="project-thumbnail"
                                                />
                                            </div>
                                            <div className="project-info">
                                                <div className="project-title-row">
                                                    <h3>{project.title}</h3>
                                                    <div className="arrow-icon-wrapper">
                                                        <GoArrowUpRight />
                                                    </div>
                                                </div>
                                                <p className="project-desc">{project.description}</p>
                                                <div className="tags-wrapper">
                                                    {project.tags.map((tag, i) => (
                                                        <span key={i} className="tech-badge">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {popup.visible && popup.details && (
                    <motion.div
                        className="popup-overlay"
                        onClick={closePopup}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="popup-modal"
                            onClick={(e) => e.stopPropagation()}
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            transition={{ duration: 0.25 }}
                        >
                            <button
                                className="close-popup"
                                onClick={closePopup}
                                aria-label="Close modal"
                            >
                                &times;
                            </button>

                            <div className="popup-header">
                                <h3>{popup.details.title}</h3>
                            </div>

                            <div className="popup-body">
                                <div className="modal-section">
                                    <h4>Objective</h4>
                                    <p>{popup.details.objectives}</p>
                                </div>

                                <div className="modal-section">
                                    <h4>Key Features</h4>
                                    <ul className="features-list">
                                        {popup.details.key.map((item, i) => (
                                            <li key={i}>
                                                <TbCircleDot className="feature-bullet" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="modal-section">
                                    <h4>Challenges Faced</h4>
                                    <p>{popup.details.challenges}</p>
                                </div>

                                <div className="modal-section">
                                    <h4>Tech Stack</h4>
                                    <div className="tags-wrapper">
                                        {popup.details.tags.map((tag, i) => (
                                            <span key={i} className="tech-badge">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;