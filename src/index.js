import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { Container, Form } from "react-bootstrap";
import styles from "./styles.module.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Container fluid className={styles.container}>
      <Container fluid className={styles.messageContainer}>
        {/* Message */}
        <MessageItem />
        <MessageItem />
      </Container>
      <Form className={styles.textInputContainer}>
        <input type="text" className={styles.msgInput} />
        <button type="submit" className={styles.sendBtn}>
          Send
        </button>
      </Form>
    </Container>
  </React.StrictMode>
);

function MessageItem() {
  return (
    <Container fluid className={styles.message}>
      <div className={styles.msgInfo}>
        <div>VCL</div>
        <div>2023-10-09, 1605</div>
      </div>
      <div style={{ width: "100%", height: "20px" }} />
      <div className={styles.msgContent}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptates, nesciunt, quibusdam, voluptatum eaque quod consequatur
        voluptate quia quae asperiores quos. Quisquam voluptates, nesciunt
        voluptatum eaque quod consequatur voluptate quia quae asperiores quos.
      </div>
    </Container>
  );
}

reportWebVitals();
