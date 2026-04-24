/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { type ReactNode } from "react";
import { motion } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  ChevronRight, 
  Code2, 
  Terminal, 
  Database, 
  Layout, 
  Cpu, 
  Briefcase, 
  GraduationCap,
  Download,
  Languages,
  CheckCircle2
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-neutral-50/80 backdrop-blur-md border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-mono font-bold tracking-tighter text-xl">EH.</span>
          <div className="flex gap-8 text-xs font-medium uppercase tracking-widest text-neutral-500">
            <a href="#about" className="hover:text-neutral-900 transition-colors">About</a>
            <a href="#project" className="hover:text-neutral-900 transition-colors">Project</a>
            <a href="#skills" className="hover:text-neutral-900 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-neutral-900 transition-colors">Experience</a>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
        {/* Hero Section */}
        <section className="mb-32">
          <motion.div 
            initial="initial" 
            animate="animate" 
            variants={stagger}
            className="grid lg:grid-cols-[1.5fr_1fr] gap-12 items-center"
          >
            <div>
              <motion.span 
                variants={fadeIn}
                className="section-label"
              >
                Junior Developer
              </motion.span>
              <motion.h1 
                variants={fadeIn}
                className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]"
              >
                ESMERALDA <br /> HASA
              </motion.h1>
              <motion.p 
                variants={fadeIn}
                className="text-xl text-neutral-600 max-w-xl mb-10 leading-relaxed"
              >
                Building robust full-stack applications with C# .NET Core and React. 
                Focused on scalable architecture, clean code, and business-driven solutions.
              </motion.p>
              
              <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
                <a 
                  href="mailto:esmeraldahasa17@gmail.com" 
                  className="bg-neutral-900 text-white px-8 py-4 rounded-full flex items-center gap-2 hover:bg-neutral-800 transition-all hover-lift"
                >
                  <Mail size={18} />
                  Contact Me
                </a>
                <div className="flex gap-2">
                  <a href="https://www.linkedin.com/in/esmeralda-hasa-6523002a6/" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full border border-neutral-200 hover:bg-neutral-100 transition-all hover-lift">
                    <Linkedin size={20} />
                  </a>
                  <a href="https://github.com/esmeraldahasa1" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full border border-neutral-200 hover:bg-neutral-100 transition-all hover-lift">
                    <Github size={20} />
                  </a>
                </div>
              </motion.div>
            </div>

            <motion.div 
              variants={fadeIn}
              className="relative aspect-square rounded-3xl overflow-hidden group"
            >
              <img 
                src="https://media.licdn.com/dms/image/v2/D4D03AQG7OBF-zXkznA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1729269924046?e=1778716800&v=beta&t=6Ezq1gFRn90A_AdDFZWF0LQ6PBmOeTOl-Xd3ZDFFNR4" 
                alt="Esmeralda Hasa" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-transparent transition-colors" />
            </motion.div>
          </motion.div>
        </section>

        {/* Info Grid */}
        <section id="about" className="mb-32 grid md:grid-cols-2 gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label">Professional Summary</span>
            <p className="text-xl text-neutral-600 leading-relaxed mb-8">
              Junior developer with practical experience in developing applications through academic and personal projects. 
              Skilled in problem-solving, debugging, and writing clean, maintainable code. 
              Seeking to contribute to a dynamic team while growing technical expertise.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-neutral-500">
                <MapPin size={18} />
                <span>Tiranë, Shqipëri</span>
              </div>
              <div className="flex items-center gap-4 text-neutral-500">
                <Phone size={18} />
                <span>+355 684 540 984</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div>
              <span className="section-label">Languages</span>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">English</span>
                    <span className="text-neutral-400">Advanced</span>
                  </div>
                  <div className="h-1 bg-neutral-100 overflow-hidden">
                    <div className="h-full bg-neutral-900 w-[90%]" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Italian</span>
                    <span className="text-neutral-400">Basic</span>
                  </div>
                  <div className="h-1 bg-neutral-100 overflow-hidden">
                    <div className="h-full bg-neutral-900 w-[30%]" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Featured Project */}
        <section id="project" className="mb-32">
          <span className="section-label">Featured Project</span>
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-neutral-900 rounded-[2rem] p-8 md:p-16 text-white overflow-hidden relative"
          >
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex gap-2 mb-6">
                  {['.NET Core', 'React', 'TypeScript', 'SQL'].map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-widest border border-white/20 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Leave Management System</h2>
                <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
                  A full-stack enterprise application designed to automate and streamline employee leave processes. 
                  Implemented role-based administration, complex business rule validation, and secure authentication.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-10">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-white/10 rounded-lg">
                      <CheckCircle2 size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm">Role-Based Access</h4>
                      <p className="text-neutral-500 text-xs">Admin/User permission levels</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-white/10 rounded-lg">
                      <CheckCircle2 size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm">Workflow Automation</h4>
                      <p className="text-neutral-500 text-xs">Request-Approval engine</p>
                    </div>
                  </div>
                </div>
                <button className="flex items-center gap-2 text-white font-medium group">
                  View Technical Breakdown 
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] bg-neutral-800 rounded-2xl border border-white/10 p-6 font-mono text-[10px] overflow-hidden">
                  <div className="flex gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                  </div>
                  <div className="space-y-1 opacity-50">
                    <p className="text-blue-400">public class LeaveRequestService {'{'}</p>
                    <p className="pl-4 text-purple-400">private readonly IRepository _repo;</p>
                    <p className="pl-4 text-white">public async Task ApproveRequest(Guid id) {'{'}</p>
                    <p className="pl-8 text-neutral-400">// Business rules validation</p>
                    <p className="pl-8 text-blue-400">var request = await _repo.GetById(id);</p>
                    <p className="pl-8 text-blue-400">if (request.Status == Pending) {'{'}</p>
                    <p className="pl-12 text-blue-400">request.Status = Approved;</p>
                    <p className="pl-12 text-blue-400">await _repo.Update(request);</p>
                    <p className="pl-8 text-blue-400">{'}'}</p>
                    <p className="pl-4 text-white">{'}'}</p>
                    <p className="text-blue-400">{'}'}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent skew-x-12" />
          </motion.div>
        </section>

        {/* Skills Grid */}
        <section id="skills" className="mb-32">
          <span className="section-label">Technical Toolkit</span>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <SkillCard 
              icon={<Terminal size={24} />}
              title="Languages"
              items={["C#", "SQL", "Java (OOP)", "JavaScript", "HTML/CSS"]}
            />
            <SkillCard 
              icon={<Database size={24} />}
              title="Backend & Arch"
              items={[".NET Core", "REST APIs", "Clean Architecture", "Repository Pattern", "DI"]}
            />
            <SkillCard 
              icon={<Layout size={24} />}
              title="Frontend"
              items={["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "Zustand"]}
            />
            <SkillCard 
              icon={<Cpu size={24} />}
              title="Services & Integration"
              items={["Firebase", "OAuth", "MS Email Integration", "API Consumption"]}
            />
          </div>
        </section>

        {/* Experience & Education */}
        <section id="experience" className="mb-32 grid md:grid-cols-2 gap-24">
          <div>
            <span className="section-label">Work Experience</span>
            <div className="relative pl-8 border-l border-neutral-200 space-y-12">
              <div className="relative">
                <div className="absolute -left-[37px] top-0 w-4 h-4 rounded-full bg-neutral-900 border-4 border-white" />
                <div className="mb-2">
                  <h3 className="font-bold flex items-center gap-2">
                    Easypay Albania
                    <span className="text-[10px] uppercase bg-neutral-100 px-2 py-1 rounded">Internship</span>
                  </h3>
                  <p className="text-neutral-400 text-sm">02/2026 - 04/2026</p>
                </div>
                <p className="text-neutral-600 font-medium">Leave Management System Project</p>
                <ul className="mt-4 space-y-2 text-sm text-neutral-500 list-disc list-inside">
                  <li>Built full-stack application with C# and React</li>
                  <li>Implemented role-based administration</li>
                  <li>Managed leave balances with business rules</li>
                  <li>Applied OAuth for secure access</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <span className="section-label">Education</span>
            <div className="relative pl-8 border-l border-neutral-200 space-y-12">
              <div className="relative">
                <div className="absolute -left-[37px] top-0 w-4 h-4 rounded-full bg-neutral-900 border-4 border-white" />
                <div className="mb-2">
                  <h3 className="font-bold">Bachelor in Business Informatics</h3>
                  <p className="text-neutral-400 text-sm">Degree Overview</p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  {[
                    "Finance & Accounting",
                    "Statistics & Probability",
                    "Business Info Systems",
                    "Algorithms & DSA"
                  ].map(subject => (
                    <div key={subject} className="bg-white p-3 rounded-xl border border-neutral-100 text-xs text-neutral-600">
                      {subject}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Soft Skills & Footer */}
        <section className="mb-32 border-t border-neutral-200 pt-32 text-center">
          <span className="section-label mx-auto">Collaboration</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16">
            Beyond the Code
          </h2>
          <div className="flex flex-wrap justify-center gap-12">
            {[
              "Time Management",
              "Attention to Detail",
              "Responsibility",
              "Fast Learner",
              "Team Player"
            ].map(skill => (
              <span key={skill} className="text-xl font-medium text-neutral-400">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <footer className="pt-20 border-t border-neutral-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xs text-neutral-400 font-mono">
            © 2026 ESMERALDA HASA — TIRANË, ALBANIA
          </div>
          <div className="flex gap-6">
            <a href="mailto:esmeraldahasa17@gmail.com" className="text-neutral-400 hover:text-neutral-900 transition-colors">
              <Mail size={20} />
            </a>
            <a href="https://www.linkedin.com/in/esmeralda-hasa-6523002a6/" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-neutral-900 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/esmeraldahasa1" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-neutral-900 transition-colors">
              <Github size={20} />
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}

function SkillCard({ icon, title, items }: { icon: ReactNode, title: string, items: string[] }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white p-8 rounded-3xl border border-neutral-100 hover:shadow-xl hover:shadow-neutral-200/50 transition-all cursor-default"
    >
      <div className="text-neutral-900 mb-6">{icon}</div>
      <h3 className="font-bold text-lg mb-4 tracking-tight">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map(item => (
          <span key={item} className="text-xs text-neutral-500 bg-neutral-50 px-2 py-1 rounded">
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
