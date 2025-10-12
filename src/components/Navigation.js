'use client';

export default function Navigation() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <nav className="bg-white border-b border-gray-200 backdrop-blur-sm bg-white/90">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">Coco Shen</div>

            <div className="relative group">
              <div className="flex flex-col justify-center items-center w-10 h-10 gap-1.5 cursor-pointer hover:opacity-70">
                <span className="block w-6 h-0.5 bg-black" />
                <span className="block w-6 h-0.5 bg-black" />
                <span className="block w-6 h-0.5 bg-black" />
              </div>

              <div className="absolute right-0 top-12 bg-white border border-gray-200 rounded-lg shadow-lg py-2 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <a href="#about" className="block px-6 py-2 hover:bg-gray-100 cursor-pointer">About</a>
                <a href="#education" className="block px-6 py-2 hover:bg-gray-100 cursor-pointer">Education</a>
                <a href="#skills" className="block px-6 py-2 hover:bg-gray-100 cursor-pointer">Skills</a>
                <a href="#experience" className="block px-6 py-2 hover:bg-gray-100 cursor-pointer">Experience</a>
                <a href="#projects" className="block px-6 py-2 hover:bg-gray-100 cursor-pointer">Projects</a>
                <a href="#moments" className="block px-6 py-2 hover:bg-gray-100 cursor-pointer">Moments</a>
                <a href="#contact" className="block px-6 py-2 hover:bg-gray-100 cursor-pointer">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
