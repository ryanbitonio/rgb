import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ryan Bitonio</title>
        <meta name="description" content="Welcome to my portfolio!" />
      </Head>
      <Header />
    </div>
  );
}
