'use client';

import { Award } from 'lucide-react';

export default function Skills() {
  const skills = [
    { name: 'JavaScript', logo: '/assets/logo/JavaScript.png' },
    { name: 'React', logo: '/assets/logo/React.png' },
    { name: 'Python', logo: '/assets/logo/Python.png' },
    { name: 'Node.js', logo: '/assets/logo/Node.js.png' },
    { name: 'MongoDB', logo: '/assets/logo/MongoDB.png' },
    { name: 'Git', logo: '/assets/logo/Git.png' },
    { name: 'Flask', logo: '/assets/logo/Flask.png' },
    { name: 'Express', logo: '/assets/logo/Express.png' },
    { name: 'PostgreSQL', logo: '/assets/logo/PostgresSQL.png' },
    { name: 'Azure', logo: '/assets/logo/Azure.png' },
    { name: 'Jest', logo: '/assets/logo/Jest.png' },
    { name: 'Postman', logo: '/assets/logo/postman-icon.png' },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-12">My <span className="underline decoration-4 decoration-black">Skills</span></h2>

        <div className="grid grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="p-6 border-2 border-black rounded-lg hover:bg-black hover:text-white transition-all group cursor-pointer">
              <div className="mb-4 flex justify-center">
                <img src={skill.logo} alt={skill.name} className="w-16 h-16 object-contain" />
              </div>
              <div className="text-sm font-semibold text-center">{skill.name}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg border border-gray-300">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Award className="mr-2" size={24} />
              Languages
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-semibold">English</span>
                <span className="px-3 py-1 bg-black text-white rounded-full text-sm">Fluent</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold">Mandarin</span>
                <span className="px-3 py-1 bg-black text-white rounded-full text-sm">Native</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-300">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Award className="mr-2" size={24} />
              Certifications
            </h3>
            <div className="space-y-2 text-gray-700">
              <p>☁️ <strong>AWS Cloud Practitioner</strong></p>
              <p>☁️ <strong>Microsoft Azure AI-900</strong></p>
              <p>📈 <strong>CFA Level 1</strong></p>
              <p>💻 <strong>Coursera:</strong> Data Structures, Supervised ML, Advanced Learning Algorithms</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
