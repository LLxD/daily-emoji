import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import "animate.css";

export default function Home() {
  const UrlToFetch = "https://emojihub.herokuapp.com/api/all";

  const [emoji, setEmoji] = useState([{ htmlCode: "" }]);

  const fetchEmoji = async () => {
    const fetchedEmojiArray = fetch(UrlToFetch).then((res) => res.json());
    return fetchedEmojiArray;
  };

  useEffect(() => {
    async function fetchData() {
      const myEmojis = await fetchEmoji();
      setEmoji(myEmojis);
      console.log(emoji);
    }
    fetchData();
  }, [emoji]);
  return (
    <div className={styles.container}>
      <Head>
        <title>Daily Emoji</title>
        <meta name="description" content="Get your daily emoji" />
        <link rel="icon" href="" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <p
          className={
            styles.description +
            " animate__animated animate__tada animate__delay-4s"
          }
          dangerouslySetInnerHTML={{ __html: emoji[0].htmlCode }}
        ></p>

        <div className={styles.grid}></div>
      </main>

      <footer className={styles.footer}>
        <a href="http://www.llxd.ml" target="_blank" rel="noopener noreferrer">
          Check me out{" "}
        </a>
      </footer>
    </div>
  );
}
