import Camera from "@material-ui/icons/CameraAlt";



export default function MessageImageReply({text, sendDate, userName, srcImage, isMy}) {


  return (

    <div className={`message--line message--last ${isMy ? 'my' : ''}`}>
      <div className={`message--item ${isMy ? 'message--baloon-right' : 'message--baloon-left'}`}>
        <div className={`message--reply--container miscellaneous`}>
          
          <div className="message--reply">
            <div className="message-user">{userName}</div>
            <div className="messsage--reply-info">
              <Camera fontSize="small" /> <span>Foto</span>
            </div>
          </div>

          <img
            className="messsage--reply--img"
            src={srcImage}
          />
        </div>

        <div className="message--text">
            {text}
        </div>
        <div className="message--date">{sendDate}</div>
      </div>
    </div>
  );
}
