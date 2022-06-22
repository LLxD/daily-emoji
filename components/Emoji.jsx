import styles from "../styles/Home.module.css";
import copy from "copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactTooltip from "react-tooltip";
import { useEffect } from "react";

const Emoji = ({ emoji }) => {
  const notify = () => toast("Copied to clipboard!");

  const copyToClipboard = () => {
    copy(document.querySelector("#emoji").innerHTML);
    notify();
  };

  useEffect(() => {
    let tooltip = document.querySelector("[data-tip]");
    ReactTooltip.show(tooltip);
  }, []);

  return (
    <>
      <div
        onClick={() => copyToClipboard()}
        className={
          styles.description +
          " animate__animated animate__tada animate__delay-2s"
        }
        dangerouslySetInnerHTML={{
          __html: emoji,
        }}
        id="emoji"
        data-tip="Click on it to copy <br>to your clipboard!"
      ></div>
      <ReactTooltip
        multiline
        type="light"
        place="bottom"
        effect="solid"
        delayShow={2500}
      />

      <ToastContainer
        position="top-right"
        autoClose={2000}
        theme="dark"
        pauseOnHover={false}
      />
    </>
  );
};

export default Emoji;
