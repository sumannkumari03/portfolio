import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

function App() {
  return (
    <div className="bg-gray-50 text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-5xl font-bold mb-4">
          Hi, I'm <span className="text-blue-600">Suman Kumari</span>
        </h1>
        <p className="text-xl mb-6">Full Stack Developer | AI-Enabled Solutions</p>
        <div className="flex gap-6">
          <a href="mailto:sumannsoni@gmail.com" className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700">Hire Me</a>
          <a href="/resume.pdf" className="border border-blue-600 px-6 py-2 rounded-lg hover:bg-blue-100">Download CV</a>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-lg text-gray-600">
          I am a Full Stack Developer with 9+ years of professional experience,
          including 2 years as a freelancer. Skilled in React, .NET Core, and
          AI-powered applications, I deliver scalable, secure, and
          user-friendly solutions for startups and enterprises.
        </p>
      </section>

      {/* Skills Section */}
      <section className="bg-white py-20 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[".NET Core","React","AI/ML","Azure","Angular","Devops","APIs","GEN AI"].map((skill) => (
            <div key={skill} className="p-4 bg-gray-100 rounded-xl shadow text-center font-medium">{skill}</div>
          ))}
        </div>
      </section>
        
      {/* Projects Section */}
      <section className="max-w-5xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Healthcare Management System</h3>
            <p className="text-gray-600 mb-4">Patient, doctor, appointment modules with dashboards and KPIs using React + .NET Core API.</p>
            <a href="https://github.com/sumannkumari03/job-portfolio/tree/main/job-portfolio/job-portfolio/projects/project1-healthcare-app" className="text-blue-600 hover:underline">View Project →</a>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">AI-Powered Insurance Predictor</h3>
            <p className="text-gray-600 mb-4">Built predictive analysis model using .NET Core + ONNX runtime for insurance claim approvals.</p>
            <a href="https://github.com/sumannkumari03/job-portfolio/tree/main/job-portfolio/job-portfolio/projects/project2-loan-risk-ml" className="text-blue-600 hover:underline">View Project →</a>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">E-Commerce Web App</h3>
            <p className="text-gray-600 mb-4">Full-stack application with JWT authentication, shopping cart, and secure payments.</p>
            <a href="https://github.com/sumannkumari03/job-portfolio/tree/main/job-portfolio/job-portfolio/projects/project3-ecommerce-dashboard" className="text-blue-600 hover:underline">View Project →</a>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">AI Chatbot for Customer Support</h3>
            <p className="text-gray-600 mb-4">Integrated OpenAI APIs to create a smart chatbot for 24/7 customer support in web apps.</p>
            <a href="https://github.com/yourgithub/ai-chatbot" className="text-blue-600 hover:underline">View Project →</a>
          </div>
        </div>
      </section>

      {/* Achievements / Highlights Section */}
<section className="bg-white py-20 px-6">
  <h2 className="text-3xl font-semibold text-center mb-10">Achievements & Highlights</h2>
  
  {/* Stats Cards */}
  <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center mb-16">
    <div className="p-6 bg-gray-100 rounded-xl shadow">
      <h3 className="text-2xl font-bold text-blue-600">11+</h3>
      <p className="text-gray-600">Years of Experience</p>
    </div>
    <div className="p-6 bg-gray-100 rounded-xl shadow">
      <h3 className="text-2xl font-bold text-blue-600">50+</h3>
      <p className="text-gray-600">Projects Delivered</p>
    </div>
    <div className="p-6 bg-gray-100 rounded-xl shadow">
      <h3 className="text-2xl font-bold text-blue-600">5★</h3>
      <p className="text-gray-600">Client Feedback Rating</p>
    </div>
    <div className="p-6 bg-gray-100 rounded-xl shadow">
      <h3 className="text-2xl font-bold text-blue-600">3</h3>
      <p className="text-gray-600">Countries Served</p>
    </div>
  </div>

  {/* Certifications */}
  <div className="max-w-5xl mx-auto mb-16">
    <h3 className="text-2xl font-bold mb-6 text-center">Certifications</h3>
    <ul className="list-disc list-inside text-gray-700 space-y-2">
      <li>AWS Certified Solutions Architect – Associate</li>
      <li>Microsoft Certified: Azure Developer Associate</li>
      <li>AI/ML Specialization – Coursera</li>
    </ul>
  </div>
</section>


      {/* Recommendations Section */}
      <section className="bg-gray-100 py-20 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">Recommendations</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="p-6 bg-white rounded-xl shadow">
            <p className="text-gray-700 italic mb-4">"Suman is an exceptional developer. She built our healthcare platform with precision and delivered ahead of schedule. Highly recommend her for full-stack projects."</p>
            <h4 className="font-semibold">— CTO, Healthcare Startup</h4>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <p className="text-gray-700 italic mb-4">"She developed an AI-powered solution for our insurance claims system, which reduced processing time by 40%. Her technical skills and professionalism are outstanding."</p>
            <h4 className="font-semibold">— Project Manager, Insurance Firm</h4>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <p className="text-gray-700 italic mb-4">"Suman is a great collaborator. She transformed our e-commerce app with modern tech and clean UI/UX. Communication was excellent throughout."</p>
            <h4 className="font-semibold">— Founder, E-Commerce Startup</h4>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <p className="text-gray-700 italic mb-4">"Her AI chatbot integration saved us huge customer support costs. Always proactive and delivers beyond expectations."</p>
            <h4 className="font-semibold">— CEO, SaaS Company</h4>
          </div>
        </div>
      </section>

{/* Blog Section */}
<section className="bg-gray-50 py-20 px-6">
  <h2 className="text-3xl font-semibold text-center mb-10">Blog / Articles</h2>
  <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {/* Blog 1 */}
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
      <img src="https://source.unsplash.com/400x200/?coding,developer" alt="Blog 1" className="rounded-lg mb-4" />
      <h3 className="text-xl font-bold mb-2">Top 5 Tips for Becoming a Full-Stack Developer</h3>
      <p className="text-gray-600 mb-4">Practical advice for aspiring developers to master frontend and backend skills...</p>
      <a href="#" className="text-blue-600 font-semibold hover:underline">Read More →</a>
    </div>
    {/* Blog 2 */}
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
      <img src="https://source.unsplash.com/400x200/?ai,technology" alt="Blog 2" className="rounded-lg mb-4" />
      <h3 className="text-xl font-bold mb-2">AI in Web Development: Future of Smart Applications</h3>
      <p className="text-gray-600 mb-4">Exploring how artificial intelligence is shaping modern web applications...</p>
      <a href="#" className="text-blue-600 font-semibold hover:underline">Read More →</a>
    </div>
    {/* Blog 3 */}
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
      <img src="https://source.unsplash.com/400x200/?cloud,devops" alt="Blog 3" className="rounded-lg mb-4" />
      <h3 className="text-xl font-bold mb-2">Getting Started with Cloud & DevOps for Developers</h3>
      <p className="text-gray-600 mb-4">Beginner-friendly guide to understanding DevOps workflows and cloud deployments...</p>
      <a href="#" className="text-blue-600 font-semibold hover:underline">Read More →</a>
    </div>
  </div>
</section>

      {/* Contact Section */}
      <section className="bg-gray-900 text-white py-16 text-center">
        <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
        <p className="mb-8">Let’s collaborate to build scalable and AI-driven applications.</p>
        <div className="flex justify-center gap-6">
          <a href="mailto:sumannsoni@gmail.com"><Mail size={28} /></a>
          <a href="https://github.com/sumannkumari03"><Github size={28} /></a>
          <a href="https://linkedin.com/in/sumannkumari03"><Linkedin size={28} /></a>
        </div>
      </section>
    </div>
  );
}

export default App;
