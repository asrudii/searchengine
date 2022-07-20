export default function Footer() {
  return (
    <div className="flex justify-start items-center bottom-0 sm:text-xs md:text-base bg-black text-gray-300 mt-10 p-2 px-10 h-14">
      <ul className="flex gap-6">
        <li className="inline-block">
          <a href="/#" className="hover:text-white">
            Help
          </a>
        </li>
        <li className="inline-block">
          <a href="/#" className="hover:text-white">
            Credits
          </a>
        </li>
        <li className="inline-block">
          <a href="/#" className="hover:text-white">
            Feedback
          </a>
        </li>
        <li className="inline-block">
          <a href="/#" className="hover:text-white">
            Privacy
          </a>
        </li>
        <li className="inline-block">
          <a href="/#" className="hover:text-white">
            Terms
          </a>
        </li>
      </ul>
    </div>
  );
}
