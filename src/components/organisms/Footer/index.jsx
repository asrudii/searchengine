export default function Footer() {
  return (
    <div className="flex justify-center items-center bottom-0 bg-black text-gray p-2 h-14">
      <div className="flex w-content">
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
    </div>
  );
}
