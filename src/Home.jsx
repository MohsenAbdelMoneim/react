import React from 'react'
import { mohsen } from './assets/img'
const Home = () => {
  return (
    <div>
<div id="eng-tag" className="fixed bottom-10 left-10 z-50 flex flex-col items-center cursor-pointer ">
  <div id="top-line" className="w-20 h-1 mb-1 rounded animate-pulse bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-500"></div>
  
  <span id="eng-typing" className="bg-indigo-600 text-white px-4 py-2 rounded-full shadow-lg text-lg font-semibold">
    I’m Frontend Mohsen
  </span>
  
  <div id="bottom-line" className="w-20 h-1 mt-1 rounded animate-pulse bg-gradient-to-r from-yellow-500 via-pink-500 to-indigo-500"></div>
</div>


<div className="py-20 max-w-6xl mx-auto px-6" id="home" data-en="Home" data-ar="الصفحة الرئيسية0" data-aos="fade-up">
  <div className="text-center">
    <div className="relative w-48 h-48 mx-auto mb-6">
      <div className="absolute inset-0 bg-indigo-500 blur-2xl opacity-40 rounded-full animate-pulse">

      </div>
        <img src={mohsen} alt="Mohsen" className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-lg" />
       </div>
    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
      <span id="name-typing"></span>
    </h2>

    <p className="text-indigo-500 font-semibold mb-6 text-lg md:text-xl lg:text-2xl"
       data-en="I build clean, responsive, and user-friendly web interfaces."
       data-ar="أقوم ببناء واجهات ويب نظيفة، سريعة، ومتجاوبة.">
      I build clean, responsive, and user-friendly web interfaces.
    </p>

    <div className="flex justify-center gap-4">
      <a href="#contact" className="px-6 py-3 bg-indigo-600 text-white rounded-full hover:scale-105 transition">
       CONTACT Me
      </a>
      <a href="./cv.pdf " className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-full hover:bg-indigo-600 hover:text-white transition">
        Download CV
      </a>
    </div>
  </div>
</div>

    </div>
  )
}

export default Home