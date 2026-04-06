import React from 'react'
import './index.css'

const About = () => {
  return (
    <div>
<section
  id="about"
  className="py-24 max-w-5xl mx-auto px-6 bg-white/5 dark:bg-white/5 rounded-3xl backdrop-blur-md shadow-lg"
  data-aos="fade-up"
>
  <h3 className="text-4xl font-bold mb-8 text-center text-sky-400">
    About Me
  </h3>

  <p
    id="about-text"
    className="text-center leading-9 text-gray-300 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto"
    data-en="I’m a Frontend Developer with strong attention to detail and a passion for clean UI/UX. I enjoy turning ideas into real, interactive products and continuously improving my skills through hands-on projects."
    data-ar="أنا مطور واجهات أمامية أهتم بالتفاصيل وتجربة المستخدم، وأحب تحويل الأفكار إلى منتجات حقيقية تفاعلية مع التطوير المستمر لمهاراتي من خلال المشاريع العملية."
  >
    I’m a Frontend Developer with strong attention to detail...
  </p>
</section>
    </div>
  )
}

export default About