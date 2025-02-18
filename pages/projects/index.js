"use server"
import Card_Main_Page_Title from "@/components/cards/Card_Main_Page_Title";
import Card_Page_Title from "@/components/cards/Card_Page_Title";
import Card_Project from "@/components/cards/Card_Project";

export const metadata = {
  title: 'Well4Ward Projects',
  description: 'Well4Wards current ongoing projects, aswell as future planned projects'

}



export default function Projects() {
  return (
    <>
      <section>
        <Card_Main_Page_Title
          title={mainTitle.title}
          subtitle={mainTitle.description}
          className={mainTitle.style}
        />
        <div className="  p-6 bg-white border border-gray rounded-lg shadow-md ">
          <div className="flex flex-wrap gap-2 items-center md:items-start justify-center md:justify-normal my-6">
            <Card_Page_Title
              title={"Ongoing Projects"}
              tag={"h3"}
              className={""}
            />
            {cards.ongoing.map((card, index) => (
              <Card_Project
                key={index}
                title={card.title}
                description={card.description}
                dateStarted={card.dateStarted}
                dateCompletion={card.dateCompletion}
                progress={card.progress}
                coreColor={card.coreColor}
              />
            ))}
          </div>
          <div className="flex flex-wrap gap-2 items-center md:items-start justify-center md:justify-normal">
            <Card_Page_Title
              title={"Future Projects"}
              tag={"h3"}
              className={""}
              border="bg-brickRed"
            />
            {cards.future.map((card, index) => (
              <Card_Project
                key={index}
                title={card.title}
                description={card.description}
                dateStarted={card.dateStarted}
                dateCompletion={card.dateCompletion}
                progress={card.progress}
                coreColor={card.coreColor}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const mainTitle = {
  title: "Projects",
  description:
    "Well4Ward is always looking to grow and strengthen our community. Here are the projects we're currently working on. If any spark your interest or you'd like to get involved, don't hesitate to reach out and find out how you can contribute!",
  style: "mb-6",
};

// Card Template
//  {
//     title: "",
//     description: "",
//     dateStarted: "",
//     dateCompletion: "",
//     progress: 0,
//     coreColor: "",
//   }

const cards = {
  ongoing: [
    {
      title: "Incorporate Well4Ward as a Society",
      description:
        "To better help the community, we wish to incorperate as a society.",
      dateStarted: "December 2024",
      dateCompletion: "March 2025",
      progress: 15,
      coreColor: "autonomy",
    },
    {
      title: "Increase Society Members to 100",
      description: "To build a stronger Community we need more Members",
      dateStarted: "December 2024",
      dateCompletion: "December 2025",
      progress: "2",
      coreColor: "growth",
    },
  ],
  future: [
    {
      title: "Start a Housing Coop",
      description:
        "This project was one of the first ideas to spark the creation of Well4Ward",
      dateStarted: "Not Decided",
      dateCompletion: "0000",
      progress: 0,
      coreColor: "stewardship",
    },
  ],
};
