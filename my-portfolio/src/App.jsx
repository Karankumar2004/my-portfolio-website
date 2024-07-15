import React from 'react'
import Navbar from './components/Navbar'
import SideLink from './components/SideLink'
import Home from './components/Home'


const App = () => {
  return (
    <div className='flex flex-col min-h-screen px font-mono'>
      <Navbar />
      <SideLink />
      <div className="px-[25px] md:px-[80px] lg:px-[150px] w-full min-h-screen">
        <Home />
        {/* <About />
        <Skills />
        <Project />
        <Contact /> */}
      </div>
    </div>
  )
}

export default App
