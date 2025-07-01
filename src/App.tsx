import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code, Database, Globe, Server, ArrowRight, Star } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-40 right-1/3 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Header Section */}
      <header className="relative min-h-screen flex items-center justify-center px-6 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Profile Info */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-sm font-medium border border-blue-500/30 animate-glow">
                  Full Stack Developer
                </span>
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent animate-gradient">
                  Ahmed
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient delay-300">
                  Eldaly
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl animate-fade-in-up delay-500">
                Passionate full-stack developer crafting scalable applications with modern web technologies. 
                Specialized in React, Node.js, and cloud solutions.
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-6 animate-fade-in-up delay-700">
              <a href="mailto:ahmed.eldaly@example.com" 
                 className="flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 group">
                <div className="p-2 bg-gray-800/50 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                  <Mail size={20} />
                </div>
                <span>ahm3deldlay2@gmail.com</span>
              </a>
              <a href="tel:+1234567890" 
                 className="flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 group">
                <div className="p-2 bg-gray-800/50 rounded-lg group-hover:bg-green-500/20 transition-colors">
                  <Phone size={20} />
                </div>
                <span>+20 1017803491</span>
              </a>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="p-2 bg-gray-800/50 rounded-lg">
                  <MapPin size={20} />
                </div>
                <span>Menoufia, Egypt</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 animate-fade-in-up delay-1000">
              <a href="https://github.com/ahmedaldaly" target="_blank" rel="noopener noreferrer" 
                 className="group relative p-4 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-gray-600 transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                <Github size={24} className="group-hover:scale-110 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-600/20 to-gray-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
              <a href="https://www.linkedin.com/in/ahmed-eldaly-237479340/" target="_blank" rel="noopener noreferrer"
                 className="group relative p-4 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-blue-500 transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                <Linkedin size={24} className="group-hover:scale-110 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
              
            </div>

            {/* CTA Button */}
            <div className="animate-fade-in-up delay-1200">
              <a href="#projects" 
                 className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 group">
                View My Work
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in-right">
            <div className="relative group">
              {/* Animated rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-spin-slow opacity-75"></div>
              <div className="absolute inset-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 animate-spin-slow-reverse opacity-50"></div>
              
              {/* Image container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/10 backdrop-blur-sm group-hover:scale-105 transition-all duration-500">
                <img 
                  src="/ahmed.png" 
                  alt="Ahmed Eldaly" 
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent group-hover:from-black/20 transition-all duration-500"></div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-bounce delay-1000"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-bounce delay-2000"></div>
              <div className="absolute top-1/4 -left-8 w-4 h-4 bg-cyan-500 rounded-full animate-bounce delay-3000"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section id="skills" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Technical Skills
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Expertise across the full development stack
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Code, title: "Frontend", skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"], color: "blue" },
              { icon: Server, title: "Backend", skills: ["Node.js", "Express.js", "RESTful APIs"], color: "green" },
              { icon: Database, title: "Database", skills: ["MongoDB",  "MySQL", "Redis"], color: "purple" },
              { icon: Globe, title: "Tools & Cloud", skills: ["AWS", "Docker", "Git", "Vercel"], color: "orange" }
            ].map((category, index) => (
              <div key={category.title} 
                   className={`group p-8 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-${category.color}-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fade-in-up`}
                   style={{ animationDelay: `${index * 200}ms` }}>
                <div className={`w-16 h-16 bg-gradient-to-br from-${category.color}-500/20 to-${category.color}-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className={`w-8 h-8 text-${category.color}-400`} />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skill} 
                        className="text-gray-300 group-hover:text-gray-200 transition-colors flex items-center gap-2"
                        style={{ animationDelay: `${(index * 200) + (skillIndex * 100)}ms` }}>
                      <Star size={12} className={`text-${category.color}-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Showcasing innovative solutions and technical expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-Commerce Platform",
                description: "Full-stack e-commerce application with React, Node.js, and MongoDB",
                tags: ["React", "Node.js", "MongoDB"],
                liveUrl: "https://ecommerce-front-orcin-ten.vercel.app/en",
                githubUrl: "https://github.com/ahmedaldaly/ecommerceapp-",
                gradient: "from-blue-600 to-purple-600"
              },
              {
                title: "Restaurant Management",
                description: "Modern restaurant website with online ordering system",
                tags: ["React", "JavaScript", "CSS"],
                liveUrl: "https://restaurant-front-rho.vercel.app/en",
                githubUrl: "https://github.com/mo634/my-portofolio",
                gradient: "from-orange-600 to-red-600"
              },
              {
                title: "Learning Platform",
                description: "Educational platform with course management and progress tracking",
                tags: ["React", "Express", "MongoDB"],
                liveUrl: "https://learning-platform-188p-2iej7w6dz-ahmed-eldalys-projects.vercel.app/",
                githubUrl: "https://github.com/ahmedaldaly",
                gradient: "from-green-600 to-teal-600"
              },
              {
                title: "Blog Application",
                description: "Full-featured blog with user authentication and content management",
                tags: ["MERN", "JWT", "Redux"],
                githubUrl: "https://github.com/ahmedaldaly/Blog-App",
                gradient: "from-indigo-600 to-blue-600"
              },
              {
                title: "Hotel Booking System",
                description: "Hotel reservation platform with room management and booking system",
                tags: ["React", "Node.js", "API"],
                liveUrl: "https://hotel-six-wheat.vercel.app/en",
                gradient: "from-purple-600 to-pink-600"
              },
              {
                title: "Bookstore API",
                description: "RESTful API for bookstore management with CRUD operations",
                tags: ["Node.js", "Express", "MongoDB"],
                githubUrl: "https://github.com/ahmedaldaly/bookstorenode",
                gradient: "from-yellow-600 to-orange-600"
              }
            ].map((project, index) => (
              <div key={project.title} 
                   className="group relative bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-gray-600 transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fade-in-up overflow-hidden"
                   style={{ animationDelay: `${index * 150}ms` }}>
                
                {/* Project header with gradient */}
                <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <h3 className="text-2xl font-bold text-center px-4">{project.title}</h3>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm border border-gray-600/50 group-hover:border-gray-500/50 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                         className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-all duration-300 hover:scale-105 group/link">
                        <ExternalLink size={16} className="group-hover/link:translate-x-1 transition-transform" />
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                         className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-all duration-300 hover:scale-105 group/link">
                        <Github size={16} className="group-hover/link:scale-110 transition-transform" />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 bg-gray-900/50 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Experience & Education
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="animate-fade-in-left">
              <h3 className="text-3xl font-bold mb-8 text-gray-200">Professional Experience</h3>
              <div className="space-y-8">
                <div className="relative pl-8 border-l-2 border-blue-500">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                  <h4 className="text-2xl font-bold text-white mb-2">Full Stack Developer</h4>
                  <p className="text-blue-400 mb-3 font-medium">Freelance • 2024 - Present</p>
                  <p className="text-gray-400 leading-relaxed">
                    Developing modern web applications using React, Node.js, and cloud technologies. 
                    Focus on creating scalable, user-friendly solutions for various clients.
                  </p>
                </div>
                
                <div className="relative pl-8 border-l-2 border-gray-600">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-600 rounded-full"></div>
                  <h4 className="text-2xl font-bold text-white mb-2">Full Stack Developer</h4>
                  <p className="text-gray-400 mb-3">2025 I work in a business manager company</p>
                  <p className="text-gray-400 leading-relaxed">
                    Built responsive websites and web applications. Gained experience in 
                    frontend and backend development, database design, and API integration.
                  </p>
                </div>
              </div>
            </div>

            <div className="animate-fade-in-right">
              <h3 className="text-3xl font-bold mb-8 text-gray-200">Education & Certifications</h3>
              <div className="space-y-8">
                <div className="relative pl-8 border-l-2 border-green-500"> 
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-green-500 rounded-full animate-pulse delay-500"></div>
                  <h4 className="text-2xl font-bold text-white mb-2"> Faculty of Law</h4>
                  <p className="text-green-400 mb-3 font-medium">University • 2023 - 2027</p>
                  <p className="text-gray-400 leading-relaxed">
                   Bachelor's degree in law studies
                  </p>
                </div>
                <div className="relative pl-8 border-l-2 border-gray-600">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-600 rounded-full"></div>
                  <h4 className="text-2xl font-bold text-white mb-2">Full Stack Development</h4>
                  <p className="text-gray-400 mb-3">Self-taught & Online Courses • 2023 - Present</p>
                  <p className="text-gray-400 leading-relaxed">
                    Continuous learning through online platforms, building projects, and 
                    staying updated with latest web development trends and technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Let's Work Together
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              I'm always interested in new opportunities and exciting projects. 
              Let's discuss how we can bring your ideas to life.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <a href="mailto:ahm3deldlay2@gmail.com" 
                 className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 flex items-center gap-3">
                <Mail size={20} className="group-hover:scale-110 transition-transform" />
                Get In Touch
              </a>
              <a href="https://github.com/ahmedaldaly" target="_blank" rel="noopener noreferrer"
                 className="group px-8 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-gray-600 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-3">
                <Github size={20} className="group-hover:scale-110 transition-transform" />
                View GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-400">
          <p>&copy; 2024 Ahmed Eldaly. All rights reserved.</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes gradient {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(59, 130, 246, 0.5);
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes spin-slow-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out forwards;
        }
        
        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out forwards;
        }
        
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 15s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default App;