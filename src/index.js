import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { Container, Form } from "react-bootstrap";
import { io } from "socket.io-client";
import styles from "./styles.module.css";

const socket = io("http://localhost:3001");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

socket.on("connect", () => {
  console.log("Connected");
});

function App() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const msgEnd = useRef(null);

  const handleSendMessage = (evt) => {
    evt.preventDefault();

    if (message === "") return;

    socket.emit("send-message", { msg: message });
    setMessage("");
  };

  useEffect(() => {
    socket.on("receive-message", (msg) => {
      setMessages(msg);
    });

    return () => {
      socket.off("receive-message");
    };
  });

  useEffect(() => {
    msgEnd.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Container fluid className={styles.container}>
      <Container fluid className={styles.messageContainer}>
        {/* Message */}
        {messages.map((msg, index) => {
          return (
            <MessageItem
              key={index}
              sender={msg.sender}
              time={msg.time}
              content={msg.content}
            />
          );
        })}
        <div ref={msgEnd} />
      </Container>
      <Form className={styles.textInputContainer} onSubmit={handleSendMessage}>
        <input
          type="text"
          className={styles.msgInput}
          value={message}
          onChange={(evt) => {
            setMessage(evt.target.value);
          }}
        />
        <button type="submit" className={styles.sendBtn}>
          Send
        </button>
      </Form>
    </Container>
  );
}

function MessageItem({ sender, time, content }) {
  return (
    <Container fluid className={styles.message}>
      <div className={styles.msgInfo}>
        <div>{sender}</div>
        <div>{time}</div>
      </div>
      <div style={{ width: "100%", height: "20px" }} />
      <div className={styles.msgContent}>{content}</div>
    </Container>
  );
}

reportWebVitals();
