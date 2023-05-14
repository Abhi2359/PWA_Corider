import { useEffect, useState } from "react";
import styles from "./App.css";
import { fetchData } from "./api/fetchData";
import Header from "./Header/Header";
import Chat from "./chatInput/Chat";
import ChatInput from "./chatInput/ChatInput";
import InfiniteScroll from "react-infinite-scroll-component";
import LazyLoad from "react-lazy-load";
const LazyChat = lazy(() => import("./chatInput/Chat"));

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const fetchDataFromApi = async () => {
    if (!hasMore) return;
    setIsLoading(true);

    try {
      const apiData = await fetchData(currentPage);

      const apiResponse = apiData.chats;

      if (apiResponse.length === 0) {
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
  }, [currentPage]);

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
            <InfiniteScroll
              dataLength={apiData.length}
              next={fetchDataFromApi}
              hasMore={hasMore}
              scrollThreshold={0.8}
              className="chat_list"
              loader={<h4 style={{ textAlign: "center" }}>Loading...</h4>}
            >
              <ul className="chat_list">
                {data.map((chat) => (
                  <li key={chat.id}>
                    <Suspense fallback={<div>Loading...</div>}>
                      <LazyChat
                        message={chat.message}
                        image={chat.sender.image}
                      />
                    </Suspense>
                  </li>
                ))}
              </ul>
            </InfiniteScroll>
          </div>
        </div>
        {/* <div>
          <footer className="footer">
            <ChatInput />
          </footer>
        </div> */}
      </div>
    </>
  );
}

export default App;
