import { useEffect, useState } from "react";
import styles from "./App.css";
import { fetchData } from "./api/fetchData";
import Header from "./Header/Header";
import Chat from "./chatInput/Chat";
import ChatInput from "./chatInput/ChatInput";


function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [totalPages, setTotalPages] = useState(0);


 
  const fetchDataFromApi = async () => {
    if (!hasMore) return;
    setIsLoading(true);

    try {
      const apiData = await fetchData(currentPage);

      const apiResponse = apiData.chats;

      if (apiData.length === 0) {
        setHasMore(false);
      } else {
        setData((prevData) => [...prevData, ...apiResponse]);
        setCurrentPage((prevPage) => prevPage + 1);
      }
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchDataFromApi();
  }, []);

  const handleScroll = () => {
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    const scrollHeight =
      (document.documentElement && document.documentElement.scrollHeight) ||
      document.body.scrollHeight;
    const clientHeight =
      document.documentElement.clientHeight || window.innerHeight;
    const scrollPosition = scrollTop + clientHeight;

    if (scrollPosition >= scrollHeight - 200) {
      fetchDataFromApi();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className="layout">
        <div className="header_section">
          <Header />
          <div className="chat_container">
            <ul className="chat_list">
              {data &&
                data.map((chat) => (
                  <li key={chat.id}>
                    <Chat message={chat.message} image={chat.sender.image} />
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div>
          <footer className="footer">
            <ChatInput />
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
