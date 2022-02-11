import './ChatWindow.css';
import SearchIcon from '@material-ui/icons/Search'
import AttachFileIcon from '@material-ui/icons/AttachFile'
import MoreVertIcon from '@material-ui/icons/MoreVert'


export default function ChatWindow() {
  return (
    <div className="chatWindow">
      <div className="chatWindow--header">
        <div className="chatWindow--headerinfo">
          <img className="chatWindow--avatar" src="https://images.vexels.com/media/users/3/145908/raw/52eabf633ca6414e60a7677b0b917d92-criador-de-avatar-masculino.jpg" />
          <div className="chatWindow--name">Teste</div>
        </div>

        <div className="chatWindow--headerbuttons">
          <div className="chatWindow--btn">
            <SearchIcon style={{ color: '#54656f' }}/>
          </div>
          <div className="chatWindow--btn">
            <AttachFileIcon style={{ color: '#54656f' }}/>
          </div>
          <div className="chatWindow--btn">
            <MoreVertIcon style={{ color: '#54656f' }}/>
          </div>
        </div>
      </div>

      <div className="chatWindow--body">

      </div>
      <div className="chatWindow--footer">

      </div>
    </div>
  )

}