export const Hero = () => {
  return (
    <section id="hero" className="mt-16">
      <h1 className="mx-auto px-4 w-full lg:w-4/5 text-4xl text-center md:text-5xl lg:text-6xl">
        Unleash your inner <span className="text-violet-400">gamer.</span>{" "}
      </h1>
      <p className="font-dbMono mx-auto mt-7 lg:mt-10 px-4 w-full lg:w-4/5 max-w-2xl text-lg lg:text-xl text-center">
        Discover, explore, conquer. Dig into{" "}
        <span className="text-violet-200">{"'RAWG'"}</span> vast game database
        and unlock <span className="text-pink-200">limitless adventures.</span>
        <br />
        The ultimate gaming companion is here.
      </p>
    </section>
  );
};
