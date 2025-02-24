import img from '../assets/images/NFT-4.jpeg'

export default function AboutDegenAlpha() {
    return (
      <div className="py-16 px-6 sm:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          
          {/* Left Section - Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img 
              src={img}
              alt="Degen Alpha Character"
              className="w-72 sm:w-96 lg:w-full rounded-4xl"
            />
          </div>
  
          {/* Right Section - Text Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 righteous">About Orangutanx</h2>
            
            <p className="text-text text-sm sm:text-base font-semibold uppercase tracking-wide">
            Your Vision, Our Strategy
            </p>
            
            <h3 className="text-3xl sm:text-5xl font-bold leading-tight my-4">
            Turning your imagination into impact
            </h3>
            
            <p className="text-white text-sm sm:text-base">
            OrangutanX is more than a project—it’s a movement built on culture, community, and unity, powered by innovation on Solana. We believe in bringing people together through trust, transparency, and decentralized technology.

With NFT-driven experiences, automated rewards, and engaging utilities like SpinLoot, Trait Shop, and Jackpot, OrangutanX is redefining blockchain-powered entertainment.

This is where culture meets innovation—where Web3 isn’t just about technology, but about the people behind it.
            </p>
          </div>
  
        </div>
      </div>
    );
  }
  