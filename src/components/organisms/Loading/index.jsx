import { useEffect, useState } from 'react';

export default function Loading() {
  const [dot, setDot] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      if (dot.length >= 3) {
        setDot([]);
      } else {
        setDot([...dot, '.']);
      }
    }, 700);
  }, [dot]);

  return (
    <div className="absolute h-screen w-screen z-20 bg-gray-900 opacity-70 flex flex-col justify-center items-center">
      <div className="sm:text-center md:text-left">
        <h1 className="text-5xl text-white mb-4">
          Search<strong className="text-primary">Engine</strong>
        </h1>
      </div>
      <div className="flex text-white font-semibold text-2xl">
        <span>Now Loading</span>
        <span className="ml-3 w-3">{dot}</span>
      </div>
    </div>
  );
}
