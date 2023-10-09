import { Container } from "react-bootstrap";
import styles from "./styles.module.css";
import Tweet from "../../components/tweet";
import { useContext } from "react";
import { UserContext } from "../..";
import Post from "./post";

export default function Home() {
  const user = useContext(UserContext);

  return (
    <Container fluid className={styles.container}>
      <Container fluid className={styles.pageTitle}>
        Home
      </Container>

      {/* Post */}
      <Post />

      <Container fluid className={styles.tweetContainer}>
        <Tweet />
      </Container>
    </Container>
  );
}
