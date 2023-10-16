import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { Container, Form } from "react-bootstrap";
import { io } from "socket.io-client";
import styles from "./styles.module.css";

const socket = io("https://vcl-random-chat.onrender.com");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

let socketId = "";

socket.on("connect", () => {
  console.log("Connected");
  socketId = socket.id;
});

function App() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [ready, setReady] = useState(false);

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
    socket.on("ready", () => {
      setReady(true);
    });

    return () => {
      socket.off("ready");
    };
  });

  useEffect(() => {
    socket.on("waiting", () => {
      setReady(false);
    });

    return () => {
      socket.off("waiting");
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
        {ready ? (
          <>
            <input
              type="text"
              className={styles.msgInput}
              value={message}
              onChange={(evt) => {
                setMessage(evt.target.value);
              }}
            />
            <button type="submit" className={styles.sendBtn} disabled={!ready}>
              Send
            </button>
          </>
        ) : (
          "Waiting for another user to join..."
        )}
      </Form>
    </Container>
  );
}

function MessageItem({ sender, time, content }) {
  time = new Date(time).toLocaleTimeString();

  return (
    <Container
      fluid
      className={styles.message}
      style={{
        backgroundColor: sender === socketId ? "#43d6f0" : "",
      }}>
      <div className={styles.msgInfo}>
        <div>{sender === socketId ? "You" : "Anonymous"}</div>
        <div>{time}</div>
      </div>
      <div style={{ width: "100%", height: "20px" }} />
      <div className={styles.msgContent}>{content}</div>
    </Container>
  );
}

reportWebVitals();
