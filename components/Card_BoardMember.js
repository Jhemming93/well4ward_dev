export default function BoardMemberCard({ image, name, title, description }) {
  return (
    <div className="max-w-sm bg-white shadow-md rounded-lg overflow-hidden">
      {/* Profile Image */}
      <img
        src={image}
        alt={`${name}'s profile`}
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-4">
        {/* Name */}
        <h2 className="text-xl font-bold text-gray-800">{name}</h2>

        {/* Title */}
        <p className="text-sm text-gray-500">{title}</p>

        {/* Description */}
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
}
