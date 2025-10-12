'use client';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-12">About <span className="underline decoration-4 decoration-black">Me</span></h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="w-full aspect-square bg-black rounded-3xl mb-8 flex items-center justify-center overflow-hidden shadow-xl">
              <svg viewBox="0 0 200 200" className="w-4/5 h-4/5">
                <circle cx="100" cy="70" r="30" fill="white" />
                <rect x="70" y="100" width="60" height="80" rx="10" fill="white" />
                <rect x="50" y="120" width="20" height="40" rx="5" fill="white" />
                <rect x="130" y="120" width="20" height="40" rx="5" fill="white" />
                <circle cx="90" cy="65" r="3" fill="black" />
                <circle cx="110" cy="65" r="3" fill="black" />
                <path d="M 90 75 Q 100 78 110 75" stroke="black" fill="none" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              I'm a <strong>Full Stack Engineer</strong> with a unique background combining <strong>MSc Financial Mathematics from the London School of Economics</strong> with hands-on software development experience. Currently working as an Assistant Manager at <strong>KPMG's Forensic Technology</strong> team in London, where I design and build enterprise-scale applications.
            </p>
            <p>
              At KPMG, I've developed full-stack solutions from the ground up, including a <strong>semantic search platform</strong> with JavaScript frontend (ES6, Rollup, Babel) and Flask REST API backend using embedding models and vector similarity search. I work extensively with <strong>Azure CI/CD pipelines</strong>, implement secure authentication systems (RBAC, OpenID Connect, CSRF protection), and build Python automation workflows for data processing at scale.
            </p>
            <p>
              I'm passionate about leveraging technology in the <strong>Banking and Finance</strong> sector, where my quantitative background and full-stack expertise intersect. My experience spans from building user interfaces with <strong>React and JavaScript</strong> to backend development with <strong>Python, Node.js, and SQL databases</strong>, all while maintaining focus on security, scalability, and user experience.
            </p>
            <p>
              I completed a <strong>Software Engineering Bootcamp at Northcoders</strong>, where I built full-stack mobile applications using React Native, Firebase, and MongoDB. I hold certifications including <strong>AWS Cloud Practitioner, Microsoft Azure AI-900, and CFA Level 1</strong>, demonstrating my commitment to continuous learning across technology and finance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
