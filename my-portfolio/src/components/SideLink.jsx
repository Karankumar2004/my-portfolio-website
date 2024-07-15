import React from 'react'

const SideLink = () => {
    return (
        <>
            <div className="hidden md:fixed md:bottom-0 md:left-10 md:flex md:flex-col md:items-center md:w-12">
                <div className="flex-1 my-4">
                    <a href="https://www.linkedin.com/in/karan899/">
                        <img src="data:image/png;base64,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" alt="" className='h-6 my-6 transition-on-transfrom duration-300 transform hover:-translate-y-1' />
                    </a>
                    <a href="https://github.com/Karankumar2004">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="" className='h-6 my-6 transition-on-transfrom duration-300 transform hover:-translate-y-1' />
                    </a>
                    <a href="https://leetcode.com/u/Karan_kumar12z/">
                        <img src="https://leetcode.com/_next/static/images/logo-dark-c96c407d175e36c81e236fcfdd682a0b.png" alt="" className='h-6 my-6 transition-on-transfrom duration-300 transform hover:-translate-y-1' />
                    </a>
                    <a href="https://www.codechef.com/users/karan_coder99">
                        <img src="https://cdn.codechef.com/images/cc-logo-mobile.svg" alt="" className='h-6 my-6 transition-on-transfrom duration-300 transform hover:-translate-y-1' />
                    </a>
                    <a href="https://x.com/Karan990kk">
                        <img src="data:image/png;base64,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" alt="" className='h-6 my-6 transition-on-transfrom duration-300 transform hover:-translate-y-1' />
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
