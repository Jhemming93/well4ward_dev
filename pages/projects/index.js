import Card_Page_Title from "@/components/cards/Card_Main_Page_Title";
import Card_Project from "@/components/cards/Card_Project";

export default function Projects() {
  return (
    <>
      <section>
        <Card_Page_Title title={data.title} description={data.description} />
        <div className="flex flex-wrap items-center justify-center gap-2 py-4">
          {cards.map((card, index) => (
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
      </section>
    </>
  );
}

const data = {
  title: "Projects",
  description:
    "Well4Ward is always looking to grow and strengthen our community. Here are the projects we're currently working on. If any spark your interest or you'd like to get involved, don't hesitate to reach out and find out how you can contribute!",
};

// Card Template
//  {
//     title: "",
//     description: "",
//     dateStarted: "",
//     dateCompletion: "",
//     progress: ,
//     coreColor: "",
//   }

const cards = [
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
];
