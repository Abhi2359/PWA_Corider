import { useEffect, useState } from 'react';
import './App.css'
import { fetchData } from './api/fetchData'
import Header from './Header';
import Chat from './Chat';

function App() {
  const [data, setData] = useState([]);
  
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [isFetchingMore, setIsFetchingMore] = useState(false);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      setIsLoading(true);

      try {
        const apiData = await fetchData();
        setData(apiData);
      } catch (error) {
        setError(error.message);
      }

      setIsLoading(false);
    };

    fetchDataFromApi();
  }, []);

  

  return (
    <><div className="layout">

    <div className='header_section'>
    <Header/>
    <div className="chat_container">
  <ul className='chat_list'>
    {data.chats && data.chats.map((chat)=>(
      <li key={chat.id}><Chat message={chat.message} image={chat.sender.image}/></li>
    ))}
  </ul>
      </div>
    </div>
    <div className="footer_section">

    </div>
    </div>
    </>
  )
}

export default App
