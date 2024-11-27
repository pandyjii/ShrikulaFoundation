import React from "react";
import newsBg from "../assets/newsMedia/mediaBg.png";
import news1 from "../assets/newsMedia/news1.png";
import news2 from "../assets/newsMedia/news2.png";
import news3 from "../assets/newsMedia/news3.png";
import news4 from "../assets/newsMedia/news4.png";

export const NewsMedia = () => {
  const newsItems = [
    {
      title: "KLF 2024: Celebrating Art and Culture in Kashmir",
      image: news1, // Replace with actual image paths
    },
    {
      title: "Stories in the Snow: Kashmir Literary Festival Showcases Regional and Global Talent",
      image: news2,
    },
    {
      title: "KLF 2024: A Cultural Extravaganza Uniting Literature, Art, and Music in Kashmir",
      image: news3,
    },
    {
      title: "From Poets to Performers: Kashmir Literary Festival Revives the Spirit of the Valley",
      image: news4,
    },
  ];

  return (
    <div
      className="relative w-full bg-cover bg-center py-12"
      style={{
        backgroundImage: `url(${newsBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for better text contrast */}
      {/* <div className="absolute inset-0 bg-white/70"></div> */}

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl lg:text-4xl font-bold text-black text-start mb-8 font-inter">
          News Media
        </h2>

        {/* News Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 rounded-xl overflow-hidden font-poppins">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className=" overflow-hidden rounded-2xl transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48"
              />
              <div className="py-4">
                <h3 className="text-sm font-semibold text-[#000000]">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
