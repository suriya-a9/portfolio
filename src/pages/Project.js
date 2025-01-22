import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";
import { TbBrandGithub } from "react-icons/tb";
import { FiLinkedin } from "react-icons/fi";
import { TbCircleDot } from "react-icons/tb";
import { GoMail } from "react-icons/go";
import "./Projects.css";

const Projects = () => {
    const contentRef = useRef(null);
    const isInView = useInView(contentRef, { once: true });
    const [popup, setPopup] = useState({ visible: false, details: null });
    const projects = [
        {
            title: "Magic Alumni",
            description: "A cross-platform mobile application built with Flutter for the frontend and Node.js as the backend, offering real-time functionality and seamless API integration.",
            tags: ["Node", "React", "Express JS", "MongoDB"],
            objectives: "To develop a comprehensive mobile application that serves as a platform for alumni and students of a college to register, connect, and interact with each other. The app aims to foster a strong alumni network, enhance student-alumni engagement, and provide access to the latest news, events, and job postings shared by the college. By facilitating communication and collaboration, the application will create opportunities for mentorship, career growth, and active participation in the college community.",
            key: ["Jobs Posting", "Alumni - Student engagement", "Role based authentications"],
            challenges: "The primary challenges faced during the project were implementing secure role-based authentication for students, alumni, and administrators, seamlessly integrating the Admin UI Kit to align with the app’s functionality and design, and creating an intuitive user experience to encourage active engagement across features like news, events, and job postings.",
            link: "https://github.com/suriya-a9/magic-alumni",
            thumbnail: "assets/project-thumbnail.webp",
        },
        {
            title: "Grace Associates",
            description: "A unified platform built with React that seamlessly integrates three distinct services, providing a cohesive and user-friendly experience.",
            objectives: "To develop a comprehensive website for a company offering three distinct services: paper bag creation, cleaning services, and legal services. The website will provide detailed information about each service, enable customers to request quotes or schedule services, and facilitate easy contact with the company. The goal is to create an accessible, user-friendly platform that showcases the company's expertise, fosters customer engagement, and drives business growth across all service areas.",
            key: ["Services listing", "Mail Integration", "Integrating Chat-Bot"],
            challenges: "The challenges in the project included managing distinct service offerings on a single platform, ensuring seamless user experience across different service categories, and integrating efficient booking and inquiry systems for each service.",
            link: "https://graceassociate.com/",
            tags: ["React", "Google Maps", "Tidio", "React-Bootstrap"],
            thumbnail: "assets/project-thumbnail.webp",
        },
        {
            title: "House of Paneer",
            description: "A dynamic and interactive restaurant website built with React.js, offering a seamless experience for browsing menus, placing orders, and making reservations.",
            objectives: "To develop a user-friendly website for a paneer restaurant that showcases the restaurant’s menu, highlights its signature products, and integrates a seamless table booking system, providing customers with easy access to browse offerings and make reservations online.",
            key: ["Table Booking System", "Restaurant Menu Integrations", "Seamless user-experience"],
            challenges: "The challenges included organizing and displaying a diverse menu of products effectively, integrating a reliable and user-friendly table booking system, and ensuring smooth navigation across different sections of the site for a seamless customer experience.",
            link: "https://www.houseofpaneer.com/",
            tags: ["React", "Framer-motion", "Email JS", "React-Bootstrap"],
            thumbnail: "assets/project-thumbnail.webp",
        },
        {
            title: "Q&Q",
            description: "A salon website showcasing services with an integrated booking system for seamless appointment scheduling.",
            objectives: "To create an intuitive and visually appealing website for a salon that showcases its services and integrates a streamlined booking system, allowing customers to explore offerings and book appointments effortlessly.",
            key: ["Booking System", "Services Displaying", "Seamless user-experience"],
            challenges: "The challenges included effectively presenting a diverse range of salon services, integrating a user-friendly and reliable booking system, and ensuring a responsive design for seamless access across devices.",
            link: "https://suriya-a9.github.io/Q-Q/",
            tags: ["React", "Framer-motion", "Email JS", "React-Bootstrap"],
            thumbnail: "assets/project-thumbnail.webp",
        },
        {
            title: "Madurai Market",
            description: "A subscription-based web app enabling seamless product delivery with flexible schedules and personalized options, built for convenience and efficiency.",
            objectives: "The project aims to develop a robust e-commerce website that showcases subscription-based products and incorporates a seamless cart system. Customers can subscribe to products with flexible delivery options, such as daily or weekday-based schedules, to suit their needs. The site ensures a user-friendly interface for managing subscriptions and tracking deliveries. Additionally, a quick-order feature is implemented to enable repeat customers to place orders effortlessly, enhancing the overall shopping experience.",
            key: ["Subscription based system", "Locating user location using Google Map API", "Admin UI Panel", "Role based authentication", "APIs for mobile app using Flutter"],
            challenges: "The challenges included implementing a dynamic subscription system with flexible delivery schedules, designing a cart system to handle recurring orders seamlessly, integrating the quick-order feature for efficient repeat purchases, and ensuring a smooth user experience across all functionalities while managing backend complexity for subscription tracking and delivery management.",
            link: "https://www.maduraimarket.in/",
            tags: ["PHP", "Laravel", "API", "Admin Panel"],
            thumbnail: "assets/project-thumbnail.webp",
        },
        {
            title: "E-Learningapp",
            description: "A comprehensive learning app designed to connect students and teachers, offering interactive lessons, and resources.",
            objectives: "The project aims to develop a feature-rich e-learning application with role-based authentication for students, teachers, and administrators. Teachers can create and manage courses, providing educational content tailored to students' needs, while students can browse, enroll in, and complete courses seamlessly. The app includes an admin panel for administrators to oversee user activity, manage courses, and ensure platform efficiency. This solution fosters a collaborative and organized learning environment with robust access control and intuitive functionality.",
            key: ["API to interact with flutter app", "Admin UI Panel", "Role based authentication", "Zoom API for meeting"],
            challenges: "The challenges included implementing secure and scalable role-based authentication for students, teachers, and administrators, designing an intuitive course creation and management system for teachers, ensuring a seamless and engaging course enrollment experience for students, and building a comprehensive admin panel to efficiently oversee platform activities and maintain data integrity.",
            link: "https://www.maduraimarket.in/",
            tags: ["PHP", "Laravel", "API", "Admin Panel"],
            thumbnail: "assets/project-thumbnail.webp",
        },
        {
            title: "Amstermed",
            description: "A specialized CMS website designed to showcase and manage services for Medical Devices and In Vitro Diagnostic Devices efficiently and professionally.",
            objectives: "The project aims to develop a comprehensive CMS website tailored to showcase and manage services related to Medical Devices and In Vitro Diagnostic Devices. The website will provide detailed information about products, services, and compliance requirements in a professional and user-friendly manner. It will include features to update content effortlessly, ensuring accurate and timely information for users. This solution is designed to enhance user engagement, build trust, and establish the company's expertise in the medical device industry.",
            key: ["Creating custom theme", "Integrating Google Map API", "Meta Titles and keywords for better SEO results"],
            challenges: "The challenges included designing a professional and compliant interface to effectively showcase medical and diagnostic device services, implementing a robust CMS for seamless content updates, ensuring compliance with industry regulations for accurate information display, and maintaining an intuitive user experience while managing complex technical and regulatory details.",
            link: "https://amstermed.nl/",
            tags: ["Drupal", "Google API", "Webform", "Custom Theme"],
            thumbnail: "assets/project-thumbnail.webp",
        },
        {
            title: "Workiy",
            description: "A CMS website showcasing a company's services and cutting-edge technologies with an intuitive and professional design.",
            objectives: "The project aims to create a CMS website that effectively showcases a company's services and cutting-edge technologies through an intuitive and professional design. The website will highlight the company’s expertise, innovations, and offerings while ensuring easy navigation and engagement for users. With a robust content management system, the site will allow for seamless updates and accurate information delivery. This solution is designed to strengthen the company’s online presence and establish it as a leader in its industry.",
            key: ["Custom Theme Creation", "Effortles user navigation", "Hierarchical architecture for services"],
            challenges: "The challenges included designing a visually appealing yet professional interface to highlight the company's services and technologies, ensuring the CMS is user-friendly for easy content updates, maintaining the balance between cutting-edge design and functionality, and optimizing the website for performance and SEO while keeping it scalable for future expansions.",
            link: "https://workiy.com/",
            tags: ["Drupal", "Google API", "Webform", "Custom Theme", "Custom Module"],
            thumbnail: "assets/project-thumbnail.webp",
        },
        {
            title: "Techdemy",
            description: "A dedicated website for showcasing courses and detailed syllabuses, providing learners with comprehensive curriculum insights.",
            objectives: "The project aims to develop a dedicated website that showcases a variety of courses along with their detailed syllabuses, providing learners with comprehensive insights into the curriculum. The platform will allow users to explore course offerings, understand course structures, and gain a clear understanding of what to expect from each program. With an intuitive design, the website will ensure easy navigation for prospective students. The goal is to empower learners with the knowledge they need to make informed decisions about their educational journey.",
            key: ["Custom Theme Creation", "Webform for each course with mail integration", "Hierarchical architecture for courses", "Webinar for a site"],
            challenges: "The challenges included organizing and presenting detailed course syllabuses in a user-friendly way, ensuring the website can handle extensive course data while maintaining performance, creating a seamless user experience for learners to explore and compare courses, and ensuring that the site is easily updatable to reflect changes in course offerings and curricula.",
            link: "https://techdemy.in/",
            tags: ["Drupal", "Bootstrap", "Webform", "Custom Theme"],
            thumbnail: "assets/project-thumbnail.webp",
        },
    ];

    const handlePopup = (project) => {
        setPopup({ visible: true, details: project });
        document.body.classList.add("no-scroll");
    };

    const closePopup = () => {
        setPopup({ visible: false, details: null });
        document.body.classList.remove("no-scroll");
    };

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
                                    <h1>Recent<br /><span>Projects</span></h1>
                                    <div className="projects-lists">
                                        {projects.map((project, index) => (
                                            <div
                                                className="projects"
                                                key={index}
                                                onClick={() => handlePopup(project)}
                                            >
                                                <div className="row">
                                                    <div className="col-md-3">
                                                        <div className="project-thumbnail">
                                                            <img className="img-fluid" src={project.thumbnail} alt="thumbnail" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-9">
                                                        <div className="project-details">
                                                            <h4>{project.title} <GoArrowUpRight /></h4>
                                                            <p>{project.description}</p>
                                                            <div className="project-tags">
                                                                {project.tags.map((tag, i) => (
                                                                    <button key={i}>{tag}</button>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>
                {popup.visible && (
                    <div className="popup-overlay" onClick={closePopup}>
                        <div className="popup-content">
                            <button className="close-popup" onClick={closePopup}>X</button>
                            <h4>{popup.details.title}</h4>
                            {/* <p>{popup.details.description}</p> */}
                            <div className="project-objective">
                                <p><span>Objective :</span> {popup.details.objectives}</p>
                            </div>
                            <div className="project-key-features">
                                <span>Key Features:</span>
                                <ul>
                                    {popup.details.key.map((key, i) => (
                                        <li key={i}><TbCircleDot />{key}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="project-challenges">
                                <p><span>Challenges Faced:</span> {popup.details.challenges}</p>
                            </div>
                            <div className="project-tags">
                                Tech Stack:
                                {popup.details.tags.map((tag, i) => (
                                    <button key={i}>{tag}</button>
                                ))}
                            </div>
                            {popup.details.link && (
                                <a
                                    href={popup.details.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-link"
                                >
                                    View Project
                                </a>
                            )}
                        </div>
                    </div>
                )}
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
                                    <h1>Recent<br /><span>Projects</span></h1>
                                    <div className="projects-lists">
                                        {projects.map((project, index) => (
                                            <div
                                                className="projects"
                                                key={index}
                                                onClick={() => handlePopup(project)}
                                            >
                                                <div className="row">
                                                    <div className="col-md-3">
                                                        <div className="project-thumbnail">
                                                            <img className="img-fluid" src={project.thumbnail} alt="thumbnail" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-9">
                                                        <div className="project-details">
                                                            <h4>{project.title} <GoArrowUpRight /></h4>
                                                            <p>{project.description}</p>
                                                            <div className="project-tags">
                                                                {project.tags.map((tag, i) => (
                                                                    <button key={i}>{tag}</button>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>
                {popup.visible && (
                    <div className="popup-overlay" onClick={closePopup}>
                        <div className="popup-content">
                            <button className="close-popup" onClick={closePopup}>X</button>
                            <h4>{popup.details.title}</h4>
                            {/* <p>{popup.details.description}</p> */}
                            <div className="project-objective">
                                <p><span>Objective :</span> {popup.details.objectives}</p>
                            </div>
                            <div className="project-key-features">
                                <span>Key Features:</span>
                                <ul>
                                    {popup.details.key.map((key, i) => (
                                        <li key={i}><TbCircleDot />{key}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="project-challenges">
                                <p><span>Challenges Faced:</span> {popup.details.challenges}</p>
                            </div>
                            <div className="project-tags">
                                Tech Stack:
                                {popup.details.tags.map((tag, i) => (
                                    <button key={i}>{tag}</button>
                                ))}
                            </div>
                            {popup.details.link && (
                                <a
                                    href={popup.details.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-link"
                                >
                                    View Project
                                </a>
                            )}
                        </div>
                    </div>
                )}
            </section >
        </>
    )
}

export default Projects;