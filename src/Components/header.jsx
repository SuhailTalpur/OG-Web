import React from 'react';
import { FaDiscord, FaTwitter } from "react-icons/fa";
import Button from './Button';
import img from '../assets/images/NFT-2.jpeg';
import img2 from '../assets/images/NFT-3.jpeg';

const Header = () => {
    return (
        <header className="">
            {/* Navbar */}
            <nav className="flex flex-wrap justify-between items-center py-6 px-6 md:px-12">
                <h1 className="text-3xl md:text-4xl font-semibold righteous text-text font-outline-2">
                    OrangutanX
                </h1>
                <div className="flex space-x-4">
                    <a href="https://x.com/orangutanxlabs" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="text-2xl md:text-3xl cursor-pointer text-text hover:text-orange-400 transition duration-150 ease-in-out" />
                    </a>
                    <a href="https://discord.gg/vMgAYQZRDW" target="_blank" rel="noopener noreferrer">
                        <FaDiscord className="text-2xl md:text-3xl cursor-pointer text-text hover:text-orange-400 transition duration-150 ease-in-out" />
                    </a>
                </div>

            </nav>

            {/* Hero Section */}
            <div className="flex flex-col lg:flex-row justify-around items-center min-h-[80vh] px-6 md:px-12">
                {/* Left Text Section */}
                <div className="text-center lg:text-left space-y-6 max-w-lg">
                    <h1 className="text-4xl md:text-6xl font-bold text-text righteous font-outline-2">
                        OrangutanX
                    </h1>
                    <p className="text-lg md:text-2xl text-white">
                        Culture, Community, Utility, and Innovation on Solana
                    </p>
                </div>

                {/* Right Image Section */}
                <div className="flex space-x-2 mt-6 lg:mt-0">
                    <img src={img} alt="NFT 1" className="w-48 md:w-48 lg:w-64 rounded-2xl" />
                    <img src={img2} alt="NFT 2" className="w-48 md:w-48 lg:w-64 rounded-2xl" />
                </div>
            </div>
        </header>
    );
};

export default Header;
