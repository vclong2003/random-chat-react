import { Container } from "react-bootstrap";
import styles from "./styles.module.css";
import Avatar from "../../components/avatar";

export default function Home() {
  return (
    <Container fluid className={styles.container}>
      <Container fluid className={styles.pageTitle}>
        Home
      </Container>
      <Container fluid className={styles.postContainer}>
        <div className={styles.postInputContainer}>
          <div className={styles.postInputAvatar}>
            <Avatar url="https://picsum.photos/200" />
          </div>
          <input
            type="text"
            placeholder="What’s happening?"
            className={styles.postTextInput}
          />
        </div>
        <div className={styles.postButtonsContainer}>
          <img
            alt=""
            src={require("../../assets/icons/imageUpload.png")}
            className={styles.imageUploadIcon}
          />

          <button className={styles.postButton}>Tweet</button>
        </div>
      </Container>
    </Container>
  );
}
