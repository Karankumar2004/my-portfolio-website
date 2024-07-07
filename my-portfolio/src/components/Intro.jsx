import React from 'react'

const Intro = () => {
    return (
        <main className="min-h-screen flex xl:pt-0 pt-36 bg-[#f0ebe3] dark:bg-[#1f2937]" id="Home">
            <div className="xl:flex items-center container max-w-[1300px] mx-auto lg:px-3">
                <section className="xl:w-1/2 xl:text-left text-center">
                    <p className="text-[15px] font-bold">
                        HELLO <span className="text-[#29a587]">MY NAME IS</span>
                    </p>
                    <h1 className="xl:text-[90px] text-[64px] m-0 sm:py-0 py-4 text-[#29a587] textShadow">
                        KARAN <span className="text-white">KUMAR</span>
                    </h1>
                    <p className="text-[15px] font-bold">
                        I AM <span className="caveat text-3xl pl-2">React Developer</span>
                    </p>
                    <span className="xl:block hidden">
                        <p className="text-lg pt-4 pb-4 text-[#262626] dark:text-white lg:w-4/5">I'm a Web developer with a passion for problem-solving.
                            Experienced in competitive programming and open-source
                            contribution, I thrive on creating innovative solutions through code.
                        </p>
                        <div className="flex items-center w-fit text-[13px] font-bold pt-4">
                            <span className="block rounded-full h-14 border border-black border-soild shadowbtn">
                                <button className="bg-transparent dark:text-white h-full font-bold px-10 rounded-full hover:border-2 border soild hover:bg-[#29a587] hover:text-white hover:border-white">
                                    DOWNLOAD CV</button>
                            </span>
                            <hr className="w-10 h-[3px] bg-black mr-6" />
                            <p>MY SKILLS</p>
                        </div>
                    </span>
                </section>
                <section>
                    <div className="w-full sm:h-[680px] h-96 relative xl:block flex justify-center xl:mt-0 mt-16">
                        <img src="/Profile_Img.jpg" alt="" className="absolute z-10 lg:w-auto w-[340px]" />


                        <div className="absolute z-10 lg:bottom-24 bottom-20 xl:-left-10 lg:left-40 left-0">
                            <div className="block rounded-full sm:h-10 h-14 w-fit shadowbtn relative z-10">
                                <button className="h-full sm:px-6 px-3 border border-black border-solid rounded-full lg:text-[37px] text-[13px] font-bold flex items-center justify-between gap-x-3 relative bg-[#fefdfc] z-10">
                                    250 <strong className="text-[#29a587] text-[37px]">+</strong>
                                    <span className="text-[13px] flex flex-col items-start leading-tight">Questions</span>
                                    <strong className="text-[#29a587]">Solved</strong>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Intro
