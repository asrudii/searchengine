import { Link } from 'react-router-dom';
import NewsPrimaryIcon from '../../../assets/icons/book-open-primary.svg';
import NewsIcon from '../../../assets/icons/book-open.svg';
import GlobalPrimaryIcon from '../../../assets/icons/globe-primary.svg';
import GlobalIcon from '../../../assets/icons/globe.svg';
import ImagePrimaryIcon from '../../../assets/icons/image-primary.svg';
import ImageIcon from '../../../assets/icons/image.svg';
import BookmarkIcon from '../../../assets/icons/bookmark.svg';
import BookmarkPrimaryIcon from '../../../assets/icons/bookmark-primary.svg';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';

export default function Navbar({
  home,
  readlist,
  query,
  setQuery,
  onKeyDown,
  onClick,
  searchType,
  setSearchType,
}) {
  return (
    <div
      className={`flex gap-2 pt-3 sm:px-5 sm:justify-center md:px-10 z-10 ${
        home
          ? 'lg:flex-row justify-end'
          : 'sm:flex-col md:flex-col justify-between shadow-md shadow-gray-100 items-center sm:h-30 md:h-28 lg:h-28 '
      }  `}
    >
      {!home && (
        <div className="flex relative sm:flex-col sm:w-full md:flex-row items-center justify-start">
          <div className="w-56 sm:text-center md:text-left sm:mb-4 md:mb-0 pr-4">
            <Link to="/">
              <h1 className="text-2xl inline">
                Search<strong className="text-primary">Engine</strong>
              </h1>
            </Link>
          </div>
          <div className="sm:w-full lg:w-content">
            <div className="relative">
              <Input value={query} setValue={setQuery} onKeyDown={onKeyDown} />
              <div className="absolute right-0 top-0 h-full flex">
                <Button title="Search Now" onClick={onClick} />
              </div>
            </div>
          </div>
        </div>
      )}
      <div
        className={`flex sm:gap-1 md:gap-4 ${
          home ? 'lg:w-fit' : 'md:self-start sm:pt-1 md:w-fit md:ml-48 lg:ml-56'
        }`}
      >
        <Button
          title="Normal"
          src={searchType === 'Normal' ? GlobalPrimaryIcon : GlobalIcon}
          type={searchType === 'Normal' ? 'selected' : 'standard'}
          onClick={() => setSearchType('Normal')}
        />
        <Button
          title="Images"
          src={searchType === 'Image' ? ImagePrimaryIcon : ImageIcon}
          type={searchType === 'Image' ? 'selected' : 'standard'}
          onClick={() => setSearchType('Image')}
        />
        <Button
          title="News"
          src={searchType === 'News' ? NewsPrimaryIcon : NewsIcon}
          type={searchType === 'News' ? 'selected' : 'standard'}
          onClick={() => setSearchType('News')}
        />
        {/* {home && ( */}
        <Link
          to="/readlist"
          className={`${
            home
              ? 'relative ml-2'
              : 'sm:relative sm:-mt-1 lg:absolute lg:right-10 lg:top-5'
          } ${
            readlist ? 'border-primary' : 'border-semiblack'
          } group flex items-center justify-center rounded-full sm:h-8 sm:w-8 md:h-9 md:w-9 border-2  opacity-80 hover:opacity-100`}
        >
          <img
            src={readlist ? BookmarkPrimaryIcon : BookmarkIcon}
            alt="bookmark"
          />
          <span className="absolute hidden group-hover:block group-hover:transition-all -bottom-7 rounded-lg text-xs text-center text-white w-24 py-1 bg-gray-400 z-10">
            Reading List
          </span>
        </Link>
      </div>
    </div>
  );
}
