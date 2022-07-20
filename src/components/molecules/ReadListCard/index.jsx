import Trash from '../../../assets/icons/trash.svg';

export default function ReadListCard({
  title,
  link,
  source,
  titleSource,
  published,
  onClick,
}) {
  return (
    <div className="flex flex-col justify-between p-2 border-2 border-gray-200">
      <a href={link} target="blank">
        <h1 className="text-sm hover:text-primary">{title}</h1>
      </a>
      <div className="flex justify-between items-end pt-2">
        <div className="flex flex-col">
          <a href={source} target="blank" className="inline">
            <span className="text-xs mr-2 font-semibold text-semiblack hover:text-primary">
              {titleSource}
            </span>
          </a>
          <span className="text-xs">{published}</span>
        </div>
        <div className="pl-2">
          <button onClick={onClick}>
            <img src={Trash} alt="trash" />
          </button>
        </div>
      </div>
    </div>
  );
}
