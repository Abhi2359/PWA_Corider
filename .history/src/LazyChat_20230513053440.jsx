const LazyChat = ({ message, image }) => {
    return (
      <div>
        <p>{message}</p>
        <img src={image} alt="" />
      </div>
    );
  };
  
  export default LazyChat;
  