import { useRouter } from "next/navigation";

export default function Button_Basic({
  title,
  link,
  type = "button",
  variant = "primary",
  className = "",
}) {
  const router = useRouter();
  const baseStyles =
    "px-4 py-2 rounded font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition text-lg";
  console.log(link);
  const variants = {
    primary: "bg-tealBlue text-white hover:bg-sky-600 focus:ring-sky-400",
    secondary:
      "bg-darkGreen text-white hover:bg-green-600 focus:ring-green-400",
    danger: "bg-brickRed text-white hover:bg-red-600 focus:ring-red-400",
    outline:
      "border border-tealBlue text-first hover:bg-blue-100 focus:ring-blue-400",
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
