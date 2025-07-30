import React, { useState, useEffect } from "react";
// import {assets} from '../assets/assets'
import {
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  Code,
  Database,
  Server,
  Smartphone,
  Download,
  ExternalLink,
  ChevronDown,
} from "lucide-react";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [profileImage, setProfileImage] = useState(
    "85289ad4-b134-4749-9f76-436742e6125a"
  );

  const skills = [
    { name: "JavaScript", icon: Code, category: "Frontend" },
    { name: "TypeScript", icon: Code, category: "Frontend" },
    { name: "React", icon: Code, category: "Frontend" },
    { name: "HTML", icon: Code, category: "Frontend" },
    { name: "CSS", icon: Code, category: "Frontend" },
    { name: "Tailwind CSS", icon: Code, category: "Frontend" },
    { name: "Node.js", icon: Server, category: "Backend" },
    { name: "Express", icon: Server, category: "Backend" },
    { name: "MongoDB", icon: Database, category: "Database" },
    { name: "PostgreSQL", icon: Database, category: "Database" },
  ];

  const projects = [
    {
      title: "Fintech Digital Wallet System",
      description:
        "Fintech digital wallet system enabling secure transactions, user authentication, balance management, and fund transfers.",
      tech: ["Node.js", "Express", "MongoDB", "Redis"],
      metrics: "100K+ users, 99.9% uptime",
    },
    {
      title: "Supermarket E-commerce ",
      description:
        "Supermarket E-Commerce backend with Node.js, Express, and MongoDB. Features authentication, product/order management, inventory tracking, and scalability.",
      tech: ["React", "JavaScript", "Node.js", "MongoDB"],
      metrics: "Scalable architecture",
    },
    {
      title: "Database Optimization Project",
      description:
        "Optimized database queries and implemented efficient data structures, resulting in 40% performance improvement and reduced server costs.",
      tech: ["PostgreSQL", "MongoDB", "Node.js"],
      metrics: "40% performance boost",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setProfileImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold text-white">
              Dongo Orinami Cornelius
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "skills", "projects", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`capitalize transition-colors ${
                      activeSection === item
                        ? "text-purple-400"
                        : "text-white hover:text-purple-300"
                    }`}
                  >
                    {item}
                  </button>
                )
              )}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-white/10">
              {["home", "about", "skills", "projects", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left py-2 text-white hover:text-purple-300 capitalize"
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8 relative inline-block">
            <img
              src={profileImage}
              alt=""
              className="w-32 h-32 rounded-full mx-auto border-4 border-purple-400 shadow-2xl shadow-purple-500/25"
            />
    
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Dongo Orinami
            </span>
            <br />
            <span className="text-3xl md:text-5xl">Cornelius</span>
          </h1>

          <p className="text-xl md:text-2xl text-purple-300 mb-8 font-medium">
            Full Stack Software Engineer
          </p>

          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Crafting innovative and scalable software solutions with measurable
            business impact. Specialized in building high-performance
            applications that serve 100K+ users.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-full font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>

          <div className="animate-bounce">
            <ChevronDown className="text-purple-400 mx-auto" size={32} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            About{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Highly motivated Software Engineer with a proven track record of
                crafting innovative and scalable software solutions tailored to
                client needs. I specialize in building robust applications that
                deliver exceptional user experiences.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                My expertise includes designing RESTful APIs that support over
                100K+ monthly users with 99.9% uptime. I'm passionate about
                clean coding practices, performance optimization, and robust
                server architecture.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                As a collaborative team player with a passion for learning and
                innovation, I consistently deliver client-focused solutions with
                measurable business impact.
              </p>

              {/* <a
                href="#"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              > */}
                {/* <Download size={20} /> */}
                {/* Download Resume */}
              {/* </a> */}
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  100K+
                </div>
                <div className="text-gray-300">Monthly Users Supported</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  99.9%
                </div>
                <div className="text-gray-300">API Uptime</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  1+
                </div>
                <div className="text-gray-300">Years Experience</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  10+
                </div>
                <div className="text-gray-300">Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            Technical{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {["Frontend", "Backend", "Database"].map((category) => (
              <div
                key={category}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              >
                <h3 className="text-2xl font-bold text-purple-400 mb-6 text-center">
                  {category}
                </h3>
                <div className="space-y-4">
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                      >
                        <skill.icon className="text-purple-400" size={20} />
                        <span className="text-white font-medium">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            Featured{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <h3 className="text-xl font-bold text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <div className="text-sm text-purple-400 font-semibold mb-2">
                    Technologies:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-sm text-green-400 font-semibold">
                  📈 {project.metrics}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            Get{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              In Touch
            </span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xl text-gray-300 mb-8">
                Ready to collaborate on your next project? Let's build something
                amazing together!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Let's Connect
                </h3>
                <div className="space-y-4">
                  <a
                    href="https://linkedin.com/in/cornelius-dongo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group"
                  >
                    <Linkedin
                      className="text-blue-400 group-hover:scale-110 transition-transform"
                      size={24}
                    />
                    <span className="text-white">LinkedIn Profile</span>
                    <ExternalLink className="text-gray-400 ml-auto" size={16} />
                  </a>

                  <a
                    href="https://github.com/OrinamiD"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group"
                  >
                    <Github
                      className="text-gray-400 group-hover:scale-110 transition-transform"
                      size={24}
                    />
                    <span className="text-white">GitHub Profile</span>
                    <ExternalLink className="text-gray-400 ml-auto" size={16} />
                  </a>

                  <div className="flex items-center gap-3 p-4 rounded-lg bg-white/5">
                    <Mail className="text-purple-400" size={24} />
                    <span className="text-white">Available via LinkedIn</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">
                  What I Offer
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">✦</span>
                    Full-stack web application development
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">✦</span>
                    RESTful API design and implementation
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">✦</span>
                    Database optimization and architecture
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">✦</span>
                    Performance optimization and scaling
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">✦</span>
                    Technical consultation and code review
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400">
            <p className="mb-4">
              © 2025 Dongo Orinami Cornelius. All rights reserved.
            </p>
          
          </div>
        </div>
      </footer>
    </div>
  );
}
