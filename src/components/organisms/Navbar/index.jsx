import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../atoms/Button';
import SearchInput from '../SearchInput';
import ImageIcon from '../../../assets/icons/image.svg';
import ImagePrimaryIcon from '../../../assets/icons/image-primary.svg';
import NewsIcon from '../../../assets/icons/book-open.svg';
import NewsPrimaryIcon from '../../../assets/icons/book-open-primary.svg';
import GlobalIcon from '../../../assets/icons/globe.svg';
import GlobalPrimaryIcon from '../../../assets/icons/globe-primary.svg';

export default function Navbar({ home }) {
  const [searchType, setSearchType] = useState('Normal');
  return (
    <div
      className={`flex sm:flex-col md:flex-col lg:flex-row ${
        home ? 'justify-end' : 'justify-between shadow-md shadow-gray-100 pt-3'
      }  items-center sm:h-30 md:h-24 lg:h-20 px-10  z-10`}
    >
      {!home && (
        <div className="flex sm:flex-col sm:w-full md:flex-row items-center">
          <div className="w-56 sm:text-center md:text-left sm:mb-4 md:mb-0 pr-4">
            <Link to="/">
              <h1 className="text-2xl inline">
                Search<strong className="text-primary">Engine</strong>
              </h1>
            </Link>
          </div>
          <div className="sm:w-full lg:w-content">
            <SearchInput />
          </div>
        </div>
      )}
      <div className="flex gap-4 sm:pt-1 md:w-full md:pl-48 lg:pt-0 lg:pl-4 lg:justify-end">
        <Button
          title="Normal"
          src={searchType === 'Normal' ? GlobalPrimaryIcon : GlobalIcon}
          type={searchType === 'Normal' ? 'selected' : 'standard'}
          onClick={() => setSearchType('Normal')}
        />
        <Button
          title="Image"
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
        {/* <div className="rounded-full h-10 w-10 bg-gray-300"></div> */}
      </div>
    </div>
  );
}
