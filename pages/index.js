import Head from "next/head";
import { Container } from "../styles/Container";
import Header from "../components/Header";
import Main from "../components/Main";

export default function Home() {
  return (
    <Container>
      <video
        autoPlay
        playsInline
        muted
        loop
        src={"/videos/home-bg.mp4"}
        type="video/mp4"
      />

      <Head>
        <title>Ryan Bitonio</title>
        <meta name="description" content="Welcome to my portfolio!" />
      </Head>
      <Header />
      <Main />
    </Container>
  );
}
