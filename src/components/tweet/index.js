import Avatar from "../avatar";
import styles from "./styles.module.css";
import { Container, Image } from "react-bootstrap";

export default function Tweet() {
  return (
    <Container fluid className={styles.container}>
      <div className={styles.leftCol}>
        <Avatar url="https://picsum.photos/200" />
      </div>
      <div className={styles.rightCol}>
        <div className={styles.username}>Devon Lane</div>
        <div className={styles.time}>17/9/2023 22:13</div>
        <div className={styles.tweetText}>Tom is in a big hurry.</div>
        <Image
          className={styles.tweetImg}
          alt=""
          src="https://picsum.photos/seed/picsum/1000/500"
        />
        <div className={styles.tweetActionButtons}>
          {/* Comments */}
          <div className={styles.actionBtnContainer}>
            <Image
              alt=""
              src={require("../../assets/icons/comment.svg").default}
              className={styles.actionBtnIcon}
            />
            <div className={styles.actionBtnCount}>61</div>
          </div>
          {/* Likes */}
          <div className={styles.actionBtnContainer}>
            <Image
              alt=""
              src={require("../../assets/icons/like.svg").default}
              className={styles.actionBtnIcon}
            />
            <div className={styles.actionBtnCount}>10</div>
          </div>
        </div>
      </div>
    </Container>
  );
}
