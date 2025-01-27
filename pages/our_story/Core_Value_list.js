import { useState } from "react";
import Card_Page_Title from "@/components/cards/Card_Page_Title";

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

export default function CoreValuesList() {
  const [activeValue, setActiveValue] = useState(null);

  return (
    <div className="bg-white border border-gray rounded-lg shadow-md p-6">
      <Card_Page_Title
        title={pageTitles.core_values.title}
        tag={pageTitles.core_values.tag}
        className={pageTitles.core_values.className}
      />
      <div className="flex flex-col md:flex-row gap-8 p-4 ">
        {/* Core Values List */}
        <div className="flex flex-col gap-4 w-full md:w-1/3">
          {coreValues.map((value, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg cursor-pointer ${value.bgColor} text-white hover:shadow-lg`}
              onMouseEnter={() => setActiveValue(value)}
              onMouseLeave={() => setActiveValue(null)}
            >
              <h3 className="text-lg font-bold">{value.name}</h3>
            </div>
          ))}
        </div>

        {/* Value Description */}
        <div className="flex-1 flex bg-nGreen p-6 rounded-lg shadow-md justify-center text-5xl font-bold text-white text-center w-full">
          {activeValue ? (
            <div className="self-center">
              <p className={activeValue.fColor}>{activeValue.description}</p>
            </div>
          ) : (
            <div className="self-center ">
              <p className="text-gray-500">
                Hover over a value to see its details.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const pageTitles = {
  core_values: {
    title: "Core Values",
    subtitle: "",
    tag: "h3",
    className: "mb-8 border-none shadow-none",
  },
};
