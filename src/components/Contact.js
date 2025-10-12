'use client';

import { Github, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:ssq1402@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold mb-8 text-center">
          <span className="inline-block hover:scale-110 transition-transform duration-300">Let's</span>{' '}
          <span className="inline-block hover:scale-110 transition-transform duration-300">Connect</span>{' '}
          <span className="inline-block animate-bounce">👋</span>
        </h2>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
          <div>
            <input
              type="text"
              name="name"
              placeholder="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-6 py-4 border-2 border-black rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-6 py-4 border-2 border-black rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <textarea
              name="message"
              placeholder="message"
              required
              rows="6"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-6 py-4 border-2 border-black rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-black resize-none"
            />
          </div>

          <div>
            <button
              type="submit"
              className="px-12 py-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-lg font-semibold"
            >
              Stay in touch
            </button>
          </div>
        </form>

        <div className="flex justify-center gap-6 mt-12">
          <a href="mailto:ssq1402@gmail.com" className="p-3 border-2 border-black rounded-lg hover:bg-black hover:text-white transition-colors">
            <Mail size={24} />
          </a>
          <a href="https://www.linkedin.com/in/siqi-coco-shen-738509175/" target="_blank" rel="noopener noreferrer" className="p-3 border-2 border-black rounded-lg hover:bg-black hover:text-white transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="https://github.com/coco1402/farmly-app" target="_blank" rel="noopener noreferrer" className="p-3 border-2 border-black rounded-lg hover:bg-black hover:text-white transition-colors">
            <Github size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}
