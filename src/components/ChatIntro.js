import './ChatIntro.css';
import Computer from '@material-ui/icons/Computer';

export default function ChatIntro() {
  return (
    <div className="chatIntro--container">

      <div className="chatIntro">
        <img className="chatIntro--image" src="https://whatsapp-clone-web.netlify.app/static/media/intro-connection-light.5690d473.jpg" />
        <h1>Mantenha seu celular conectado</h1>
        <div>
          <h2>O WhatsApp conecta ao seu celular para sincronizar suas mensagens. Para reduzir o uso de dados, conecte seu celular a uma rede Wi-Fi.</h2>
        </div>


        <div className="chatIntro--line"></div>


        <div className="chatIntro--download-section">
          <div className="chatIntro-icon">
            <Computer fontSize="small" style={{ color: '#54656f' }} />
          </div>
          <div className="chatIntro-message">Faça chamadas a partir de um computador com o WhatsApp para Windows. <span className="chatIntro--download"><a>Baixe aqui</a></span></div>
        </div>

      </div>
    </div>
  )
}