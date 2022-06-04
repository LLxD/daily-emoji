import { useState, useEffect } from "react";
import Emoji from "../components/Emoji";
import styles from "../styles/Home.module.css";

const DailyEmoji = ({ isLoaded, randomEmoji, getRandomEmoji }) => {
  const [loadingEmoji, setLoadingEmoji] = useState("&#128512;");
  const [finishedAnimation, setFinishedAnimation] = useState(false);
  const [timeLeft, setTimeLeft] = useState(5);

  const loadingEmojis = [
    { htmlCode: ["&#129315;"] },
    { htmlCode: ["&#128538;"] },
    { htmlCode: ["&#128071;"] },
    { htmlCode: ["&#9996;"] },
    { htmlCode: ["&#129310;"] },
    { htmlCode: ["&#128406;"] },
  ];

  useEffect(() => {
    if (timeLeft === 0) {
      setFinishedAnimation(true);
      setTimeLeft(null);
    }
    if (!timeLeft) return;
    const intervalId = setInterval(() => {
      setLoadingEmoji(getRandomEmoji(loadingEmojis));
      setTimeLeft((timeLeft) => timeLeft - 1);
    }, 333);
    return () => clearInterval(intervalId);
  }, [getRandomEmoji, loadingEmojis, timeLeft]);

  return (
    <div>
      <h1 className={styles.title}>Here you go!</h1>
      {isLoaded && finishedAnimation ? (
        <Emoji emoji={randomEmoji} />
      ) : (
        <Emoji emoji={loadingEmoji} />
      )}
    </div>
  );
};

export default DailyEmoji;
