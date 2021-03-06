import Head from "next/head";
import Banner from "../components/banner/banner";
import NavBar from "../components/nav/navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <NavBar username="hodhod212@yahoo.com" />
        <Banner
          title="Clifford the red dog"
          subTitle="A very cute dog"
          imgUrl="/static/clifford.webp"
        />
        {/*< Card/> */}

        <footer
          className={styles.footer}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 20,
            backgroundColor: "black",
            color: "white",
            fontFamily: "Sansita Swashed",
            marginBottom: -57,
          }}
        >
          &copy; 2022 Ali Ezadkhaha
        </footer>
      </div>
    </div>
  );
}
