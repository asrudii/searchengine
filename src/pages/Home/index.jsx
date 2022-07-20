import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/organisms/Navbar';
import Footer from '../../components/organisms/Footer';
import Input from '../../components/atoms/Input';
import Button from '../../components/atoms/Button';
import { useState } from 'react';

export default function Home() {
  const [query, setQuery] = useState('');
  const [searchType, setSearchType] = useState('Normal');
  let navigation = useNavigate();

  const handSearch = () => {
    if (query) {
      localStorage.setItem('query', query);
      localStorage.setItem('search-type', searchType);
      navigation('/search');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar home setSearchType={setSearchType} searchType={searchType} />
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
          <div className="relative">
            <Input value={query} setValue={setQuery} onKeyDown={handSearch} />
            <div className="absolute right-0 top-0 h-full flex">
              <Button title="Search Now" onClick={handSearch} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
