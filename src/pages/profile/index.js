import { Container, Image } from "react-bootstrap";
import styles from "./styles.module.css";
import Avatar from "../../components/avatar";
import { useQueryClient } from "@tanstack/react-query";
import { useContext, useEffect } from "react";
import { UserContext } from "../..";

export default function Profile() {
  const { id, username, bio, followers, following } = useContext(UserContext);

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

        <Container fluid className={styles.info}>
          <div className={styles.name}>{username}</div>
          <div className={styles.bio}>{bio}</div>
          <div className={styles.followCountContainer}>
            <div className={styles.followCount}>
              <span className={styles.followNumber}>{following}</span> Following
            </div>
            <div style={{ width: "10px" }} />
            <div className={styles.followCount}>
              <span className={styles.followNumber}>{followers}</span> Followers
            </div>
          </div>
        </Container>
      </Container>
    </Container>
  );
}
