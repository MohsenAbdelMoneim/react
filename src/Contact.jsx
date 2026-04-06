import React from 'react'

const Contact = () => {
  return (
    <div>




<section
  id="contact"
  className="py-24 bg-gray-950 text-white"
>
  <div className="max-w-4xl mx-auto px-6">

    <h3 className="text-4xl font-bold mb-10 text-center text-sky-400">
      Contact Me
    </h3>

    <form className="grid gap-5 bg-white/5 p-8 rounded-2xl backdrop-blur-md shadow-lg">

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="p-3 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-sky-500"
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        className="p-3 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-sky-500"
      />

      <textarea
        name="message"
        placeholder="Your Message"
        required
        rows="5"
        className="p-3 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-sky-500"
      ></textarea>

      <button
        className="bg-sky-600 py-3 rounded-lg font-bold hover:bg-sky-500 transition duration-300"
      >
        Send Message
      </button>

    </form>

    {/* Info */}
    <p className="mt-8 text-gray-400 text-center">
      📍 Cairo, Egypt | 📞 01096295395 | 📧 mt9276404@gmail.com
    </p>

    <p className="mt-2 text-gray-600 text-center text-sm">
      © 2026 Mohsen Abdel Moneim
    </p>

  </div>
</section>




    </div>
  )
}

export default Contact