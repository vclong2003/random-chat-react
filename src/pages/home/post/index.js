import { Container } from "react-bootstrap";
import styles from "./styles.module.css";
import Avatar from "../../../components/avatar";
import { useState } from "react";
import postQueries from "../../../services/API/tweet";

export default function Post() {
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("");

  // const handleCreatePost = () => {
  //   setLoading(true);
  //   postQueries.post(
  //     content,
  //     () => {
  //       setLoading(false);
  //     },
  //     () => {
  //       setLoading(false);
  //     }
  //   );
  // };

  return (
    <Container fluid className={styles.postContainer}>
      <div className={styles.postInputContainer}>
        <div className={styles.postInputAvatar}>
          <Avatar url="https://picsum.photos/200" />
        </div>
        <textarea
          type="text"
          placeholder="What’s happening?"
          className={styles.postTextInput}
          value={content}
          onChange={(evt) => {
            setContent(evt.target.value);
          }}
        />
      </div>
      <div className={styles.postButtonsContainer}>
        <img
          alt=""
          src={require("../../../assets/icons/imageUpload.png")}
          className={styles.imageUploadIcon}
        />

        <button disabled={content.length < 10} className={styles.postButton}>
          Tweet
        </button>
      </div>
    </Container>
  );
}
