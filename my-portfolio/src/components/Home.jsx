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
                        things, and I love what I do.</h3>
                </div>
                <div className="my-4 lg:my-6">
                    <p className='w-full md:w-3/4 lg:w-1/2 text-lslate font-inter'>"I'm a fronted developer with a passion for problem-solving. Experienced in competitive programming and open-source contribution, I thrive on creating innovative solutions through code."</p>
                </div>
                <div className="my-4 lg:my-6">
                    <div className="pt-12">
                        <a className="px-8 py-4 border border-cyan text-cyan rounded-md font-mono hover:bg-[#64ffdb11]" href="/#contact">
                            <span>Get In Touch</span>
                        </a>
                    </div>
                </div>
            </div>


        </div >

    )
}

export default Home
