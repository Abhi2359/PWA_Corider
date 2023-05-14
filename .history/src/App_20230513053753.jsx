import { useEffect, useState,lazy,Suspense } from 'react';
import './App.css'
import { fetchData } from './api/fetchData'
import Header from './Header';
import Chat from './Chat';
import LazyChat from './LazyChat';

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page,setPage] = useState(1)
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  useEffect(() => {
    const fetchDataFromApi = async () => {
      setIsLoading(true);

      try {
        const apiData = await fetchData(page);
        // setFrom(apiData.from);
        // setTo(apiData.to);
        const apiResponse = apiData.chats;
        if (page === 1) {
          setFrom(apiData.from);
          setTo(apiData.to);
        }
        setData((prevData) => [...prevData, ...apiResponse]);
        setPage((prevPage) => prevPage + 1);
      } catch (error) {
        setError(error.message);
      }

      setIsLoading(false);
    };

    fetchDataFromApi();
  }, [page]);

  const handleScroll = () => {
    // Check if the user has reached the bottom of the page
    const isBottom =
    window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight;

    if (isBottom && !isLoading) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    return () => {
      // Remove scroll event listener when component is unmounted
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const LazyChatList = lazy(() => import('./LazyChatList'));

  return (
    <><div className="layout">
    <div className='header_section'>
      <Header from={from} to={to} />
      <div className="chat_container">
        <Suspense fallback={<p>Loading...</p>}>
          <LazyChatList data={data} />
        </Suspense>
      </div>
    </div>
  </div>
    </>
  )
}

export default App