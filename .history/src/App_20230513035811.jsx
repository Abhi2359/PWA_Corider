import { useEffect, useState } from "react";
import "./App.css";
import { fetchData } from "./api/fetchData";
import Header from "./Header";
import Chat from "./Chat";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);
  const [isFetchingMore, setIsFetchingMore] = useState(false);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      setIsLoading(true);

      try {
        const apiResponse = await fetchData(page);
        const apiData = apiResponse.chats
        setData((prevData) => [...prevData, ...apiData]);
      } catch (error) {
        setError(error.message);
      }

      setIsLoading(false);
    };

    fetchDataFromApi();
  }, [page]);

  const handleScroll = () => {
    const chatList = document.getElementById("chatList");
    if (chatList) {
      const isAtBottom =
        chatList.scrollHeight - chatList.scrollTop === chatList.clientHeight;
      if (isAtBottom && !isLoading && !isFetchingMore) {
        setIsFetchingMore(true);
        setPage((prevPage) => prevPage + 1);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="layout">
        <div className="header_section">
          <Header />
          <div className="chat_container" id="chatList">
            <ul className="chat_list">
              {data.chats &&
                data.chats.map((chat) => (
                  <li key={chat.id}>
                    <Chat message={chat.message} image={chat.sender.image} />
                  </li>
                ))}
              {isLoading && <li>Loading...</li>}
            </ul>
          </div>
        </div>
        <div className="footer_section"></div>
      </div>
    </>
  );
}

export default App;
