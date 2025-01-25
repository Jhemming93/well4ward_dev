export default function Card_Page_Title({
  title,
  subtitle,
  description,
  className,
}) {
  return (
    <div
      className={`
                ["max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md "]
                     ${className}`}
    >
      <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
      <h3 className="text-lg font-medium text-gray-600 mb-4">{subtitle}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}
