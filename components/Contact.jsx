"use client";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen snap-start flex items-center justify-center px-4 bg-beige-200 relative overflow-hidden"
    >
      <div className="absolute top-20 right-20 w-96 h-96 bg-royal-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-royal-700/5 rounded-full blur-3xl animate-pulse delay-700" />

      <div className="max-w-2xl mx-auto w-full py-12 text-center relative z-10 fade-in-section">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">
          Get In <span className="text-blue-600">Touch</span>
        </h2>

        {/* 👇 Just white text, no background highlight */}
        <p className="text-white text-lg mb-8">
          I'm currently looking for opportunities! Feel free to reach out.
        </p>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
          <form
            className="space-y-4"
            action="https://formspree.io/your-endpoint"
            method="POST"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white transition"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white transition"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white transition"
              required
            />
            <button
              type="submit"
              className="w-full px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-lg hover:shadow-blue-500/25"
            >
              Send Message 📨
            </button>
          </form>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-8">
          <a
            href="https://github.com/EskyFlakes"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-full shadow-md hover:bg-blue-50 hover:scale-110 transition-all duration-300"
          >
            <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/aldrean-kent-agad-640149422/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-full shadow-md hover:bg-blue-50 hover:scale-110 transition-all duration-300"
          >
            <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>

          <a
            href="mailto:agad.kent25@gmail.com"
            className="p-3 bg-white rounded-full shadow-md hover:bg-blue-50 hover:scale-110 transition-all duration-300"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}