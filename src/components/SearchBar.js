import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDown from "@material-ui/icons/ArrowDownward";
import CloseIcon from "@material-ui/icons/Close";
import { useState, useRef } from "react";

export default function SearchBar({chatListItem, onSearchConverations}) {
  const [inputFocus, setInputFocus] = useState(false);
  const [text, setText] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const input = useRef(null);

  const handleInputFocus = () => {
    setInputFocus(true);
  };
  const handleInputBlur = () => {
    text === "" && setInputFocus(false);
  };

  const clearText = () => {
    if (input.current) {
      input.current.focus();
    }
    setText("");
  };
  
  const handleSearch = () => {
    let search = []
    chatListItem.forEach((chat, key)=>{
        if(chat.user.toLowerCase().includes(text.toLowerCase().trim())){
            search.push(chat)
        }
    })
    onSearchConverations(search)
  }

  return (
    <div className="search">
      <div className="search--input">
        <SearchIcon
          className="search--icon"
          fontSize="small"
          style={{ color: "#54656f", opacity: inputFocus ? "0" : "1" }}
        />

        <ArrowDown
          className={`arrowDown--icon ${inputFocus ? "rotate" : ""} `}
          fontSize="small"
          style={{ color: "var(--color-picker-border)" }}
        />
        <label className={`${inputFocus ? "" : "search--input-label"} `}>
          <input
            style={{ zIndex: 10 }}
            onFocus={(e) => handleInputFocus(e)}
            onBlur={(e) => handleInputBlur(e)}
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyUp={handleSearch}
            ref={input}
          />
        </label>
        {text !== "" && (
          <CloseIcon
            className="search--icon"
            fontSize="small"
            style={{
              position: "absolute",
              right: "10px",
              color: "#54656f",
              cursor: "pointer",
              zIndex: 1000,
            }}
            onClick={clearText}
          />
        )}
      </div>
    </div>
  );
}
