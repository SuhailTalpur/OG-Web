import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function FAQ() {
  const faqs = [
    {
      question: "What is the Difference Between OrangutanX OG and OrangutanX?",
      answer: "OrangutanX OG 🦧 – A 333-supply collection exclusively rewarded to early adopters who supported the OrangutanX vision from the start OrangutanX 🌍 – A broader collection where community members are handpicked, focusing on creators, developers, entrepreneurs, athletes, artists, experimenters, and innovators who contribute to the ecosystem Both collections embody culture, community, and innovation, shaping the future of OrangutanX. 🚀",
    },
    {
      question: "What Are the Holder Benefits for OrangutanX?",
      answer: "Passive Income Opportunities 💰 – The team has planned a sustainable 3-year model where holders can earn passive income by holding OrangutanX. Exclusive Access 🔑 – Priority in future drops, rewards, and ecosystem benefits. Core Community Role 🏆 – Holders are at the heart of OrangutanX, shaping its direction and growth. Holding OrangutanX isn’t just about owning an NFT—it’s about being part of an innovative, sustainable future. 🚀",
    },
    {
      question: "Why Does OrangutanX Have a 33% Royalty?",
      answer: "OrangutanX royalties from secondary sales are set at 33% to ensure long-term growth and sustainability. These funds will be used for: Developing New Tools 🔧 – Expanding the ecosystem with innovative utilities. Rewarding the Community 🎁 – Giving back to dedicated holders and supporters. Scaling OrangutanX 🌍 – Growing the brand, partnerships, and opportunities. This model ensures OrangutanX continues to evolve, innovate, and deliver value to the community.",
    },
    {
      question: "Why Did OrangutanX Launch Both Collections as Free Mint?",
      answer: "The team chose free mint because OrangutanX is built for diamond hands, not flippers. Our goal is to handpick the OGs of the ecosystem—those who truly believe in the vision and are committed to building together. OrangutanX is founded on community, culture, and unity. By launching as a free mint, we ensure that the right people—creators, innovators, and visionaries—become part of a long-lasting and sustainable ecosystem.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-6 md:px-16 lg:px-24">
      <h2 className="text-5xl text-text md:text-6xl font-extrabold text-center mb-10">FAQ</h2>

      <div className="max-w-2xl mx-auto p-6 rounded-lg shadow-lg">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-700 last:border-none">
            <button
              className="w-full text-left py-4 flex justify-between items-center text-lg font-semibold"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              {openIndex === index ? <FiChevronUp /> : <FiChevronDown />}
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-40 opacity-100 py-2" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-white">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
