import './App.css';
import SearchIcon from '@material-ui/icons/Search';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useState } from 'react';
import ChatListItem from './components/chatListItem.js'
import ChatIntro from './components/ChatIntro';
import ChatWindow from './components/ChatWindow';

function App() {

  /*   const [chatlist, setChatList] = useState([{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]) */
  const [chatlist, setChatList] = useState([{
    chatId: 1,
    user: "Almeida",
    image: "https://www.w3schools.com/w3images/avatar6.png",
  },
  {
    chatId: 2,
    user: "Santos Otávio",
    image: "https://images.vexels.com/media/users/3/145908/raw/52eabf633ca6414e60a7677b0b917d92-criador-de-avatar-masculino.jpg",
  },
  {
    chatId: 3,
    user: "São Lima",
    image: "https://cdn-icons-png.flaticon.com/512/194/194938.png",
  }])
  const [activeChat, setActiveChat] = useState({})

  return (

    <div className="app-window">

      <div className="app-container">

        <div className="sidebar">
          <header>
            <img className="header--avatar" src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt="avatar" />
            <div className="header--buttons">
              <div className="header-btn">
                <DonutLargeIcon style={{ color: '#54656f' }} />
              </div>
              <div className="header-btn">
                <ChatIcon style={{ color: '#54656f' }} />
              </div>
              <div className="header-btn">
                <MoreVertIcon style={{ color: '#54656f' }} />
              </div>
            </div>
          </header>
          <div className="search">
            <div className="search--input">
              <SearchIcon fontSize="small" style={{ color: '#54656f' }} />
              <input type="search" placeholder="Pesquisar ou iniciar uma nova conversa" />
            </div>
          </div>
          <div className="chatlist">

            {chatlist.map((chat, key) => (
              <ChatListItem
                key={key}
                data={chat}
                active={activeChat.chatId === chatlist[key].chatId}
                onClick={() => setActiveChat(chatlist[key])}
              />
            ))
            }
          </div>
        </div>
        <div className="contentarea">

          {activeChat.chatId !== undefined &&
            <ChatWindow />
          }

          {activeChat.chatId === undefined &&
            <ChatIntro />
          }

        </div>

      </div>


    </div>
  );
}

export default App;
