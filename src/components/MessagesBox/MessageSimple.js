import Check from "@material-ui/icons/Check";
import DoneAll from "@material-ui/icons/DoneAll";

export default function MessageImageReply({
  userName,
  text,
  sendDate,
  baloon,
  isMy,
}) {
  return (
    <div className={`message--line ${isMy ? "my" : ""}`}>
      <div
        className={`message--item ${
          isMy ? "message--baloon-right" : "message--baloon-left"
        }`}
      >
        <div className="message-user">{userName ? userName : ""}</div>
        <div className="message--text">{text}</div>
        <div className="message--date">{sendDate}</div>
      </div>
    </div>
  );
}
