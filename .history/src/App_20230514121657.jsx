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
 
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  useEffect(() => {
    const fetchDataFromApi = async () => {
      setIsLoading(true);
      setData([])

      try {
        let allChats = [];

        let page = 1;
        let totalPages = 1;
      
      } catch (error) {
        setError(error.message);
      }

      setIsLoading(false);
    };

    fetchDataFromApi();
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
            {isLoading && <p>Loading...</p>}
          </div>
        </div>
        <div >
          <footer className="footer">
            <ChatInput />

          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
