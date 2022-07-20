import SearchIcon from '../../../assets/icons/search.svg';
import CloseIcon from '../../../assets/icons/x.svg';

export default function Input({ value, setValue, onKeyDown }) {
  return (
    <div className="relative w-full">
      <div className="absolute bottom-0 h-full flex left-4 items-center">
        <img src={SearchIcon} width="28" color="#B8BECD" alt="search-icon" />
      </div>
      <input
        value={value}
        className="border-2 text-lg rounded-full border-gray-300 bg-zinc-50 text-semiblack p-2 pl-14 pr-44 w-full hover:shadow-md hover:shadow-gray-200 focus:shadow-md focus:shadow-gray-200 focus:outline-none focus:bg-white"
        type="text"
        placeholder="Search anything here...."
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          e?.key === 'Enter' && onKeyDown();
        }}
      />
      {value && (
        <div className="absolute bottom-0 h-full flex right-36 items-center">
          <img
            className="hover:cursor-pointer "
            src={CloseIcon}
            width="20"
            color="#FFFF"
            alt="search-icon"
            onClick={() => setValue('')}
          />
        </div>
      )}
    </div>
  );
}
