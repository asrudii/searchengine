export default function NewsResult({
  title,
  link,
  published,
  source,
  titleSource,
}) {
  return (
    <div className="flex border-b-2 border-gray-200 pb-4">
      <div className="flex flex-col w-52 pr-3">
        <a href={source} target="blank" className="inline">
          <span className="font-semibold text-semiblack hover:text-primary text-sm">
            {titleSource}
          </span>
        </a>
        <span className="text-semiblack font-semibold text-xs">
          {published}
        </span>
      </div>
      <div className="w-full">
        <a href={link} target="blank">
          <h1 className="text-black font-semibold sm:text-sm lg:text-base inline hover:text-primary">
            {title}
          </h1>
        </a>
      </div>
    </div>
  );
}
