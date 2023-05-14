import LazyLoad from 'react-lazy-load';
import LazyChat from './LazyChat';

const LazyChatList = ({ data }) => {
  return (
    <ul className='chat_list'>
      {data && data.map((chat) => (
        <li key={chat.id}>
          <LazyLoad height={200} offsetVertical={100}>
            <LazyChat message={chat.message} image={chat.sender.image} />
          </LazyLoad>
        </li>
      ))}
    </ul>
  );
};

export default LazyChatList;
