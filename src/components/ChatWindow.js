import "./ChatWindow.css";
import Message from  './Message'
import SearchIcon from "@material-ui/icons/Search";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import CloseIcon from "@material-ui/icons/Close";
import SendIcon from "@material-ui/icons/Send";
import MicIcon from "@material-ui/icons/Mic";
import EmojiPicker from "emoji-picker-react";

import { useState, useContext, useEffect } from "react";
import { EmojiNature } from "@material-ui/icons";

export default function ChatWindow({ chat, toDisplayMoreInfo }) {
  
  const [emojiOpen, setEmojiOpen] = useState(false);
  const [text, setText] = useState("");
  const [caretPosition, setCaretPosition] = useState(0);
  const [messages, setMessages] = useState([
    {message: "Tudo bem?", date: "12/09/1998"}, 
   /*  {message: "Tudo bem?", date: "12/09/1998"},
    {message: "Tudo bem?", date: "12/09/1998"} */
  ])

  const handleEmojiClick = (e, emojiObject) => {
    let array_text = text.split("");
    array_text.splice(caretPosition, 0, emojiObject.emoji);
    setText(array_text.join(""));
  };
  const handleSendClick = () => {

  }
  return (
    <div className="chatWindow">
      <div className="chatWindow--header">
        <div className="chatWindow--headerinfo">
          <img className="chatWindow--avatar" src={chat.image} />
          <div className="chatWindow--info-contact">
            <div className="chatWindow--name"> {chat.user}</div>
            {toDisplayMoreInfo && (
              <p>Clique aqui para obter informações do contato</p>
            )}
          </div>
        </div>

        <div className="chatWindow--headerbuttons">
          <div className="chatWindow--btn">
            <SearchIcon style={{ color: "#54656f" }} />
          </div>
          <div className="chatWindow--btn">
            <AttachFileIcon style={{ color: "#54656f" }} />
          </div>
          <div className="chatWindow--btn">
            <MoreVertIcon style={{ color: "#54656f" }} />
          </div>
        </div>
      </div>

      <div className="chatWindow--body">

              {messages.map((message, key)=>(
                <Message 
                  key={key}
                  message={message}
                />
              ))}

      </div>

      <div
        className="chatWindow-emojiArea"
        style={{ height: emojiOpen ? "200px" : "0" }}
      >
        <EmojiPicker
          disableSearchBar
          disableSkinTonePicker
          pickerStyle={{ width: "100%" }}
          preload={true}
          groupNames={{
            smileys_people: "Smileys e pessoas",
            animals_nature: "Animais e natureza",
            food_drink: "Comidas e bebidas",
            travel_places: "Viagens e lugares",
            activities: "Atividades",
            objects: "Objetos",
            symbols: "Símbolos",
            flags: "Bandeiras",
            recently_used: "Recentes",
          }}
          onEmojiClick={handleEmojiClick}
        />
      </div>
      <div className="chatWindow--footer">
        <div className="chatWindow--pre">
          <div
            className={`chatWindow--btn ${
              emojiOpen
                ? "chatWindow--btn-openState"
                : "chatWindow--btn-closeState"
            }`}
          >
            <CloseIcon
              style={{ color: "#54656f" }}
              onClick={() => setEmojiOpen(false)}
            />
          </div>
          <div className="chatWindow--btn">
            <InsertEmoticonIcon
              style={{
                color: emojiOpen ? "var(--color-picker-border)" : "#54656f",
              }}
              onClick={() => setEmojiOpen(true)}
            />
          </div>
        </div>

        <div className="chatWindow--inputarea">
          <input
            placeholder="Mensagem"
            className="chatWindow--input"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyUp={(e) => setCaretPosition(e.target.selectionStart)}
            onClick={(e) => setCaretPosition(e.target.selectionStart)}
          />
        </div>
        <div className="chatWindow--pos">
          { text === '' &&
            <div className="chatWindow--btn">
              <MicIcon style={{ color: "#54656f" }} />
            </div>
          }
          {
            text !== '' &&
            <div onClick="handleSendClick" className="chatWindow--btn">
              <SendIcon style={{ color: "#54656f" }} />
            </div>
          }
        </div>
      </div>
    </div>
  );
}
