import { useState } from 'react';
import Button from '../../atoms/Button';
import SearchInput from '../SearchInput';

export default function Navbar({ home }) {
  const [searchType, setSearchType] = useState('Normal');
  return (
    <div
      className={`flex sm:flex-col md:flex-col lg:flex-row ${
        home ? 'justify-end' : 'justify-between shadow-md shadow-gray-100 pt-3'
      }  items-center sm-h-30 md:h-24 lg:h-20 px-10  z-50`}
    >
      {!home && (
        <div className="flex sm:flex-col sm:w-full md:flex-row items-center">
          <div className="w-56 sm:text-center md:text-left pr-4">
            <h1 className="text-2xl sm:mb-4 md:mb-0">
              Search<strong className="text-primary">Engine</strong>
            </h1>
          </div>
          <div className="sm:w-full lg:w-content">
            <SearchInput />
          </div>
        </div>
      )}
      <div className="flex gap-4 md:w-full md:pl-48 lg:pl-4 lg:w-fit">
        <Button
          title="Normal"
          type={searchType === 'Normal' ? 'selected' : 'standard'}
          onClick={() => setSearchType('Normal')}
        />
        <Button
          title="Image"
          type={searchType === 'Image' ? 'selected' : 'standard'}
          onClick={() => setSearchType('Image')}
        />
        <Button
          title="News"
          type={searchType === 'News' ? 'selected' : 'standard'}
          onClick={() => setSearchType('News')}
        />
        {/* <div className="rounded-full h-10 w-10 bg-gray-300"></div> */}
      </div>
    </div>
  );
}
