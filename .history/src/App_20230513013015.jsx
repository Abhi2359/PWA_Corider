import { useEffect, useState } from 'react';
import './App.css'
import { fetchData } from './api/fetchData'

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
      <ul style="">
      <li>
        
      {data.chats && data.chats.map((item) => (
        <div key={item.id}>{item.message}</div>
      ))}
        </li>  
      </ul>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      
    </div>
    </>
  )
}

export default App