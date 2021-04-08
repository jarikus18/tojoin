import Head from "next/head";
import { Home } from "containers";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>ToJoin</title>
      </Head>
      <Home />
    </>
  );
}
