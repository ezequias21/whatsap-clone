import Camera from "@material-ui/icons/CameraAlt";

export default function MessageImageReply({
  sendDate,
  userName,
  srcImage,
  isMy,
}) {
  return (
    <div
      className={`message--line message--last ${isMy ? 'my' : ''}`}
      style={{ justifyContent: isMy ? "flex-end" : ''}}
    >
      <div className={`message--item ${isMy ? 'message--baloon-right' : 'message--baloon-left'}`}>
        <div className="message--img">
          <img src={srcImage} />
        </div>
        <div className="message--date message--img-date">{sendDate}</div>
      </div>
    </div>
  );
}
