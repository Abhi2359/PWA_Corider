import { useEffect, useState } from 'react';
import './App.css'
import { fetchData } from './api/fetchData'
import Header from './Header';
import Chat from './Chat';

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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
    <>
    <div>
    <Header/>
    <div className="chat-container">
  <ul>
    {data.chats && data.chats.map(())}
  </ul>
      </div>
    </div>
    </>
  )
}

export default App
