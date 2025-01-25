import { useRouter } from "next/navigation";

export default function Button({
  title,
  link,
  type = "button",
  variant = "primary",
  className = "",
}) {
  const router = useRouter();
  const baseStyles =
    "px-4 py-2 rounded font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition";
  console.log(link);
  const variants = {
    primary: "bg-first text-white hover:bg-blue-600 focus:ring-blue-400",
    secondary: "bg-second text-white hover:bg-green-600 focus:ring-green-400",
    danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-400",
    outline:
      "border border-first text-first hover:bg-blue-100 focus:ring-blue-400",
  };

  return (
    <button
      type={type}
      onClick={() => router.push(`${link}`)}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {title}
    </button>
  );
}
