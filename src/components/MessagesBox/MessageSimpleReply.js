import Camera from "@material-ui/icons/CameraAlt";

export default function MessageImageReply({
  text,
  reply,
  sendDate,
  userName,
  isMy,
}) {
  return (

    <div
      className={`message--line message--last ${isMy ? "my" : ""}`}
      style={{ justifyContent: isMy ? "flex-end" : "flex-start" }}
    >
      <div className={`message--item ${isMy ? 'message--baloon-right' : 'message--baloon-left'}`}>
        <div className="message--reply--container">
          <div className="somber"></div>
          <div className="message--reply">
            <div className="message-user">{userName}</div>
            <div className="message--text">
              {text}
            </div>
          </div>
        </div>

        <div className="message--text">{reply}</div>
        <div className="message--date">{sendDate}</div>
      </div>
    </div>
  );
  
}
