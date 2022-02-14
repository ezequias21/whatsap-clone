import "./Message.css";
import Check from "@material-ui/icons/Check";
import DoneAll from "@material-ui/icons/DoneAll";

export default function Message(key, message) {
  return (
    <>
      <div className="message--line">
        <div className="message--item message--baloon-left message--my">
          <div className="message--text">Olá, tudo bem?</div>
          <div className="message--date">19:00</div>
        </div>
      </div>

      <div className="message--line">
        <div className="message--item message--my">
          <div className="message--text">Olá, tudo bem?</div>
          <div className="message--date">19:00</div>
        </div>
      </div>

      <div className="message--line">
        <div className="message--item message--baloon-right">
          <div className="message-user">Fernanda</div>
          <div className="message--text">Olá, tudo bem?</div>
          <div className="message--date">19:00</div>
        </div>
      </div>

      <div className="message--line message--last">
        <div className="message--item message--baloon-left message--my">
          <div className="message--reply--container">
            <div className="somber"></div>
              <div className="message--reply">
                <div className="message-user">Fernanda</div>
                <div className="message--text">
                  Olá, tudo bem? Veja lá o que vc disse seu
                </div>
              
            </div>
          </div>

          <div className="message--text">Olá, tudo bem?</div>
          <div className="message--date">19:00</div>
        </div>
      </div>

      <div className="message--line message--last">
        <div className="message--item message--baloon-left message--my">
          <div className="message--img">
            <img src="https://i.pinimg.com/originals/0b/7b/9b/0b7b9b4d0f2e4877f6cc5f105212a8ca.jpg" />
          </div>
          <div className="message--date message--img-date">19:00</div>
        </div>
      </div>

      <div className="message--line message--last">
        <div className="message--item message--baloon-left message--my">
          <div className="message--img">
            <img src="https://img.quizur.com/f/img5d5ab1fc8ec303.06352000.jpg?lastEdited=1566224898" />
          </div>
          <div className="message--date message--img-date">19:00</div>
        </div>
      </div>
    </>
  );
}
