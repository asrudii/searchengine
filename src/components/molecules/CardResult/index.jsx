export default function CardResult({ title, desc, link, cite }) {
  return (
    <div className="lg:w-content mb-6">
      <a href={link} target="blank" className="group flex flex-col w-fit">
        <span className="text-lg text-black">{cite}</span>
        <h1 className="text-2xl text-black inline group-hover:text-primary">
          {title}
        </h1>
      </a>
      <p className="text-semiblack">{desc}</p>
    </div>
  );
}
