import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex justify-center">
      <ul className="flex space-x-6 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 py-4 rounded-2xl mt-4">
        <li>
          <Link legacyBehavior href="/">
            <a className="text-white hover:text-gray-400 transition-colors duration-300 px-4 py-2 rounded-md">Home</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/projects">
            <a className="text-white hover:text-gray-400 transition-colors duration-300 px-4 py-2 rounded-md">Projects</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;






