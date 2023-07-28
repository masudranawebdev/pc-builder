import CategorySection from "@/components/category/CategorySection";
import RootLayout from "@/layout/RootLayout";

const CategoriesPage = ({ products }) => {
  return (
    <div className="px-1 md:main-container">
      <CategorySection products={products} />
    </div>
  );
};

export default CategoriesPage;
CategoriesPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export async function getStaticPaths() {
  const res = await fetch("http://localhost:3000/api/db");
  const data = await res.json();

  const paths = data?.products.map((product) => ({
    params: { category: product.category },
  }));

  return { paths, fallback: false };
}

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `http://localhost:3000/api/db?category=${params.category}`
  );
  const data = await res.json();
  return {
    props: {
      products: data.products,
    },
  };
};
