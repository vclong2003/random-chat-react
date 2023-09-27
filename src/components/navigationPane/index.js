import MenuItem from "./menuItem";
import styles from "./styles.module.css";
import { Container, Image } from "react-bootstrap";

const menuItems = [
  {
    name: "Home",
    url: "#",
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
    url: "#",
    icon: require("../../assets/icons/profile.svg").default,
  },
];

export default function NavigationPane() {
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
    </Container>
  );
}
