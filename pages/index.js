import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import { Container } from "../styles/Container";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Ryan Bitonio</title>
        <meta name="description" content="Welcome to my portfolio!" />
      </Head>
      <Header />
      <Main />
    </Container>
  );
}
