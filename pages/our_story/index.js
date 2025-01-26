// pages/our-story.js
import Card_Main_Page_Title from "@/components/cards/Card_Main_Page_Title";
import Card_Page_Title from "@/components/cards/Card_Page_Title";
import React from "react";

const Our_Story = () => {
  const coreValues = [
    {
      name: "Autonomy",
      description: "Empowering individuals to make their own decisions.",
      bgColor: "bg-royalPurple",
      fColor: "text-royalPurple",
    },
    {
      name: "Equality",
      description: "Ensuring fairness and inclusivity for everyone.",
      bgColor: "bg-brightYellow",
      fColor: "text-brightYellow",
    },
    {
      name: "Community",
      description: "Building meaningful relationships and connections.",
      bgColor: "bg-brickRed",
      fColor: "text-brickRed",
    },
    {
      name: "Growth",
      description: "Fostering personal and collective development.",
      bgColor: "bg-darkGreen",
      fColor: "text-darkGreen",
    },
    {
      name: "Stewardship",
      description: "Responsibly managing resources for future generations.",
      bgColor: "bg-tealBlue",
      fColor: "text-tealBlue",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Card_Main_Page_Title
        title={pageTitles.main.title}
        subtitle={pageTitles.main.subtitle}
        tag={pageTitles.main.tag}
        className={pageTitles.main.className}
      />

      <div className="w-full mx-auto">
        {/* The Idea of Well4ward */}
        <Card_Page_Title
          title={pageTitles.idea.title}
          subtitle={pageTitles.idea.subtitle}
          tag={pageTitles.idea.tag}
          className={pageTitles.idea.className}
        />

        {/* Mission Statement */}
        <Card_Page_Title
          title={pageTitles.mission.title}
          subtitle={pageTitles.mission.subtitle}
          tag={pageTitles.mission.tag}
          className={pageTitles.mission.className}
        />

        {/* Core Values */}
        <section>
          <Card_Page_Title
            title={pageTitles.core_values.title}
            tag={pageTitles.core_values.tag}
            className={pageTitles.core_values.className}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className={`group relative w-full h-20 rounded-full shadow-md overflow-hidden transform transition-all duration-300 hover:h-56 hover:shadow-lg ${value.bgColor}`}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                  <h3 className={`text-4xl font-bold text-white`}>
                    {value.name}
                  </h3>
                </div>
                <div
                  className={`absolute inset-0 flex items-center justify-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 p-4 ${value.bgColor}`}
                >
                  <p className="text-xl text-center font-bold">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Our_Story;

const pageTitles = {
  main: {
    title: "Our Story",
    subtitle: "Discover the vision, mission, and values that drive Well4ward.",
    tag: "h2",
    className: "mb-4",
  },
  idea: {
    title: "The Idea of Well4ward",
    subtitle:
      "Well4ward was born out of the desire to create a space where people feel empowered to grow, connect, and thrive. We believe in supporting holistic well-being through innovation, collaboration, and a shared commitment to positive change.",
    tag: "h3",
    className: "mb-4",
  },
  mission: {
    title: "Mission Statement",
    subtitle:
      "Our mission is to foster well-being by building a supportive community that promotes autonomy, equality, and growth. Through sustainable practices and mindful stewardship, we strive to create a meaningful impact for individuals and society.",
    tag: "h3",
    className: "mb-4",
  },
  core_values: {
    title: "Core Values",
    subtitle: "",
    tag: "h3",
    className: "mb-8",
  },
};
