export default function Timeline() {
    const timelineData = [
      {
        title: "Social Launch & Community Building",
        description: "Launch social media presence on Twitter, Discord, and Instagram Build and engage with the OrangutanX community Share project updates, behind-the-scenes content, and sneak peeks",
        percentage: "90%",
      },
      {
        title: "Website Launch & OG Collection Free Mint",
        description: "Launch the official OrangutanX website Reward early adopters with a FREE MINT of the exclusive OG Collection Limited to the first [X] community members",
        percentage: "95%",
      },
      {
        title: "OrangutanX Token Campaign, Airdrop & NFT Apply",
        description: "Launch the OrangutanX token campaign Airdrop application goes live Orangutan NFT Apply Website goes live Token Launch: Officially launch the OrangutanX token",
        percentage: "80%",
      },
      {
        title: "OrangutanX NFT Collection Launch",
        description: "Official launch of the OrangutanX NFT Collection Hand-picked community members will be rewarded Mark the beginning of a new era for OrangutanX",
        percentage: "75%",
      },
    ];
  
    return (
      <section className="py-16 px-6 md:px-16 lg:px-24">
        <h2 className="righteous text-5xl md:text-5xl font-extrabold text-center mb-12 text-white">
          Orangutan Roadmap
        </h2>
        <div className="relative border-l-4 border-text mx-auto max-w-4xl">
          {timelineData.map((item, index) => (
            <div key={index} className="mb-10 ml-6 flex items-start relative">
              {/* Dot Connector */}
              <div className="absolute w-4 h-4 bg-text rounded-full -left-2.5 top-1"></div>
  
              {/* Card */}
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-full md:w-4/5">
                <p className="text-sm text-text font-semibold">PHASE {index + 1}</p>
                <h3 className="text-2xl font-bold mt-2">{item.title}</h3>
                <p className="text-gray-400 mt-2">{item.description}</p>
  
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  