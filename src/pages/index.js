import FeatureSection from "@/components/feature/FeatureSection";
import Herosection from "@/components/herosection/Herosection";
import SlidingText from "@/components/slidingtext/SlidingText";
import RootLayout from "@/layout/RootLayout";
import Head from "next/head";

export default function HomePage() {
  return (
    <main>
      <Head>
        <title>Pc-builder</title>
      </Head>
      <div>
        <Herosection />
        <SlidingText />
        <FeatureSection />
      </div>
    </main>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
