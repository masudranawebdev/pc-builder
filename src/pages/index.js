import FeatureSection from "@/components/feature/FeatureSection";
import Herosection from "@/components/herosection/Herosection";
import ProductSection from "@/components/product/ProductSection";
import SlidingText from "@/components/slidingtext/SlidingText";
import RootLayout from "@/layout/RootLayout";
import Head from "next/head";

export default function HomePage({ products }) {
  return (
    <main>
      <Head>
        <title>Pc-builder</title>
      </Head>
      <div>
        <Herosection />
        <SlidingText />
        <FeatureSection />
        <ProductSection products={products} />
      </div>
    </main>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async () => {
  const res = await fetch("https://pc-builder-client-rho.vercel.app/api/db");
  const data = await res.json();
  const shuffledProducts = data?.products.sort(() => Math.random() - 0.5);
  const randomProducts = shuffledProducts.slice(0, 10);
  return {
    props: {
      products: randomProducts,
    },
  };
};
