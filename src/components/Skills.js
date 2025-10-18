'use client';

import Image from 'next/image';

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
        <h2 className="text-5xl font-bold mb-12">Tech <span className="underline decoration-4 decoration-black">Stack</span></h2>

        <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="p-6 border-2 border-black rounded-lg hover:bg-black hover:text-white transition-all group cursor-pointer">
              <div className="mb-4 flex justify-center relative w-16 h-16 mx-auto">
                <Image src={skill.logo} alt={skill.name} fill className="object-contain" />
              </div>
              <div className="text-sm font-semibold text-center">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
