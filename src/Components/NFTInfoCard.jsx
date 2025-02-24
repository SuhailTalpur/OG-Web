export default function NFTInfoCard() {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen relative px-6">
        {/* Main Container */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center max-w-4xl w-full">
          
          {/* Left Section */}
          <div>
            <h2 className="text-6xl sm:text-7xl font-bold text-text">333</h2>
            <p className="text-white text-sm sm:text-base">OG supply</p>
          </div>
  
          {/* Center Section */}
          <div>
            <h2 className="text-6xl sm:text-7xl font-bold text-text">Free</h2>
            <p className="text-white text-sm sm:text-base">price</p>
          </div>
  
          {/* Right Section */}
          <div>
            <h2 className="text-6xl sm:text-7xl font-bold text-text">Solana</h2>
            <p className="text-white text-sm sm:text-base">chain</p>
          </div>
        </div>
  
        {/* Decorative Elements */}
        <div className="absolute top-10 hidden sm:block">
          <svg width="50" height="10">
            <polyline points="0,10 10,0 20,10 30,0 40,10" stroke="orange" strokeWidth="2" fill="none" />
          </svg>
        </div>
  
        <div className="absolute bottom-10 hidden sm:block">
          <svg width="50" height="10">
            <polyline points="0,10 10,0 20,10 30,0 40,10" stroke="orange" strokeWidth="2" fill="none" />
          </svg>
        </div>
      </div>
    );
  }
  