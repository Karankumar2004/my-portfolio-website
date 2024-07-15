import React from 'react'

const SideLink = () => {
    return (
        <>
            <div className="hidden md:fixed md:bottom-0 md:left-10 md:flex md:flex-col md:items-center md:w-12">
                <div className="flex-1 my-4">
                    <a href="https://www.linkedin.com/in/karan899/">
                        <img src="Linkdin.png" alt="" className='h-6 my-6 transition-on-transfrom duration-300 transform hover:-translate-y-1' />
                    </a>
                    <a href="https://github.com/Karankumar2004">
                        <img src="github.png" alt="" className='h-6 my-6 transition-on-transfrom duration-300 transform hover:-translate-y-1' />
                    </a>
                    <a href="https://leetcode.com/u/Karan_kumar12z/">
                        <img src="leetcode.png" alt="" className='h-6 my-6 transition-on-transfrom duration-300 transform hover:-translate-y-1' />
                    </a>
                    <a href="https://www.codechef.com/users/karan_coder99">
                        <img src="codechef.png" alt="" className='h-6 my-6 transition-on-transfrom duration-300 transform hover:-translate-y-1' />
                    </a>
                    <a href="https://x.com/Karan990kk">
                        <img src="x.png" alt="" className='h-6 my-6 transition-on-transfrom duration-300 transform hover:-translate-y-1' />
                    </a>
                </div>
                <div className="w-0 h-20 border border-lslate"></div>
            </div>

            <div className="hidden md:fixed bottom-0 right-10 md:flex flex-col items-center w-10">
                <button data-tooltip-target="tooltip-left" data-tooltip-placement="left" type="button" className='[writing-mode:vertical-lr] ms-3 mb-2 md:mb-0 text-lslate hover:text-cyan text-lg px-5 py-2.5 text-center transition-transform duration-300 transform hover:-translate-y-1'>
                    kk8594879@gmail.com
                </button>
                {/* <div id="tooltip-left" role="tooltip" className='absolute w-[138px] z-10 inline-block px-3 py-2 text-sm font-medium text-black bg-cyan rounded-md shadow-sm tooltip opacity-0 invisible' data-popper-placement="left" style="position: absolute; inset: 0px 0px auto auto; margin: 0px; transform:translate3d(-65.7778px,130.667px, 0px);">"Click to copy"
                    <div className="tooltip-arrow" data-popper-arrow="true" style="position: absolute; top:0px; transform: translate3d(0px,14.2222px,0px);">
                        ::before
                        ::after
                    </div>
                </div> */}
                <div className="w-0 h-20 mt-10 border border-lslate"></div>
            </div>
        </>
    )
}

export default SideLink
