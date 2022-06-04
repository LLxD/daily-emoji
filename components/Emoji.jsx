import styles from "../styles/Home.module.css";
import copy from "copy-to-clipboard";

const Emoji = ({ emoji }) => {
  return (
    <div
      onClick={() => copy()}
      className={
        styles.description +
        " animate__animated animate__tada animate__delay-2s"
      }
      dangerouslySetInnerHTML={{
        __html: emoji,
      }}
    ></div>
  );
};

export default Emoji;
