export default function Card_Project({
  title,
  description,
  dateStarted,
  dateCompletion,
  progress,
  coreColor = "community",
}) {
  const coreColors = {
    autonomy: {
      cardTop: "border-sixth",
      progress: "bg-sixth",
    },
    equality: {
      cardTop: "border-fourth",
      progress: "bg-fourth",
    },
    community: {
      cardTop: "border-third",
      progress: "bg-third",
    },
    growth: {
      cardTop: "border-second",
      progress: "bg-second",
    },
    stewardship: {
      cardTop: "border-first",
      progress: "bg-first",
    },
  };
  const styles = {
    card: "bg-white shadow-md rounded-lg p-6 max-w-sm border-t-8",
    progress: "h-full bg-blue-500 rounded-full",
  };
  console.log(coreColors[coreColor]?.cardTop);

  return (
    <div className={`${styles.card} ${coreColors[coreColor]?.cardTop}`}>
      {/* Title */}
      <h2 className="text-lg font-bold text-gray-800">{title}</h2>

      {/* Description */}
      <p className="text-gray-600 mt-2">{description}</p>

      {/* Dates */}
      <div className="mt-4">
        <div className="flex justify-between text-sm text-gray-500">
          <div>
            <p className="font-bold">Started: </p>
            <p>{dateStarted}</p>
          </div>
          <div>
            <p className="font-bold">Projected Completion: </p>
            <p>{dateCompletion}</p>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mt-4">
        <div className="h-2 bg-gray-200 rounded-full">
          <div
            className={`${styles.progress} ${coreColors[coreColor]?.progress}`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-right text-sm text-gray-500 mt-2">
          {progress}% completed
        </p>
      </div>
    </div>
  );
}
