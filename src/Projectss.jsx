import React from 'react'
import {  phone , cars , learing , hode,gym } from './assets/img'
import './index.css'

const Projectss = () => {
  return (
    <div>

<div id="projectss" className="py-20 max-w-6xl mx-auto px-6">
  <h3 className="text-3xl font-bold mb-12 text-center" data-en="Projects" data-ar="المشاريع">Projects</h3>
  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

    <div className="project-card" data-aos="zoom-in">
      <img src={gym} alt="Game Project"/>
      <div className="p-5">
        <h4>gym Project</h4>
        <p>Interactive game using JS and HTML/CSS.</p>
        <div>
          <a href="https://form-u8pa.vercel.app" target="_blank">Live</a>
        </div>
      </div>
    </div>

    <div className="project-card" data-aos="zoom-in">
      <img src={learing} alt="Learning Project"/>
      <div className="p-5">
        <h4>منصه Project</h4>
        <p>Learning platform project.</p>
        <div>
          <a href="https://learing-livid.vercel.app" target="_blank" className='bg-sky-500'>Live</a>
        </div>
      </div>
    </div>

    <div className="project-card" data-aos="zoom-in">
      <img src={phone} alt="Portfolio Project"/>
      <div className="p-5">
        <h4>Portfolio Project</h4>
        <p>Previous portfolio project.</p>
        <div>
          <a href="https://tarekameramer.github.io/mohsen1Abdul-Moneim/" target="_blank">Live</a>
        </div>
      </div>
    </div>

    <div className="project-card" data-aos="zoom-in">
      <img src={cars} alt="Fourth Project"/>
      <div className="p-5">
        <h4>Fourth Project</h4>
        <p>Latest web project.</p>
        <div>
<a href="https://123-brown-rho.vercel.app" target="_blank" rel="noreferrer">
  Live
</a>        </div>
      </div>
    </div>

    <div className="project-card" data-aos="zoom-in">
      <img src={hode} alt="Fourth Project"/>
      <div className="p-5">
        <h4>Fourth Project</h4>
        <p>Latest web project.</p>
        <div>
          <a href="nova/Home.html" target="_blank">Live</a>
        </div>
      </div>
    </div>


  </div>
</div>

    </div>
  )
}

export default Projectss