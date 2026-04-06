import React from 'react'

const Skills = () => {
  return (
    <div>
<section
  id="skills"
  className="py-24 bg-gray-950 text-white"
  data-aos="fade-up"
>
  <div className="max-w-6xl mx-auto px-6">
    
    <h3 className="text-4xl font-bold mb-12 text-center text-sky-400">
      Skills
    </h3>

    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

      <div className="skill-card">HTML / CSS / JavaScript</div>
      <div className="skill-card">Tailwind / Bootstrap</div>
      <div className="skill-card">React (Learning)</div>
      <div className="skill-card">UI / UX Design</div>
      <div className="skill-card">Figma / Adobe XD</div>
      <div className="skill-card">Media Buying</div>

    </div>
  </div>
</section>


    </div>
  )
}

export default Skills