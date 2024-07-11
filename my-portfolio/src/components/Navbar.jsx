import React, { useState } from 'react'
import ThemeSwitch from './ThemeSwitch';

const Navbar = () => {
    const [dropdown, setDropdown] = useState(false);
    const showDropdown = () => {
        setDropdown(!dropdown);
    };
    return (
        <nav className="w-full lg:h-auto h-[10vh] flex flex-col justify-center items-center fixed z-50 bg-[#f0ebe3] dark:bg[#1f2937]">
            <div className="w-[95%] h-[10vh] flex justify-between items-baseline pt-2 text-[#12222E] relative">
                <div className="flex justify-between items-center w-full pt-4">
                    <img src="/logo.png" alt="" className="w-28 h-5" />
                    <ThemeSwitch />
                </div>

                {dropdown ? (
                    <div className="text-2xl cursor-pointer text-[#1f2035] ml-6 lg:absolute z-10 top-6 right-0" onClick={showDropdown}>
                        <span className="material-symbols-outlined text-white">
                            cancel
                        </span>
                    </div>
                ) : (
                    <div className="text-2xl cursor-pointer text-[#1f2035] ml-[6px] dark:text-white" onClick={showDropdown}>
                        <span className="material-symbols-outlined text-[#000]">
                            menu
                        </span>
                    </div>
                )}
            </div>
            {dropdown ? (
                <div className="w-full h-[100vh] lg:w-[512px] absolute lg:top-0 top-[10vh] lg:right-0 bg-[#f0ebe3] dark:bg-[#1f2937] transition ease-in-out duration"
                    onClick={showDropdown}>
                    <div className="w-full lg:h-full h-[320px] flex flex-col items-baseline pt-8 gap-4 text-[#12222E]">
                        <ul className="font-bold text-[22px] px-3 flex flex-col justify-center items-center w-full h-full lg:mt-0 mt-[10vh] gap-y-8">
                            <a href="#education" className="cursor-pointer text-black no-underline hover:text-[#29a587]">Education</a>
                            <a href="#project" className="cursor-pointer text-black no-underline hover:text-[#29a587]">Projects</a>
                            <a href="#about" className="cursor-pointer text-black no-underline hover:text-[#29a587]">About</a>
                            <a href="#contact" className="cursor-pointer text-black no-underline hover:text-[#29a587]">Contact</a>
                        </ul>
                    </div>
                </div>
            ) : null}

        </nav>
    )
}

export default Navbar
