import React, { useState } from 'react'
import ThemeSwitch from './ThemeSwitch';

const Navbar = () => {

    return (
        <header className='flex flex-col h-[70px] shadow-navy'>
            <nav className="w-full flex items-center px-5 py-5 md:px-10 md:py-5">
                <div className="mr-4 flex grow-0 items-center justify-between">
                    <a href="">
                        <img src="logo.png" alt="" className='w-12 md:w-14' />
                    </a>
                </div>
                <div className="hidden md:flex md:grow md:items-center md:justify-end">
                    <a href="/#about" className='cursor-pointer text-xl font-medium f mx-2 border-gray-100 hover:bg-gray-50 hover:bg-transparent hover:test-orange-700'>
                        <div className="flex font-mono text-[14px] px-2">
                            <p className="text-cyan">01.</p>
                            <p className="text-lslate pl-2 hover:text-cyan">About</p>
                        </div>
                    </a>
                    <a href="/#skills" className='cursor-pointer text-xl font-medium f mx-2 border-gray-100 hover:bg-gray-50 hover:bg-transparent hover:test-orange-700'>
                        <div className="flex font-mono text-[14px] px-2">
                            <p className="text-cyan">02.</p>
                            <p className="text-lslate pl-2 hover:text-cyan">Skills</p>
                        </div>
                    </a>
                    <a href="/#project" className='cursor-pointer text-xl font-medium f mx-2 border-gray-100 hover:bg-gray-50 hover:bg-transparent hover:test-orange-700'>
                        <div className="flex font-mono text-[14px] px-2">
                            <p className="text-cyan">03.</p>
                            <p className="text-lslate pl-2 hover:text-cyan">Projects</p>
                        </div>
                    </a>
                    <a href="/#contact" className='cursor-pointer text-xl font-medium f mx-2 border-gray-100 hover:bg-gray-50 hover:bg-transparent hover:test-orange-700'>
                        <div className="flex font-mono text-[14px] px-2">
                            <p className="text-cyan">04.</p>
                            <p className="text-lslate pl-2 hover:text-cyan">Contact</p>
                        </div>
                    </a>
                    <div className="mx-5"></div>
                    <a href="https://drive.google.com/file/d/1V9ZraLfsu_PGZyiVO_Ojw5klUhgvFAZA/view?usp=sharing" className='px-4 py-[8px] border border-cyan text-cyan-50 rounded-md font-mono hover-bg:[#64ffdb11]'>
                        <span>Resume</span>
                    </a>
                </div>
                <div className="flex grow transition-all justify-end md:hidden cursor-pointer false"><span className="material-symbols-outlined w-14">
                    menu
                </span></div>
            </nav>

            <div className=" hidden fixed top-0 right-0 z-10 p-10 w-3/4 h-screen bg-lnavy"><div className="w-full flex justify-end">
                <button type="button" className="w-6 flex items-center justify-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"><span className="sr-only">Close navigation</span><span className="material-symbols-outlined">
                    close
                </span></button>
            </div>
                <ul className="space-y-6 my-10 flex flex-col items-center md:hidden">
                    <a className="cursor-pointer text-xl font-medium mx-2 border-gray-100 hover:bg-gray-50 hover:bg-transparent hover:text-orange-700" href="/#about">
                        <div className="flex flex-col items-center font-mono text-[20px] py-2">
                            <p className="text-cyan">01. </p>
                            <p className="text-lslate hover:text-cyan">About</p>
                        </div>
                    </a>
                    <a className="cursor-pointer text-xl font-medium mx-2 border-gray-100 hover:bg-gray-50 hover:bg-transparent hover:text-orange-700" href="/#skills">
                        <div className="flex flex-col items-center font-mono text-[20px] py-2">
                            <p className="text-cyan">02. </p>
                            <p className="text-lslate hover:text-cyan">Skills</p>
                        </div>
                    </a>
                    <a className="cursor-pointer text-xl font-medium mx-2 border-gray-100 hover:bg-gray-50 hover:bg-transparent hover:text-orange-700" href="/#project">
                        <div className="flex flex-col items-center font-mono text-[20px] py-2">
                            <p className="text-cyan">03. </p>
                            <p className="text-lslate hover:text-cyan">Projects</p>
                        </div>
                    </a>
                    <a className="cursor-pointer text-xl font-medium mx-2 border-gray-100 hover:bg-gray-50 hover:bg-transparent hover:text-orange-700" href="/#contact">
                        <div className="flex flex-col items-center font-mono text-[20px] py-2">
                            <p className="text-cyan">04. </p>
                            <p className="text-lslate hover:text-cyan">Contact</p>
                        </div>
                    </a>
                </ul>
            </div>
        </header>
    )
}

export default Navbar
