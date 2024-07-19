import React from "react";

const Home = () => {
  return (
    <div className='w-full h-[88%] bg-[url("/images/bg.png")] bg-center bg-contain px-[16.5rem] sm:px-3 sm:text-sm md:px-10'>
      <div className="h-full flex flex-col items-start gap-5 sm:gap-8 top-[30%] sm:top-[20%] absolute z-30 sm:text-center">
        <div>
          <p className="text-5xl sm:text-3xl">
            Empowering Lives Through <br/> Innovative <b className="underline underline-offset-4 decoration-button">AI</b> Technologies.
          </p>
        </div>
        <div>
          <p className="font-thin">
            Finding new horizons for visionaries to accelerate their innovations
            and progress.
          </p>
        </div>
        <div className="sm:w-full flex sm:flex-col justify-center items-start sm:items-center gap-5">
          <button className="bg-button px-6 py-2 rounded-lg">Explore Our Services</button>
          <button className="border border-button bg-transparent px-6 py-2 rounded-lg">Learn more</button>
        </div>
        <p className="bg-gradient-to-r from-transparent via-white to-transparent text-transparent bg-clip-text mt-10">
          From Ideas to Software Solutions 💡✨ From Ideas to Software Solutions 🌟✨ From Ideas to Software Solutions
        </p>
      </div>
    </div>
  );
};

export default Home;
