import Head from 'next/head'
import React from "react";

import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Banner from "../components/home/Banner";
import MainView from "../components/home/MainView";

const Home: NextPage = () => {
  return (

    <div className={styles.container}>
      <Head>
        <title>HOME | SIMPLEBEE </title>
        <meta name="description" content="A better kind of honey." />
        <link rel="icon" href="/bee_logo.svg" />
      </Head>
      
      <div className="home-page">
      <div className="container page center">

      <MainView />

      </div>
    </div>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to FreemanBees!
        </h1>

        <p className={styles.description}>
          A Bee &amp; Honey Company.
        </p>

        <div className={styles.grid}>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className={styles.card}>
            <h2>JoJos links &rarr;</h2>
            <p>CardPlaceHolder1 text</p>
          </a>

          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className={styles.card}>
            <h2>Jennys links &rarr;</h2>
            <p>CardPlaceHolder2 text</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a> SIMPLEBEE </a>
      </footer>
    </div>
  )
}

export default Home
