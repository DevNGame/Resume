function Contact() {
  return (
    <section id="contact" className="w-full flex flex-col items-center justify-center py-20 bg-gray-900/80">
      <h2 className="text-3xl font-bold mb-8 text-gray-100">Contact Me</h2>
      <div className="flex gap-10">
        {/* GitHub */}
        <a
          href="https://github.com/devngame"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-100 hover:text-orange-500 transition-colors duration-200"
          aria-label="GitHub"
        >
          <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.847-2.338 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.579.688.481C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
          </svg>
        </a>
        {/* Instagram */}
        <a
          href="https://instagram.com/ssharkist"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-100 hover:text-pink-500 transition-colors duration-200"
          aria-label="Instagram"
        >
          <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 2.25a6.25 6.25 0 1 1-6.25 6.25 6.25 6.25 0 0 1 6.25-6.25zm0 1.5a4.75 4.75 0 1 0 4.75 4.75A4.75 4.75 0 0 0 12 5.25zm6.5 1.25a1.25 1.25 0 1 1-1.25 1.25A1.25 1.25 0 0 1 18.5 6.5z" />
          </svg>
        </a>
        {/* Phone */}
        <a
          href="tel:+91 7503247437"
          className="text-gray-100 hover:text-green-500 transition-colors duration-200"
          aria-label="Phone"
        >
          <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1.003 1.003 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.07 21 3 13.93 3 5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.46.57 3.58.13.33.05.71-.24 1.01l-2.2 2.2z" />
          </svg>
        </a>
      </div>
    </section>
  );
}

export default Contact;
