import Navbar from '../../components/organisms/Navbar';
import Footer from '../../components/organisms/Footer';
import SearchInput from '../../components/organisms/SearchInput';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar home />
      <div className="flex flex-col flex-1 items-center justify-center px-4 -mt-20">
        <div className="sm:w-full md:w-content">
          <div className="mb-12">
            <h1 className="text-center sm:text-5xl md:text-7xl mb-2">
              Search<strong className="text-primary">Engine</strong>
            </h1>
            <p className="text-center sm:text-xl md:text-2xl text-semiblack">
              Find what you want to know
            </p>
          </div>
          <SearchInput />
        </div>
      </div>
      <Footer />
    </div>
  );
}
