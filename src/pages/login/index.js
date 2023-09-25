import { useState } from "react";
import styles from "./styles.module.css";
import { Button, Container, Form, Image } from "react-bootstrap";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../api/auth";
import { signInWithGoogle } from "../../services/Firebase/Auth";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const queryString = new URLSearchParams(window.location.search);
  const destination = queryString.get("to") ?? "/";

  return (
    <Container className={styles.container}>
      <Image
        className={styles.logo}
        alt=""
        src={require("../../assets/icons/twitterLogo.svg").default}
      />
      <Form
        className={styles.loginForm}
        onSubmit={(evt) => {
          evt.preventDefault();
          signInWithGoogle(() => {
            console.log("success");
          });
        }}>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Enter username"
            className={styles.formInput}
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </Form.Group>

        <Form.Group>
          <Form.Control
            type="password"
            placeholder="Enter password"
            className={styles.formInput}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </Form.Group>

        <Button type="submit" className={styles.loginBtn}>
          Next
        </Button>
      </Form>
    </Container>
  );
}
