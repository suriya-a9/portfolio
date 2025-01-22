import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Container from "react-bootstrap/Container";
import { BiHomeAlt } from "react-icons/bi";
import { FaRegFolder } from "react-icons/fa6";
import { LuBriefcase } from "react-icons/lu";
import { LiaToolsSolid } from "react-icons/lia";
import { FiEdit } from "react-icons/fi";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Tooltip, TooltipProvider } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import "./App.css";
import Footer from "./pages/Footer";
import Projects from "./pages/Project";
import Experience from "./pages/Experience";
import Tools from "./pages/Tools";

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  const handleNavigation = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <div>
      {/* Bootstrap Navbar */}

      {/* <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/" onClick={handleNavigation}>
            React-Bootstrap
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" onClick={handleNavigation}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about" onClick={handleNavigation}>
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" onClick={handleNavigation}>
                Contact
              </Nav.Link>
              <NavDropdown title="More" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/action1" onClick={handleNavigation}>
                  Action 1
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/action2" onClick={handleNavigation}>
                  Action 2
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/action3" onClick={handleNavigation}>
                  Something Else
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/separated" onClick={handleNavigation}>
                  Separated Link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
      <div className={`banner-static-s`}>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-2">
            <Link to="/portfolio" onClick={handleNavigation} data-tooltip-id="tooltip"
              data-tooltip-content="Go to Home">
              <BiHomeAlt />
            </Link>
          </div>
          <div className="col-md-2">
            <Link to="/portfolio/projects" onClick={handleNavigation} data-tooltip-id="tooltip"
              data-tooltip-content="See My Projects">
              <FaRegFolder />
            </Link>
          </div>
          <div className="col-md-2">
            <Link to="/portfolio/experience" onClick={handleNavigation} data-tooltip-id="tooltip"
              data-tooltip-content="My Experience">
              <LuBriefcase />
            </Link>
          </div>
          <div className="col-md-2">
            <Link to="/portfolio/tools" onClick={handleNavigation} data-tooltip-id="tooltip"
              data-tooltip-content="Tools & Platforms">
              <LiaToolsSolid />
            </Link>
          </div>
          <div className="col-md-2">
            <Link to="/portfolio/about" onClick={handleNavigation} data-tooltip-id="tooltip"
              data-tooltip-content="About Me">
              <FiEdit />
            </Link>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
      <div className={`banner-static-r`}>
        <Link to="/portfolio" onClick={handleNavigation} data-tooltip-id="tooltip"
          data-tooltip-content="Go to Home">
          <BiHomeAlt />
        </Link>
        <Link to="/portfolio/projects" onClick={handleNavigation} data-tooltip-id="tooltip"
          data-tooltip-content="See My Projects">
          <FaRegFolder />
        </Link>
        <Link to="/portfolio/experience" onClick={handleNavigation} data-tooltip-id="tooltip"
          data-tooltip-content="My Experience">
          <LuBriefcase />
        </Link>
        <Link to="/portfolio/tools" onClick={handleNavigation} data-tooltip-id="tooltip"
          data-tooltip-content="Tools & Platforms">
          <LiaToolsSolid />
        </Link>
        <Link to="/portfolio/about" onClick={handleNavigation} data-tooltip-id="tooltip"
          data-tooltip-content="About Me">
          <FiEdit />
        </Link>
      </div>
      <Tooltip
        id="tooltip"
        place="top"
        noArrow
        style={{
          backgroundColor: "#333",
          color: "#fff",
          borderRadius: "4px",
          padding: "8px",
          transition: "transform 0.3s ease, opacity 0.3s ease",
          zIndex: "6666"
        }}
        className="animated-tooltip"
      />
      {/* Loading Spinner */}
      {loading ? (
        <div className="loading-container d-flex justify-content-center align-items-center">
          <img src={"assets/loading screen.gif"} alt="Loading..." style={{ width: "150px", height: "150px" }} />
          {/* <p style={{ fontSize: '20px', color: 'white', display: 'block' }}>One moment please...</p> */}
        </div>
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Routes location={location} key={location.pathname}>
              <Route path="/portfolio" element={<Home />} />
              <Route path="/portfolio/projects" element={<Projects />} />
              <Route path="/portfolio/experience" element={<Experience />} />
              <Route path="/portfolio/about" element={<About />} />
              <Route path="/portfolio/tools" element={<Tools />} />
              <Route path="/portfolio/action3" element={<div>Action 3 Page</div>} />
              <Route path="/portfolio/separated" element={<div>Separated Link Page</div>} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
    <Footer />
  </Router>
);

export default AppWrapper;
