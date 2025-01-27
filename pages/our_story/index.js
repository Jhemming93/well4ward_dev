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
    title: "The Idea of Well4Ward",
    subtitle:
      "Well4ward was an idea born from hardship and experiencing the lack of infrastructure to support all of society equitably. These experiences led to a vision of shared social infrastructure that is accessible to anyone who shares the vision and wishes to contribute. We believe all people have value to add to their communities, and what is lacking is infrastructure to connect people to the resources and communities they need to lead happy, productive lives. In our fast paced world where corporate profits often are centre stage, we see the possibility of a world centered on people and creating spaces for them to connect, grow and share in building a strong, resilient society for the benefit of all.7",
    tag: "h3",
    className: "pb-4 md:pb-0 md:self-center",
  },
  mission: {
    title: "Mission Statement",
    subtitle:
      "Our mission is to foster well-being by building supportive community owned infrastructure that promotes autonomy, equality, and growth. Through sustainable practices and mindful stewardship, we strive to create a meaningful impact for individuals and society.",
    tag: "h3",
    className: "md:self-center",
  },
};

const styles = {
  sections:
    "mb-4 bg-white border border-gray rounded-lg shadow-md p-6 md:flex md:justify-between md:gap-4",
};
