// pages/our-story.js
import Card_Main_Page_Title from "@/components/cards/Card_Main_Page_Title";
import Card_Page_Title from "@/components/cards/Card_Page_Title";
import Responsive_image from "@/components/parts/Responsive_image";
import React from "react";
import CoreValuesList from "./Core_Value_list";

const Our_Story = () => {
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
        <div className={styles.sections}>
          <Card_Page_Title
            title={pageTitles.idea.title}
            subtitle={pageTitles.idea.subtitle}
            tag={pageTitles.idea.tag}
            className={pageTitles.idea.className}
          />
          <Responsive_image
            src={"/imgs/our_story/tree-1024.webp"}
            alt="tree in park"
            w={1024}
            h={1024}
          />
        </div>

        {/* Mission Statement */}
        <div className={` md:flex-row-reverse ${styles.sections}`}>
          <Card_Page_Title
            title={pageTitles.mission.title}
            subtitle={pageTitles.mission.subtitle}
            tag={pageTitles.mission.tag}
            className={pageTitles.mission.className}
          />
          <Responsive_image
            src={"/imgs/our_story/round_tree_1024.webp"}
            alt="round circle tree"
            w={1024}
            h={1024}
          />
        </div>

        {/* Core Values */}
        <section>
          <CoreValuesList />
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
    className: "md:self-center",
  },
  mission: {
    title: "Mission Statement",
    subtitle:
      "Our mission is to foster well-being by building a supportive community that promotes autonomy, equality, and growth. Through sustainable practices and mindful stewardship, we strive to create a meaningful impact for individuals and society.",
    tag: "h3",
    className: "md:self-center",
  },
};

const styles = {
  sections:
    "mb-4 bg-white border border-gray rounded-lg shadow-md p-6 md:flex md:justify-between md:gap-4",
};
