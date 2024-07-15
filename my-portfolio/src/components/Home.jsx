import React from 'react'

const Home = () => {
    return (
        <div>
            <div id="home" className='md:px-16 lg:px-28 py-16'>
                <div className="my-4 lg:my-6">
                    <h1 className='text-md text-cyan mb-10'>Hi, my name is</h1>
                </div>
                <div className="my-4 lg:my-6">
                    <h2 className='text-gwhite text-4xl md:text-5xl lg:text-6xl font-bold font-inter'>Karan Kumar</h2>
                </div>
                <div className="my-4 lg:my-6">
                    <h3 className='big-heading text-4xl md:text-5xl lg:text-6xl font-bold text-lslate font-inter'> I code beautifully simple
                        things, and I love what I do /</h3>
                </div>
                <div className="my-4 lg:my-6">
                    <p className='w-full md:w-3/4 lg:w-1/2 text-lslate font-inter'>"I'm a fronted developer with a passion for problem-solving. Experienced in competitive programming and open-source contribution, I thrive on creating innovative solutions through code. "</p>
                </div>
                <div className="my-4 lg:my-6">
                    <div className="pt-12">
                        <a className="px-8 py-4 border border-cyan text-cyan rounded-md font-mono hover:bg-[#64ffdb11]" href="/#contact">
                            <span>Get In Touch</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* <div id="#project" className='flex-1  py-28 md:px-16 lg:py-32 ;g:px-32'>
                <div className="flex items-center">
                    <div className="flex items-center">
                        <p className="font-mono text-cyan text-xl mr-4">03.</p>
                        <p className="font-inter text-2xl lg:text-3xl font-bold text-llslate">Project Work</p>
                        <div className="h-0 lg:grow-0 lg:w-1/2 border-b-[1px] border-[#e6f1ff4a] ml-6"></div>
                    </div>
                </div>

                <div className="relative mt-10 lg:mt-20">
                    <div className="flex relative mb-10 shadow-md lg:shadow-none lg:mb-36">
                        <div className="hidden lg:block w-full lg:w-3/5 absolute lg:relative">

                        </div>
                        <div className="w-full h-full z-10 p-5 bg-[#64ffdb0] lg:bg-transparent rounded-md lg:p-0 lf:w-2/5 flex flex-col justify-start lg:items-end">
                            <div className="lg:hidden absolute h-full w-full opacity-5 top-0 left-0 z-0" >
                                <img src="SustainX.png" alt="" className='bg-cover bg-center bg-no-repeat' />
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <div id="project" className="flex-1 min-h-screen py-28 md:px-16 lg:py-32 lg:px-32">
                <div className="flex items-center">
                    <div className="flex items-center">
                        <p className="font-mono text-cyan text-xl mr-4">03.</p>
                        <p className="font-inter text-2xl lg:text-3xl font-bold text-llslate">Project Work</p>
                    </div>
                    <div className="h-0 grow lg:grow-0 lg:w-1/2 border-b-[1px] border-[#e6f1ff4a] ml-6"></div>
                </div>
                <div className="relative mt-10 lg:mt-20">
                    <div className="flex relative mb-10 shadow-md lg:shadow-none lg:mb-36">
                        <div className="hidden lg:block w-full lg:w-3/5 absolute lg:relative">
                            <img className="h-[360px] w-full" src="./crazycoder.jpg" />
                            <div className="absolute top-0 w-full h-[360px] bg-[#112240ea] lg:bg-[#64ffdb40] hover:bg-transparent">
                            </div>
                        </div>
                        <div className="w-full h-full z-10 p-5 bg-[#64ffdb0a] lg:bg-transparent rounded-md lg:p-0 lg:w-2/5 flex flex-col justify-start lg:items-end">
                            <div className="lg:hidden absolute h-full w-full opacity-5 top-0 left-0 z-0" style={{ backgroundImage: 'url("./SustainX.png")', backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat' }}>
                            </div>

                            <p className="text-cyan text-sm font-mono">Featured Project</p>
                            <a href="https://crazycoder-eight.vercel.app/" target="_blank" className="text-white text-[28px] font-bold font-inter cursor-pointer mb-5 hover:text-cyan z-10">CrazyCoder</a>
                            <div className="flex-box w-fit ">
                                <p className="lg:absolute lg:w-1/2 z-10 right-0 lg:text-right lg:bg-lnavy rounded-md text-llslate lg:text-slate text-sm lg:p-6">
                                    CrazyCoder helps programmers to improve problem-solving skills, manage coding platform profiles, prepare for interviews, and track progress. With over
                                    <span className="text-cyan under-line">2,000</span>
                                    users, it's a valuable resource for career advancement.
                                </p>
                            </div>
                            <div className="lg:absolute bottom-0">
                                <div className="flex flex-wrap lg:justify-end my-7 lg:my-4">
                                    <p className="pr-2 py-1 lg:px-2 text-llslate lg:text-slate text-xs">Javascript</p>
                                    <p className="pr-2 py-1 lg:px-2 text-llslate lg:text-slate text-xs">NodeJs</p>
                                    <p className="pr-2 py-1 lg:px-2 text-llslate lg:text-slate text-xs">ReactJs</p>
                                    <p className="pr-2 py-1 lg:px-2 text-llslate lg:text-slate text-xs">Kotlin</p>
                                    <p className="pr-2 py-1 lg:px-2 text-llslate lg:text-slate text-xs">Firebase</p>
                                </div>
                                <div className="flex lg:justify-end my-4">
                                    <a href="https://crazycoder-eight.vercel.app/" target="_blank" className="mx-2 lg:mx-2 z-10">
                                        <img className="h-6 lg:h-5" src="./external.svg" /></a>
                                    <a href="https://play.google.com/store/apps/details?id=com.parsanatech.crazycoder" target="_blank" className="mx-2 lg:mx-2 z-10">
                                        <img className="h-6 lg:h-5" src="./playstore.svg" /></a><a href="https://github.com/Yash-Parsana/CrazyCoderWebApp" target="_blank" className="mx-2 lg:mx-2 z-10">
                                        <img className="h-6 lg:h-5" src="./github.svg" /></a>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div >

    )
}

export default Home
