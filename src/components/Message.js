import "./Message.css";
import MessageImageReply from "./MessagesBox/MessageImageReply";
import MessageSimpleReply from "./MessagesBox/MessageSimpleReply";
import MessageImage from "./MessagesBox/MessageImage";
import MessageSimple from "./MessagesBox/MessageSimple";

export default function Message(key, message) {
  return (
    <>

    

     {/*  <MessageImage
        sendDate={"12:25"}
        userName={"Bosta bosta"}
        srcImage={
          "https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg"
        }
        baloon={true}
        isMy={true}
      />
      <MessageImage
        sendDate={"12:25"}
        userName={"Bosta bosta"}
        srcImage={
          "https://i0.wp.com/multarte.com.br/wp-content/uploads/2015/08/imagens-amor.jpg?fit=1680%2C1050&ssl=1"
        }
        isMy={false}
      />
      <MessageSimple
        text={"Olhe essas imagens!"}
        sendDate={"12:25"}
        isMy={true}
      />
      <MessageSimple
        userName={"Amigo"}
        text={"São incríveis!"}
        sendDate={"12:25"}
        isMy={false}
      /> */}

<MessageSimpleReply
        text={"Olá, tudo bem?"}
        reply={"Estou sim"}
        sendDate={"19:00"}
        userName={"Você"}
        srcImage={
          "https://i0.wp.com/multarte.com.br/wp-content/uploads/2015/08/imagens-amor.jpg?fit=1680%2C1050&ssl=1"
        }
        isMy={true}
      />

      <MessageSimpleReply
        text={"Olá, tudo bem?"}
        reply={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
        sendDate={"19:00"}
        userName={"Você"}
        srcImage={
          "https://i0.wp.com/multarte.com.br/wp-content/uploads/2015/08/imagens-amor.jpg?fit=1680%2C1050&ssl=1"
        }
        isMy={false}
      />

      <MessageImageReply
        text={"Olá, tudo bem?"}
        sendDate={"19:00"}
        userName={"Você"}
        srcImage={
          "https://i0.wp.com/multarte.com.br/wp-content/uploads/2015/08/imagens-amor.jpg?fit=1680%2C1050&ssl=1"
        }
        isMy={true}
      />

      <MessageImageReply
        text={
          "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
        sendDate={"19:00"}
        userName={"Almeida"}
        srcImage={
          "https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg"
        }
        isMy={false}
      />
    </>
  );
}
