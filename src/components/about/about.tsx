function About() {
  return (
    <>
      {/* Full background image section with intro */}
      <section
        className="relative w-full h-screen flex items-center justify-center overflow-hidden"
        id="about"
      >
        {/* Background image */}
        <img
          src="header-background.png"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        {/* Foreground content */}
        <div className="relative z-10 backdrop-blur-md bg-white/30 rounded-xl shadow-lg p-10 w-11/12 max-w-6xl mx-auto border border-white/40 px-8 md:px-16">
          <h1 className="text-3xl font-bold mb-4 text-gray-900">Hi, I'm Sahil Gupta</h1>
          <p className="text-lg text-gray-800">
            Senior Software Engineer with 10 years of experience building scalable backend systems, cloud-native applications, and full-stack solutions. Led critical initiatives at Adobe in localization, search optimization, and microservices orchestration, improving performance and engagement for millions of users globally. Strong expertise in Java, Spring Boot, React, Kafka, and cloud infrastructure.
          </p>
        </div>
      </section>
      {/* Profile and details card section below the image */}
      <section className="w-full flex justify-center bg-gray-900 py-16">
        <div className="flex flex-col md:flex-row items-center gap-10 bg-transparent w-11/12 max-w-6xl px-8 md:px-16">
          {/* Profile Image */}
          <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
            <img
              src="profilepic.png"
              alt="Profile"
              className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg"
            />
          </div>
          {/* Details */}
          <div className="flex-1 text-gray-100 bg-gray-900/80 rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-2 text-white">About me</h2>
            <p className="mb-6 text-gray-300">
              Senior Software Engineer with 10 years of experience building scalable backend systems, cloud-native applications, and full-stack solutions. Led critical initiatives at Adobe in localization, search optimization, and microservices orchestration, improving performance and engagement for millions of users globally. Strong expertise in Java, Spring Boot, React, Kafka, and cloud infrastructure.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-base">
              <div className="flex items-center gap-2">
                <span className="font-bold text-white">Name:</span>
                <span className="text-gray-300">Sahil Gupta</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-white">Title:</span>
                <span className="text-gray-300">Computer Scientist - I</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-white">Company:</span>
                <span className="text-gray-300">Adobe Systems, Noida</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-white">Email:</span>
                <span className="text-gray-300">sahil.india1993@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-white">LinkedIn:</span>
                <span className="text-gray-300">sahilgupta1993</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-white">Phone:</span>
                <span className="text-gray-300">+91-7503247437</span>
              </div>
              <div className="flex items-center gap-2 md:col-span-2">
                <span className="font-bold text-white">Expertise:</span>
                <span className="text-gray-300">Java, Spring Boot, React, Kafka, Cloud Infrastructure</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;

