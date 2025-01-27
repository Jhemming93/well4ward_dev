import Image from "next/image";

const ResponsiveImage = ({ src, alt, w, h }) => {
  console.log(src);
  return (
    <div className="relative w-full max-w-lg mx-auto">
      <Image
        src={src}
        alt={alt}
        width={w}
        height={h}
        sizes="(max-width: 450px) 100vw, (max-width: 750px) 50vw, 33vw" // Custom sizes for different breakpoints
        className="rounded-xl shadow-lg"
        priority // Optional: If the image is above the fold
      />
    </div>
  );
};

export default ResponsiveImage;
