import React from "react";
import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  const marqueeData = [
    {
      id: 1,
      title: "Special Offer!",
      description: "Get 30% discount on your first order.",
      category: "Offer",
    },
    {
      id: 2,
      title: "Free Delivery",
      description: "Enjoy free delivery on orders above $50.",
      category: "Delivery",
    },
    {
      id: 3,
      title: "New Collection",
      description: "Explore our latest fashion collection.",
      category: "Update",
    },
  ];
  return (
    <div className="flex bg-gray-200 p-3 mt-4 container mx-auto">
      <button className="btn bg-[#D72050] text-white">Latest</button>
      <Marquee pauseOnHover="true">
        {marqueeData.map((news) => (
          <span>{news.description}</span>
        ))}
      </Marquee>
    </div>
  );
};

export default BreakingNews;
