import Head from "next/head";
import Header from "@/components/header/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Baptiste LABAUNE - BLab.</title>
        <meta
          name="description"
          content="Site internet de Baptiste LABAUNE"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </>
  );
}
