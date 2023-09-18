import { Image, Ratio } from "react-bootstrap";

export default function Avatar({ url }) {
  return (
    <Ratio aspectRatio="1x1">
      <Image fluid roundedCircle src={url} />
    </Ratio>
  );
}
