
import './chatListItem.css'

export default function ChatListItem({ onClick, active, data }) {

  return (

 
      <div className={`chatListItem ${active ===true ? 'active' : ''} `} onClick={onClick}>
        <img className="chatListItem--avatar" src={data.image} />
        <div className="chatListItem--lines">

          <div className="chatListItem--line">
            <div className="chatListItem--name">{data.user}</div>
            <div className="chatListItem--date">12:31</div>
          </div>

          <div className="chatListItem--line">
            <div className="chatListItem--lastMsg">
              <p>The Icon component will display an icon from any icon font that supports ligatures. As a prerequisite, you must include one, such as the Material icon font in your project. Para usar um ícone, simplesmente coloque o nome do ícone (font ligature) com o componente Icon, por exemplo:</p>
            </div>
          </div>

        </div>
      </div>
 
  )

}

