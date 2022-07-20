export default function Button({ type, title, onClick, src }) {
  switch (type) {
    case 'selected':
      return (
        <button
          onClick={onClick}
          className="flex items-center justify-center gap-1 sm:text-sm lg:text-base text-primary border-b-4 border-primary py-1 px-2"
        >
          {src && <img src={src} alt="iconbtn" className="sm:w-5 md:w-6" />}
          {title}
        </button>
      );
    case 'standard':
      return (
        <button
          onClick={onClick}
          className="flex items-center gap-1 sm:text-sm lg:text-base opacity-70 hover:opacity-100 text-black border-b-4 border-white py-1 px-2"
        >
          {src && <img src={src} alt="iconbtn" className="sm:w-5 md:w-6" />}
          {title}
        </button>
      );
    default:
      return (
        <button
          onClick={onClick}
          className="p-2 bg-primary text-white font-semibold rounded-full active:bg-opacity-95 hover:bg-opacity-80 w-32"
        >
          {title}
        </button>
      );
  }
}
