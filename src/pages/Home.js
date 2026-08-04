import { motion } from "framer-motion";
import { TbBrandGithub, TbCircleDot } from "react-icons/tb";
import { FiLinkedin } from "react-icons/fi";
import { GoMail } from "react-icons/go";
import "./Home.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="glow-bg glow-primary"></div>
      <div className="glow-bg glow-secondary"></div>

      <section className="home-section">
        <div className="container">
          <div className="main-grid">

            <motion.aside
              className="sidebar-card glass-panel"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="status-badge">
                <span className="pulse-dot"></span> Available for work
              </div>

              <div className="profile-img-container">
                <img
                  className="profile-img"
                  src="assets/profile-image.png"
                  alt="Suriya Prakash"
                />
              </div>

              <h3 className="profile-name">Suriya Prakash</h3>
              <p className="profile-bio">
                Building smart, sleek, and high-performance web solutions.
              </p>

              <div className="sidebar-icons">
                <a href="https://github.com/suriya-a9" target="_blank" rel="noreferrer" aria-label="GitHub">
                  <TbBrandGithub />
                </a>
                <a href="https://www.linkedin.com/in/suriya-prakash-30885818a" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <FiLinkedin />
                </a>
                <a href="mailto:uriyaprakash@gmail.com" aria-label="Email">
                  <GoMail />
                </a>
              </div>
            </motion.aside>

            <motion.main
              className="content-area"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div className="glass-panel content-block hero-block" variants={itemVariants}>
                <h1 className="hero-title">
                  Full Stack <br />
                  <span className="gradient-text">Developer</span>
                </h1>
                <p className="hero-desc">
                  Full Stack Developer with 3.5+ years of experience building MERN/PERN applications, REST APIs, AI-powered SaaS products, and scalable web solutions.
                </p>

                <div className="stats-grid">
                  <div className="stat-card">
                    <span className="stat-number">3+</span>
                    <span className="stat-label">Years of<br />Experience</span>
                  </div>
                  <div className="stat-card">
                    <span className="stat-number">10+</span>
                    <span className="stat-label">Projects<br />Completed</span>
                  </div>
                </div>
              </motion.div>

              <motion.div className="glass-panel content-block" variants={itemVariants}>
                <h4 className="section-title">What I Bring to the Table</h4>

                <ul className="value-list">
                  <li>
                    <TbCircleDot className="list-icon" />
                    <span><strong>Full Stack Development:</strong> Building responsive frontends, scalable APIs, and database-driven applications.</span>
                  </li>

                  <li>
                    <TbCircleDot className="list-icon" />
                    <span><strong>AI Integration:</strong> Experience integrating Claude AI, Voyage AI embeddings, and PGVector for AI-powered SaaS products.</span>
                  </li>

                  <li>
                    <TbCircleDot className="list-icon" />
                    <span><strong>Production Ready:</strong> Developing secure, maintainable applications with authentication, third-party integrations, and performance optimization.</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div className="glass-panel content-block" variants={itemVariants}>
                <h4 className="section-title">My Journey</h4>
                <p className="journey-text">
                  Over the past 3.5+ years, I've built eCommerce platforms, CMS solutions, AI-powered SaaS products, and business applications using modern JavaScript technologies. I enjoy solving backend challenges while delivering intuitive user experiences.
                </p>

                <div className="tech-stack-pills">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>Express.js</span>
                  <span>PostgreSQL</span>
                  <span>MongoDB</span>
                  <span>PHP</span>
                  <span>Laravel</span>
                  <span>Claude AI</span>
                  <span>PGVector</span>
                </div>
              </motion.div>

            </motion.main>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;