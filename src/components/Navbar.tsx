// components/Navbar.tsx
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <div className="flex items-center">
          <img src="/imgs/logo.png" alt="Logo" className="h-10" />
          <span className="ml-3 text-indigo-500 font-bold text-xl">PREGNANCY</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-700 hover:text-indigo-500">HOME</Link>
          <Link href="/doctors" className="text-gray-700 hover:text-indigo-500">DOCTORS</Link>
          <Link href="/pages" className="text-gray-700 hover:text-indigo-500">PAGES</Link>
          <Link href="/blog" className="text-gray-700 hover:text-indigo-500">BLOG</Link>
          <Link href="/procedures" className="text-gray-700 hover:text-indigo-500">PROCEDURES</Link>
          <Link href="/appointment" className="text-gray-700 hover:text-indigo-500">APPOINTMENT</Link>
        </div>
        <div className="md:flex items-center space-x-4">
          <button className="text-gray-700 hover:text-indigo-500">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button> 
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
