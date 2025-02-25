import React from 'react';
import { FaUsers, FaHandHoldingUsd, FaRegLightbulb } from "react-icons/fa";
import { MdGroups } from "react-icons/md";

const features = [
  {
    icon: <FaUsers size={30} />,
    title: "Well known team",
    description:
      "Degen Alpha's team is well known in the space and way more connected to top tier projects than the average Collab and partnership managers.",
  },
  {
    icon: <MdGroups size={30} />,
    title: "Established community",
    description:
      "Degen Alpha is not just a marketing service provider; it's one of the biggest Ethereum DAO and has more than 40k followers across all social media.",
  },
  {
    icon: <FaHandHoldingUsd size={30} />,
    title: "Flexible and affordable rate",
    description:
      "We understand the fact that the marketing budget of many projects is not big; therefore, we offer our service at a flexible and affordable rate according to the needs of clients.",
  },
  {
    icon: <FaRegLightbulb size={30} />,
    title: "FREE advisory",
    description:
      "Although there are many good builders out there, they may not know about market conditions and trends. That’s why we offer our consulting and advisory for Free to our clients to ensure their project is successful.",
  },
];

const Cards = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-7xl font-bold mb-10 righteous">Why Choose Us</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-100 p-6 rounded-2xl flex flex-col items-center gap-4 shadow-md"
            >
              <div className="text-white bg-amber-500 p-3 rounded-full ">
                {feature.icon}
              </div>
              <h3 className="text-3xl font-semibold righteous">{feature.title}</h3>
              <p className="text-sm text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;
