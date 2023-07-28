import ProductCard from "./ProductCard";

const ProductSection = ({ products }) => {
  return (
    <div className="px-1 md:main-container py-10">
      <div className="mb-3 lg:mb-10">
        <h1 className="text-center font-bold text-lg lg:text-2xl">
          Featured Category
        </h1>
        <p className="text-center text-xs lg:text-base font-extralight text-gray-600">
          Get Your Desired Product from Featured Category!
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-1 lg:gap-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductSection;


