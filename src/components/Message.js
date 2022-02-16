import "./Message.css";
import MessageImageReply from "./MessagesBox/MessageImageReply";
import MessageSimpleReply from "./MessagesBox/MessageSimpleReply";
import MessageImage from "./MessagesBox/MessageImage";
import MessageSimple from "./MessagesBox/MessageSimple";

export default function Message(key, message) {
  return (
    <>

      <MessageSimpleReply
        text={"Olá, tudo bem?"}
        reply={"sdfdsfsdsdfsdfsdfsdfdsfdfdf"}
        sendDate={"19:00"}
        userName={"Você"}
        srcImage={
          "https://i.pinimg.com/originals/0b/7b/9b/0b7b9b4d0f2e4877f6cc5f105212a8ca.jpg"
        }
        isMy={true}
      />

      <MessageSimpleReply
        text={"Olá, tudo bem?"}
        reply={"sdfdsfsdsdfsdfsdfsdfdsfdfdf"}
        sendDate={"19:00"}
        userName={"Você"}
        srcImage={
          "https://i.pinimg.com/originals/0b/7b/9b/0b7b9b4d0f2e4877f6cc5f105212a8ca.jpg"
        }
        isMy={false}
      />

      <MessageImageReply
        text={"Olá, tudo bem?"}
        sendDate={"19:00"}
        userName={"Você"}
        srcImage={
          "https://i.pinimg.com/originals/0b/7b/9b/0b7b9b4d0f2e4877f6cc5f105212a8ca.jpg"
        }
        isMy={true}
      />

      <MessageImageReply
        text={
          "sasssssssssssssssssssssssssssssssssssssssssssssssssssssssasdsdsddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"
        }
        sendDate={"19:00"}
        userName={"Josiel Lacerda"}
        srcImage={
          "https://i.pinimg.com/originals/0b/7b/9b/0b7b9b4d0f2e4877f6cc5f105212a8ca.jpg"
        }
        isMy={false}
      />

      <MessageImage
        sendDate={"12:25"}
        userName={"Bosta bosta"}
        srcImage={
          "https://img.quizur.com/f/img5d5ab1fc8ec303.06352000.jpg?lastEdited=1566224898"
        }
        baloon={true}
        isMy={true}
      />
      <MessageImage
        sendDate={"12:25"}
        userName={"Bosta bosta"}
        srcImage={
          "https://i.pinimg.com/originals/0b/7b/9b/0b7b9b4d0f2e4877f6cc5f105212a8ca.jpg"
        }
        isMy={false}
      />
      <MessageSimple
        userName={"Bosta bosta"}
        text={"Seu boiola"}
        sendDate={"12:25"}
        isMy={true}
      />
      <MessageSimple
        text={"Seu boiola"}
        sendDate={"12:25"}
        isMy={false}
      />
      <MessageSimple
        text={"Seu boiola"}
        sendDate={"12:25"}
        isMy={false}
      />
    </>
  );
}
