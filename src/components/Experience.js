'use client';

export default function Experience() {
  const experiences = [
    {
      company: 'KPMG UK',
      role: 'Assistant Manager - Forensic Technology',
      period: 'Oct 2022 - Present',
      location: 'London',
      description: (
        <div className="space-y-3">
          <p><strong>Developed a full-stack Semantic Search extension for an enterprise e-discovery platform</strong></p>
          <ul className="list-disc pl-5 space-y-2">
            <li>End-to-end ownership of functionality delivery, from initial design and development through deployment and client adoption.</li>
            <li>Built a full-stack solution integrating an interactive JavaScript UI (ES6 modules, Rollup, Babel) with a Flask REST API for semantic retrieval using embedding models and vector similarity search. Enhanced usability with session storage management, redirect flows, filtering, and data visualisation with highlight and navigation, directly improving client efficiency in reviewing large document sets.</li>
            <li>Implemented secure authentication and authorisation (role-based access control, OpenID Connect, CSRF protection) and automated deployment with Azure CI/CD pipelines.</li>
            <li>Developed shared modules and reusable components, published and managed via Azure Artifacts, improving consistency and reducing development effort across different applications. Produced technical documentation and workflow diagrams to communicate system design to stakeholders and support maintainability.</li>
          </ul>
          <p className="mt-4"><strong>Automated workflows with Python scripting for an enterprise e-discovery platform</strong></p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Eliminated manual file uploads by automating ingestion of text, audio, and images, while optimising workflows to run concurrently with SQL operations and capturing detailed loading metrics in a database.</li>
            <li>Built Python-based deduplication scripts to identify and remove duplicate documents across multiple workspaces and within single workspaces, reducing data processing volume and improving review efficiency.</li>
            <li>Advised clients on workflow automation opportunities to reduce repetitive tasks and enable focus on higher-value activities. Enhanced reliability through robust error handling, logging, and automated email notifications.</li>
          </ul>
        </div>
      ),
      icon: '💻'
    },
    {
      company: 'Cambridge University',
      role: 'Research Intern',
      period: 'Oct 2020 - Dec 2020',
      location: 'Cambridge',
      description: 'Implemented reinforcement learning algorithm (weighted majority) to compute hypothetical daily prices for S&P500 since 1950. Compared merits of different algorithms and parameters, generating CAGR of 10+%, 5 times higher than buy and hold strategy.',
      icon: '🔬'
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-12">
          My <span className="underline decoration-4 decoration-white">Experience</span>
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-900 p-8 rounded-lg hover:bg-gray-800 transition-colors border border-gray-800">
              <div className="flex justify-between items-start mb-4 flex-wrap gap-4">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{exp.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                    <p className="text-xl text-gray-300">{exp.company}</p>
                    <p className="text-sm text-gray-400 mt-1">{exp.location}</p>
                  </div>
                </div>
                <span className="text-gray-400 font-semibold">{exp.period}</span>
              </div>
              <div className="text-gray-300 leading-relaxed">{exp.description}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gray-900 p-8 rounded-lg border border-gray-800">
          <h3 className="text-2xl font-bold mb-4">Additional Experience & Education</h3>
          <div className="space-y-4 text-gray-300">
            <div>
              <p className="font-semibold text-white">Software Engineering Bootcamp - Northcoders, UK</p>
              <p className="text-sm text-gray-400 mb-2">Oct 2022 - Feb 2023</p>
              <p>Completed intensive full-stack development bootcamp. Built mobile marketplace app using React Native, Node.js, Express, MongoDB, and Firebase. Applied Test Driven Development (TDD) principles throughout.</p>
            </div>
            <div>
              <p className="font-semibold text-white">Technical Skills</p>
              <p className="text-sm text-gray-400 mb-2">Programming & Tools</p>
              <p><strong>Languages:</strong> JavaScript, Python, C# .NET Core, SQL</p>
              <p><strong>Frontend:</strong> React, React Native, CSS, HTML</p>
              <p><strong>Backend:</strong> Node.js, Express, Flask, REST APIs</p>
              <p><strong>Databases:</strong> MongoDB, PostgreSQL, Firestore</p>
              <p><strong>Cloud & DevOps:</strong> Azure CI/CD, Docker, Git, VS Code, Jira</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
