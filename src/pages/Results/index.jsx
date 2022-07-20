import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { HEADERS } from '../../api';
import ContentResult from '../../components/organisms/ContentResult';
import Footer from '../../components/organisms/Footer';
import Loading from '../../components/organisms/Loading';
import Navbar from '../../components/organisms/Navbar';

export default function Results() {
  const [query, setQuery] = useState('');
  const [searchType, setSearchType] = useState('');
  const [loading, setLoading] = useState(false);
  const [dataSearch, setDataSearch] = useState({});
  let storageQuery = localStorage.getItem('query');
  let storageSearchType = localStorage.getItem('search-type');
  let navigation = useNavigate();

  const handSearch = async () => {
    try {
      if (storageSearchType === searchType && storageQuery === query) return;

      setLoading(true);
      let queryToApi = query;
      if (!queryToApi && storageQuery) {
        setQuery(storageQuery);
        queryToApi = storageQuery;
      } else {
        localStorage.setItem('query', query);
      }
      localStorage.setItem('search-type', searchType);

      setDataSearch({});

      let API_URL;
      if (searchType === 'Normal') {
        API_URL = process.env.REACT_APP_API_SEARCH_URL;
      } else if (searchType === 'Image') {
        API_URL = process.env.REACT_APP_API_IMAGE_SEARCH_URL;
      } else if (searchType === 'News') {
        API_URL = process.env.REACT_APP_API_NEWS_SEARCH_URL;
      }

      const response = await axios.get(`${API_URL}/q=${queryToApi}`, {
        headers: HEADERS,
      });

      setDataSearch(response.data);

      document.title = `Search - ${queryToApi}`;
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error(error);
    }
  };

  useEffect(() => {
    if (storageQuery || query) {
      if (searchType) {
        handSearch();
      } else {
        setSearchType(storageSearchType);
      }
    } else {
      navigation('/');
    }
  }, [searchType]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar
        setSearchType={setSearchType}
        searchType={searchType}
        query={query}
        setQuery={setQuery}
        onClick={() => query && handSearch}
        onKeyDown={() => query && handSearch}
      />
      <div
        className={`flex flex-1 flex-col ${
          searchType === 'Image' ? 'px-0' : 'px-10'
        }`}
      >
        <div
          className={`flex ${
            searchType === 'Image'
              ? 'sm:grid sm:grid-cols-2 sm:gap-4 md:flex md:flex-wrap md:gap-6 px-6 pt-10 items-start'
              : `lg:w-content lg:ml-56 pt-5 ${
                  searchType === 'News'
                    ? 'md:grid md:grid-cols-2 sm:flex-col gap-10 lg:ml-56 '
                    : 'flex-col'
                }`
          }`}
        >
          <ContentResult
            dataSearch={dataSearch}
            searchType={searchType}
            loading={loading}
          />
        </div>
      </div>
      <Footer />
      {loading && <Loading />}
    </div>
  );
}
