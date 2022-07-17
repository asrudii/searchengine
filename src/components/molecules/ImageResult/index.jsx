export default function ImageResult({ src }) {
  return (
    <div className="flex flex-grow flex-col h-full justify-end">
      <div className="h-48 flex items-center hover:cursor-pointer">
        <img
          src={src}
          className="h-full max-w-full min-w-full object-cover"
          alt="imageresult"
        />
      </div>
      <a href="/#" className="hover:underline mt-2">
        <h2 className="text-black font-semibold">Elon Musk kasdfljasdf</h2>
        <span className="text-semiblack">jalsjdfll</span>
      </a>
    </div>
  );
}
