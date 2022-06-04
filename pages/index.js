import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import "animate.css";
import DailyEmoji from "../components/DailyEmoji";

export default function Home() {
  const UrlToFetch =
    "https://emojihub.herokuapp.com/api/all/category_smileys_and_people";

  const [emoji, setEmoji] = useState([{ htmlCode: "" }]);

  const [isLoaded, setIsLoaded] = useState(false);
  const [wantToSee, setWantToSee] = useState(false);

  const getRandomEmoji = (arrayOfEmojis) => {
    const htmlCode =
      arrayOfEmojis[Math.floor(Math.random() * arrayOfEmojis.length)].htmlCode;
    if (htmlCode.length === 1) {
      return htmlCode;
    } else {
      return htmlCode[0];
    }
  };

  const fetchEmoji = () => {
    fetch(UrlToFetch)
      .then((res) => res.json())
      .then((emoji) => setEmoji(emoji))
      .then(() => setIsLoaded(true));
  };

  useEffect(() => {
    fetchEmoji();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Daily Emoji</title>
        <meta name="description" content="Get your daily emoji" />
        <link rel="icon" href="" />
      </Head>

      <main className={styles.main}>
        {wantToSee ? (
          <DailyEmoji
            isLoaded={isLoaded}
            randomEmoji={getRandomEmoji(emoji)}
            getRandomEmoji={getRandomEmoji}
          />
        ) : (
          <h1
            style={{ cursor: "pointer" }}
            onClick={() => setWantToSee(true)}
            className={styles.title}
          >
            What&apos;s my daily emoji?
          </h1>
        )}
      </main>
    </div>
  );
}
