import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import ReadListCard from '../../components/molecules/ReadListCard';
import Footer from '../../components/organisms/Footer';
import Navbar from '../../components/organisms/Navbar';

export default function ReadingList() {
  const [query, setQuery] = useState('');
  const [readList, setReadList] = useState([]);
  const [searchType, setSearchType] = useState('Normal');
  let navigation = useNavigate();

  useEffect(() => {
    let listData = JSON.parse(localStorage.getItem('read-list'));
    setReadList(listData);

    document.title = 'Reading List';
  }, []);

  const handSearch = () => {
    if (query) {
      localStorage.setItem('query', query);
      localStorage.setItem('search-type', searchType);
      navigation('/search');
    }
  };

  const handDeleteList = (title) => {
    let confirm = window.confirm('Are you sure want to delete this item?');
    if (confirm) {
      let idx = readList.findIndex((item) => item.title === title);
      let data = readList;
      data.splice(idx, 1);
      localStorage.setItem('read-list', JSON.stringify(data));
      toast.success('News deleted from reading list', {
        position: toast.POSITION.TOP_CENTER,
      });
      let listData = JSON.parse(localStorage.getItem('read-list'));
      setReadList(listData);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar
        readlist
        setSearchType={setSearchType}
        searchType={searchType}
        query={query}
        setQuery={setQuery}
        onClick={() => query && handSearch}
        onKeyDown={() => query && handSearch}
      />
      <div className="flex flex-1 flex-col px-10 mt-6">
        <div className="lg:w-content grid sm:grid-cols-2 md:grid-cols-3 gap-4 lg:ml-56">
          {readList.length ? (
            readList?.map((item) => {
              return (
                <ReadListCard
                  key={`${item.title}-${item.link}`}
                  title={item.title}
                  link={item.link}
                  published={item.published}
                  source={item.source}
                  titleSource={item.titleSource}
                  onClick={() => handDeleteList(item.title)}
                />
              );
            })
          ) : (
            <span className="font-semibold text-semiblack">
              Your reading list is empty
            </span>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
