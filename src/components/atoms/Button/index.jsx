export default function Button({ type, title, onClick }) {
  switch (type) {
    case 'selected':
      return (
        <button
          onClick={onClick}
          className="text-primary border-b-4 border-primary py-1 px-2"
        >
          {title}
        </button>
      );
    case 'standard':
      return (
        <button
          onClick={onClick}
          className="hover:text-primary border-b-4 border-white py-1 px-2"
        >
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
