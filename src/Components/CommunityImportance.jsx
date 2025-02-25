import img from '../assets/images/NFT-6.jpeg';

export default function CommunityImportance() {
  return (
    <section className="py-12 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="text-sm text-text font-semibold">
            CULTURE AND POST MINT
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug mt-3 text-text">
            The Importance of Culture, Community, and Innovation in OrangutanX
          </h2>
          <p className="text- mt-4 text-base sm:text-lg">
            Culture – The foundation of identity and belonging. It shapes our values, vision, and the unique experience we create in the Web3 space.
          </p>
          <p className="text- mt-2 text-base sm:text-lg">
            Community – The heartbeat of OrangutanX. A strong, united community drives growth, trust, and long-term sustainability. Together, we build, support, and win.
          </p>
          <p className="text-whte mt-2 text-base sm:text-lg">
            Innovation – The key to progress. We embrace cutting-edge blockchain technology to provide fair, transparent, and rewarding experiences for everyone.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={img}
            alt="Degen Alpha Community"
            className="w-3/4 sm:w-2/3 md:w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
}
