export default function ImageResult({ src, title, link }) {
  return (
    <div className="flex flex-grow flex-col h-full justify-start">
      <a
        href={link}
        target="blank"
        className="hover:underline mt-2 overflow-hidden"
      >
        <div className="h-48 flex items-center">
          <img
            src={src}
            className="h-full min-w-full object-cover"
            alt="imageresult"
          />
        </div>
        <h2 className="text-black font-semibold sm:text-xs md:text-base flex-wrap">
          {title}
        </h2>
      </a>
    </div>
  );
}
