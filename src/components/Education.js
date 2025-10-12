'use client';

import { GraduationCap } from 'lucide-react';

export default function Education() {
  const education = [
    {
      degree: 'MSc Financial Mathematics',
      school: 'London School of Economics',
      period: '2021 - 2022',
      details: 'Focused on stochastic process, measure theory, numerical pricing, time series, regression analysis, investment portfolio, and enterprise risk management.'
    },
    {
      degree: 'BSc Mathematics and Economics',
      school: 'London School of Economics',
      period: '2018 - 2021',
      details: 'First Class Honours. Strong foundation in mathematical theory and economic analysis.'
    }
  ];

  return (
    <section id="education" className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-12 text-white">
          <GraduationCap className="inline-block mr-4 mb-2 text-white" size={48} />
          Education
        </h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="border-2 border-black rounded-lg p-8 hover:shadow-xl transition-shadow bg-white">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
                  <p className="text-xl text-gray-700">{edu.school}</p>
                </div>
                <span className="text-gray-600 font-semibold">{edu.period}</span>
              </div>
              <p className="text-gray-600 leading-relaxed">{edu.details}</p>
              {index === 1 && (
                <div className="mt-4 inline-block px-4 py-2 bg-black text-white rounded-full text-sm font-semibold">
                  🏆 First Class Honours
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
