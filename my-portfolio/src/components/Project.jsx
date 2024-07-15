import React from 'react'

import SustainX from './../assets/SustainX.svg'
const Project = () => {
    return (
        <div>
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
                            <img className="h-[360px] w-full" src={SustainX} />
                            <div className="absolute top-0 w-full h-[360px] bg-[#112240ea] lg:bg-[#64ffdb40] hover:bg-transparent">
                            </div>
                        </div>
                        <div className="w-full h-full z-10 p-5 bg-[#64ffdb0a] lg:bg-transparent rounded-md lg:p-0 lg:w-2/5 flex flex-col justify-start lg:items-end">
                            <div className="lg:hidden absolute h-full w-full opacity-5 top-0 left-0 z-0" >
                            </div>

                            <p className="text-cyan text-sm font-mono">Featured Project</p>
                            <a href="https://github.com/Karankumar2004/SustainX" target="_blank" className="text-white text-[28px] font-bold font-inter cursor-pointer mb-5 hover:text-cyan z-10">SustainX</a>
                            <div className="flex-box w-fit ">
                                <p className="lg:absolute lg:w-1/2 z-10 right-0 lg:text-right lg:bg-white rounded-md text-llslate lg:text-slate text-sm lg:p-6">
                                    The aim of SustainX is to facilitate community-driven initiatives for planting trees and other sustainable activities to help save the environment.
                                    <span className="text-cyan under-line">2,000</span>
                                    users.
                                </p>
                            </div>
                            <div className="lg:absolute bottom-0">
                                <div className="flex flex-wrap lg:justify-end my-7 lg:my-4">
                                    <p className="pr-2 py-1 lg:px-2 text-llslate lg:text-slate text-xs">Javascript</p>
                                    <p className="pr-2 py-1 lg:px-2 text-llslate lg:text-slate text-xs">NodeJs</p>
                                    <p className="pr-2 py-1 lg:px-2 text-llslate lg:text-slate text-xs">ReactJs</p>
                                    <p className="pr-2 py-1 lg:px-2 text-llslate lg:text-slate text-xs">Firebase</p>
                                </div>
                                <div className="flex lg:justify-end my-4">
                                    <a href="https://github.com/Karankumar2004/SustainX" target="_blank" className="mx-2 lg:mx-2 z-10">
                                        <img className="h-6 lg:h-5" src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" /></a>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

            <div className="min-h-screen md:px-16 lg:px-32 flex flex-col items-center font-inter">
                <p className="text-llslate w-fit text-2xl md:text-2xl lg:text-4xl font-bold">Other Projects</p>
                <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 lg:mt-20">
                    <div className="flex-1 min-h-[300px] w-full px-6 py-8 rounded-md on-hover-up cursor-pointer bg-white">
                        <div className="flex items-center">
                            <img className="h-10" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALkAAACUCAMAAAD4QXiGAAAAnFBMVEX/yij/////oAD/z0H/ngD/5Kr/xxP/rxT/qiX/yCr/nAD/xgD/zCn/yBv/69L//vr/lgD/0Ez/78n/8OL/rTX/8Nv/8+H/yjL/2G//4pv/2Xb/67v/+ej/9t3/89b/8c//4Lr/zJP/vGb/s0b/+O3/0p//qT3/pBz/27D/qC3/tV3/y4z/t1b/vUf/pxD/txn/3Iv/wCH/1GP/vi+vqAx+AAACkUlEQVR4nO3d23LaMBSF4S1bCLBQjR3Op7QpJNADIfT93602ToBMkgtss8Se2f8TfKNZYpwbhdRZy7vvPx5+9lqX1Pum/ERn7tWD7kZRpC8q2niin+SrxygKSqSfBl7l/V5Xl3Ef6F5O/VW+bpU671e6l60X8nVU9sALeuBhMFQD3M9gcnl/UxHuZTC5vFdh46dTRw8mk6+61eEZHf27Tmr5WHkrBb3XB8tXNWyloD9B6bT8VZccfE3prjZ4vnXgNaV1LffzjQ4cDP2u8cyhg6E/tcqDaLNEyVvvfxMv+zj/7HsdNZh3ch3p7bZZtb+NKzRN5/GXch1tn9vtNlXNmSvkhmEySj+V66BJnU6nsvuKOWsbsw/yqPly2+wim0zfy3XwzICd59wuPpPr4IUJnPJjnx3lWjOCZ/T98njmrOBEZhIXcs1l48fsrpBvucEz+iCXR8y2kuf2ubzJD56VZnJ2K88zu0xe/UPFR8MZ8RwL2ZT+MZU3uMrdnnjOPBs6W3lb5PBEjk/k+ESOT+T4RI5P5PhEjk/k+NrZ33M8G1Lom1CyUOTwRI5P5PhEjk/k+ESOT+T4RI5P5PhEjk/k+ESOT+T4RI5P5PhEjk/k+ESOT+T4RI5P5PhEjk/k+ESOT+T4RI5P5PhEjk/k+ESOT+T4RI5P5PhEjk/k+ESOT+T4+MoTGjnfhlK5EY2Nb0SpzJhS6xtRKpvSwLehZDOKJxznYiYxqSnHK+qmilSc8KO7JM7fnGd4R21avPPPbulmogr5jNle3OH11sP/s5iHnOgunKs3uVqEfAZjwoU6ydUi4XJNbbJQ53KldsTh2A3tju9CH9+2vp+YWz93ayb36qNcxfPx0JpbvavO2HB8/nr7f1OPNF2O3Zm6AAAAAElFTkSuQmCC" />
                            <div className="grow flex items-center justify-end">
                                <a href="https://github.com/Karankumar2004/EHR-Electronic-Health-Record" target="_blank" className="px-2">
                                    <img className="h-6" src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" />
                                </a>
                            </div>
                        </div>
                        <a href="" target="_blank">
                            <p className="text-llslate text-xl my-6 font-bold hover:text-cyan cursor-pointer">

                                EHR</p>
                        </a>
                        <p className="text-[14px] text-lslate"><span className='font-bold'>Electronic Health Record</span> Securely store patient records and collaborate seamlessly with healthcare professionals. Enhance patient care with intuitive tools accessible anytime, anywhere.</p>
                        <div className="flex mt-5">
                            <p className="text-sm text-slate pr-4 font-mono">Bootstrap Studio</p>
                            <p className="text-sm text-slate pr-4 font-mono">HTML</p>
                        </div>
                    </div>
                    <div className="flex-1 min-h-[300px] bg-lnavy px-6 py-8 rounded-md on-hover-up cursor-pointer bg-white">
                        <div className="flex items-center">
                            <img className="h-10" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALkAAACUCAMAAAD4QXiGAAAAnFBMVEX/yij/////oAD/z0H/ngD/5Kr/xxP/rxT/qiX/yCr/nAD/xgD/zCn/yBv/69L//vr/lgD/0Ez/78n/8OL/rTX/8Nv/8+H/yjL/2G//4pv/2Xb/67v/+ej/9t3/89b/8c//4Lr/zJP/vGb/s0b/+O3/0p//qT3/pBz/27D/qC3/tV3/y4z/t1b/vUf/pxD/txn/3Iv/wCH/1GP/vi+vqAx+AAACkUlEQVR4nO3d23LaMBSF4S1bCLBQjR3Op7QpJNADIfT93602ToBMkgtss8Se2f8TfKNZYpwbhdRZy7vvPx5+9lqX1Pum/ERn7tWD7kZRpC8q2niin+SrxygKSqSfBl7l/V5Xl3Ef6F5O/VW+bpU671e6l60X8nVU9sALeuBhMFQD3M9gcnl/UxHuZTC5vFdh46dTRw8mk6+61eEZHf27Tmr5WHkrBb3XB8tXNWyloD9B6bT8VZccfE3prjZ4vnXgNaV1LffzjQ4cDP2u8cyhg6E/tcqDaLNEyVvvfxMv+zj/7HsdNZh3ch3p7bZZtb+NKzRN5/GXch1tn9vtNlXNmSvkhmEySj+V66BJnU6nsvuKOWsbsw/yqPly2+wim0zfy3XwzICd59wuPpPr4IUJnPJjnx3lWjOCZ/T98njmrOBEZhIXcs1l48fsrpBvucEz+iCXR8y2kuf2ubzJD56VZnJ2K88zu0xe/UPFR8MZ8RwL2ZT+MZU3uMrdnnjOPBs6W3lb5PBEjk/k+ESOT+T4RI5P5PhEjk/k+NrZ33M8G1Lom1CyUOTwRI5P5PhEjk/k+ESOT+T4RI5P5PhEjk/k+ESOT+T4RI5P5PhEjk/k+ESOT+T4RI5P5PhEjk/k+ESOT+T4RI5P5PhEjk/k+ESOT+T4RI5P5PhEjk/k+ESOT+T4+MoTGjnfhlK5EY2Nb0SpzJhS6xtRKpvSwLehZDOKJxznYiYxqSnHK+qmilSc8KO7JM7fnGd4R21avPPPbulmogr5jNle3OH11sP/s5iHnOgunKs3uVqEfAZjwoU6ydUi4XJNbbJQ53KldsTh2A3tju9CH9+2vp+YWz93ayb36qNcxfPx0JpbvavO2HB8/nr7f1OPNF2O3Zm6AAAAAElFTkSuQmCC" />
                            <div className="grow flex items-center justify-end">
                                <a href="https://github.com/Karankumar2004/Duty-Do" target="_blank" className="px-2">
                                    <img className="h-6" src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" />
                                </a>
                            </div>
                        </div>
                        <a href="" target="_blank">
                            <p className="text-llslate text-xl my-6 font-bold hover:text-cyan cursor-pointer">
                                Duty-Do</p>
                        </a>
                        <p className="text-[14px] text-lslate">Manage tasks efficiently with this intuitive todo list application. Organize your day, set priorities, and track progress seamlessly. Stay productive with easy task management wherever you go.</p>
                        <div className="flex mt-5">
                            <p className="text-sm text-slate pr-4 font-mono">React</p>
                            <p className="text-sm text-slate pr-4 font-mono">Tailwind CSS</p>
                        </div>
                    </div>

                    <div className="flex-1 min-h-[300px] bg-lnavy px-6 py-8 rounded-md on-hover-up cursor-pointer bg-white">
                        <div className="flex items-center">
                            <img className="h-10" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALkAAACUCAMAAAD4QXiGAAAAnFBMVEX/yij/////oAD/z0H/ngD/5Kr/xxP/rxT/qiX/yCr/nAD/xgD/zCn/yBv/69L//vr/lgD/0Ez/78n/8OL/rTX/8Nv/8+H/yjL/2G//4pv/2Xb/67v/+ej/9t3/89b/8c//4Lr/zJP/vGb/s0b/+O3/0p//qT3/pBz/27D/qC3/tV3/y4z/t1b/vUf/pxD/txn/3Iv/wCH/1GP/vi+vqAx+AAACkUlEQVR4nO3d23LaMBSF4S1bCLBQjR3Op7QpJNADIfT93602ToBMkgtss8Se2f8TfKNZYpwbhdRZy7vvPx5+9lqX1Pum/ERn7tWD7kZRpC8q2niin+SrxygKSqSfBl7l/V5Xl3Ef6F5O/VW+bpU671e6l60X8nVU9sALeuBhMFQD3M9gcnl/UxHuZTC5vFdh46dTRw8mk6+61eEZHf27Tmr5WHkrBb3XB8tXNWyloD9B6bT8VZccfE3prjZ4vnXgNaV1LffzjQ4cDP2u8cyhg6E/tcqDaLNEyVvvfxMv+zj/7HsdNZh3ch3p7bZZtb+NKzRN5/GXch1tn9vtNlXNmSvkhmEySj+V66BJnU6nsvuKOWsbsw/yqPly2+wim0zfy3XwzICd59wuPpPr4IUJnPJjnx3lWjOCZ/T98njmrOBEZhIXcs1l48fsrpBvucEz+iCXR8y2kuf2ubzJD56VZnJ2K88zu0xe/UPFR8MZ8RwL2ZT+MZU3uMrdnnjOPBs6W3lb5PBEjk/k+ESOT+T4RI5P5PhEjk/k+NrZ33M8G1Lom1CyUOTwRI5P5PhEjk/k+ESOT+T4RI5P5PhEjk/k+ESOT+T4RI5P5PhEjk/k+ESOT+T4RI5P5PhEjk/k+ESOT+T4RI5P5PhEjk/k+ESOT+T4RI5P5PhEjk/k+ESOT+T4+MoTGjnfhlK5EY2Nb0SpzJhS6xtRKpvSwLehZDOKJxznYiYxqSnHK+qmilSc8KO7JM7fnGd4R21avPPPbulmogr5jNle3OH11sP/s5iHnOgunKs3uVqEfAZjwoU6ydUi4XJNbbJQ53KldsTh2A3tju9CH9+2vp+YWz93ayb36qNcxfPx0JpbvavO2HB8/nr7f1OPNF2O3Zm6AAAAAElFTkSuQmCC" />
                            <div className="grow flex items-center justify-end">
                                <a href="https://github.com/Karankumar2004/Twitter-X.com-clone" target="_blank" className="px-2">
                                    <img className="h-6" src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" />
                                </a>
                            </div>
                        </div>
                        <a href="" target="_blank">
                            <p className="text-llslate text-xl my-6 font-bold hover:text-cyan cursor-pointer">

                                Twitter Clone</p>
                        </a>
                        <p className="text-[14px] text-lslate">In my early programming days, I created a YouTube clone without using any front-end framework.</p>
                        <div className="flex mt-5">
                            <p className="text-sm text-slate pr-4 font-mono">Tailwind CSS</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project
