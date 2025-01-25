// import Button from "@/components/Button_Basic";
// import { useRouter } from "next/navigation";

import Card_Project from "@/components/Card_Project";

export default function Road_Map() {
  //   const router = useRouter();
  //   const btnLink = "/road_map";
  //   console.log(cards);
  return (
    <>
      <section className="bg-gray-100">
        <div className="flex items-center justify-center ">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
            <p className="text-gray-700 text-lg">{data.description}</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2">
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
    "Well4Ward is always looking to grow our community. These are our current ongoing projects that we currently working on. If you see any that interest or you just want to help out, get in contact to see how you can help us out.",
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
