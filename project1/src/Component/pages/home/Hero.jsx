import React from "react";

function Hero() {
  return (
    <div className="relative h-[90vh] mt-24 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 overflow-hidden rounded-3xl">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 rounded-3xl overflow-hidden mx-[4vw]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/Vid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent"></div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col justify-center h-full gap-6 sm:gap-8 px-2 sm:px-6 md:px-16 lg:px-20">
        <h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold drop-shadow-md">
          Order Your
        </h1>

        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-gradient-to-r from-yellow-300 to-orange-500 bg-clip-text drop-shadow-md">
          favorite food here
        </h2>

        <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-medium max-w-full sm:max-w-[90%] md:max-w-[80%] lg:max-w-[60%] drop-shadow-lg">
          Discover fresh, delicious meals and ingredients delivered right to
          your door. From farm-fresh produce to ready-to-eat favorites, we make
          shopping for food easy, fast, and affordable. Enjoy the taste of
          quality with every bite!
        </p>

        <button className="w-fit bg-orange-500 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition duration-300">
          View Menu
        </button>
      </div>
    </div>
  );
}

export default Hero;
