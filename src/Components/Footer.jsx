import { FaTwitter, FaDiscord } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-16 lg:px-24 relative text-center">
      <div className="flex flex-col items-center justify-center space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold text-orange-500 righteous">ORANGUTANX</h2>
        <p className="text-gray-400 text-lg md:text-xl ">
          A Community driven project
        </p>
        <div className="flex space-x-6 text-xl">
          <a href="https://x.com/orangutanxlabs" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl md:text-2xl cursor-pointer text-orange-500 hover:text-orange-400 transition duration-150 ease-in-out" />
          </a>
          <a href="https://discord.gg/vMgAYQZRDW" target="_blank" rel="noopener noreferrer">
            <FaDiscord className="text-2xl md:text-2xl cursor-pointer text-orange-500 hover:text-orange-400 transition duration-150 ease-in-out" />
          </a>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-4 text-gray-500 text-sm">
        © 2025 OrangutanX. All rights reserved.
      </div>
    </footer>
  );
}
