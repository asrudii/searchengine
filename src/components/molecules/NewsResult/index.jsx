import BookmarkIcon from '../../../assets/icons/bookmark.svg';
import BookmarkPrimaryIcon from '../../../assets/icons/bookmark-primary.svg';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';

export default function NewsResult({
  title,
  link,
  published,
  source,
  titleSource,
}) {
  const [isAdded, setIsAdded] = useState(false);
  let listData = JSON.parse(localStorage.getItem('read-list'));

  useEffect(() => {
    let sameData = listData.find((item) => item.title === title);
    if (sameData) setIsAdded(true);
  }, []);

  const handAddToList = () => {
    let newList = {
      source,
      titleSource,
      published,
      link,
      title,
    };

    let data;
    if (listData) {
      if (isAdded)
        return toast.error(
          'Sorry, this news has been added to your reading list',
          {
            position: toast.POSITION.TOP_CENTER,
          }
        );
      data = [newList, ...listData];
    } else {
      data = [newList];
    }
    localStorage.setItem('read-list', JSON.stringify(data));
    toast.success('News added to readling list', {
      position: toast.POSITION.TOP_CENTER,
    });
    setIsAdded(true);
  };

  return (
    <div className="flex border-b-2 border-gray-200 pb-4">
      <div className="flex flex-col w-52 pr-3">
        <a href={source} target="blank" className="inline">
          <span className="font-semibold text-semiblack hover:text-primary text-sm">
            {titleSource}
          </span>
        </a>
        <div className="flex">
          <span className="text-semiblack font-semibold text-xs">
            {published}
          </span>
          <button className="ml-2" onClick={handAddToList}>
            <img
              src={isAdded ? BookmarkPrimaryIcon : BookmarkIcon}
              alt="bookmark"
            />
          </button>
        </div>
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
