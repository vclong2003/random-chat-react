import { useContext } from "react";
import MenuItem from "./menuItem";
import styles from "./styles.module.css";
import { Container, Image } from "react-bootstrap";
import { UserContext } from "../..";
import Avatar from "../avatar";
import { Link } from "react-router-dom";

const menuItems = [
  {
    name: "Home",
    url: "/",
    icon: require("../../assets/icons/home.svg").default,
  },
  {
    name: "Explore",
    url: "#",
    icon: require("../../assets/icons/explore.svg").default,
  },
  {
    name: "Notifications",
    url: "#",
    icon: require("../../assets/icons/notification.svg").default,
  },
  {
    name: "Messages",
    url: "#",
    icon: require("../../assets/icons/message.svg").default,
  },
  {
    name: "Profile",
    url: "/profile",
    icon: require("../../assets/icons/profile.svg").default,
  },
];

export default function NavigationPane() {
  const { username, avatarUrl } = useContext(UserContext);
  return (
    <Container fluid className={styles.container}>
      <Container fluid className={styles.logoContainer}>
        {/* <Image
          className={styles.logo}
          alt=""
          src={require("../../assets/icons/xLogo.png")}
        /> */}
      </Container>

      <Container fluid className={styles.menuContainer}>
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            name={item.name}
            url={item.url}
            icon={item.icon}
          />
        ))}
      </Container>

      <Container className={styles.divider} />

      <Link
        to="/profile"
        about="Your profile"
        className={styles.accountContainer}>
        <div className={styles.avatarContainer}>
          <Avatar url={avatarUrl} />
        </div>
        <div className={styles.username}>{username}</div>
      </Link>
    </Container>
  );
}
