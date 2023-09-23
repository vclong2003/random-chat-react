import { Container, Image } from "react-bootstrap";
import styles from "./styles.module.css";
import Avatar from "../../components/avatar";

export default function Profile() {
  return (
    <Container fluid className={styles.container}>
      <Container fluid className={styles.pageTitle}>
        Your account
      </Container>
      <Container fluid className={styles.infoContainer}>
        <div
          className={styles.imgContainer}
          style={{ backgroundImage: "https://picsum.photos/600/200" }}>
          <Image
            src="https://picsum.photos/600/200"
            className={styles.coverImg}
          />
          <div className={styles.avatarContainer}>
            <Avatar url="https://picsum.photos/200/200" />
          </div>
        </div>
      </Container>
    </Container>
  );
}
