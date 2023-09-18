import { Image } from "react-bootstrap";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

export default function MenuItem({ name, url, icon }) {
  return (
    <Link className={styles.container} to={url}>
      <Image alt="" src={icon} className={styles.icon} />
      <div className={styles.name}>{name}</div>
    </Link>
  );
}
