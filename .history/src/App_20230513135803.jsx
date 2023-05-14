import { useEffect, useState } from 'react';
import './App.css'
import { fetchData } from './api/fetchData'
import Header from './Header';
import Chat from './Chat';

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
        setData(apiResponse);
        s
      } catch (error) {
        setError(error.message);
      }

      setIsLoading(false);
    };

    fetchDataFromApi();
  }, [page]);

 
  return (
    <><div className="layout">

    <div className='header_section'>
    <Header />
    <div className="chat_container">
  <ul className='chat_list'>
    {data && data.map((chat)=>(
      <li key={chat.id}><Chat message={chat.message} image={chat.sender.image}/></li>
    ))}
  </ul>
  {isLoading && <p>Loading...</p>}
      </div>
    </div>
     <div className="footer">
      
     </div>
    </div>
    </>
  )
}

export default App
