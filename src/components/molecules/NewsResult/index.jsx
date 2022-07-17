export default function NewsResult() {
  return (
    <div className="flex lg:w-content mb-6 border-b-2 border-gray-200 pb-4">
      <div className="flex flex-col w-52">
        <a href="/#" className="inline">
          <span className="font-semibold text-black hover:text-primary">
            HBR.org Daily
          </span>
        </a>
        <span className="text-semiblack font-semibold text-sm">
          10 Juli 2022
        </span>
      </div>
      <div className="w-full">
        <a href="/#">
          <h1 className="text-black font-semibold text-xl inline hover:text-primary">
            Title News
          </h1>
        </a>
        <p className="text-semiblack">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique id
          eius quidem ratione ad consequatur rem incidunt nam quisquam commodi,
          nulla error fuga qui illum explicabo, vero dolores expedita sapiente?
        </p>
      </div>
    </div>
  );
}
