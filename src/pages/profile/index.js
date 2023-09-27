import { Container, Image } from "react-bootstrap";
import styles from "./styles.module.css";
import Avatar from "../../components/avatar";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

export default function Profile() {
  const queryClient = useQueryClient();

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ["user"] }, { retry: false });
  }, []);

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
          <div className={styles.name}>Vu Cong Long</div>
          <div className={styles.bio}>
            Bio Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <div className={styles.followCountContainer}>
            <div className={styles.followCount}>
              <span className={styles.followNumber}>100</span> Following
            </div>
            <div style={{ width: "10px" }} />
            <div className={styles.followCount}>
              <span className={styles.followNumber}>50</span> Followers
            </div>
          </div>
        </Container>
      </Container>
    </Container>
  );
}
