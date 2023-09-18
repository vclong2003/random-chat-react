import styles from "./styles.module.css";
import { Button, Container, Form, Image } from "react-bootstrap";

export default function Login() {
  return (
    <Container className={styles.container}>
      <Image
        className={styles.logo}
        alt=""
        src={require("../../assets/icons/twitterLogo.svg").default}
      />
      <Form className={styles.loginForm}>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Enter username"
            className={styles.formInput}
          />
        </Form.Group>

        <Form.Group>
          <Form.Control
            type="password"
            placeholder="Enter password"
            className={styles.formInput}
          />
        </Form.Group>

        <Button type="submit" className={styles.loginBtn}>
          Next
        </Button>
      </Form>
    </Container>
  );
}
