import RootLayout from "@/layout/RootLayout";
import Head from "next/head";

export default function HomePage() {
  return (
    <main>
      <Head>
        <title>Pc-builder</title>
      </Head>
    </main>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
