import Image from "next/image";

const PcBuilderCategoryCard = ({ product }) => {
  const {
    product_name,
    image,
    price,
    status,
    individual_rating,
    id,
    category,
  } = product;
  return (
    <div className="border my-2 flex flex-col lg:flex-row items-center gap-2 pb-2 px-4">
      <div>
        <Image src={image} alt={product_name} height={150} width={150} />
      </div>
      <div className="grow space-y-1">
        <h1 className="text-lg font-semibold">{product_name}</h1>
        <p>
          <strong>Rating:</strong> {individual_rating}
        </p>
        <p>
          <strong>Status:</strong>{" "}
          <span className="text-primary">{status}</span>
        </p>
        <p>
          <strong>Category:</strong> {category}
        </p>
      </div>
      <div className="space-y-2">
        <p>{price} ৳</p>
        <button className="bg-primary px-4 py-1 rounded-sm text-white">
          Add
        </button>
      </div>
    </div>
  );
};

export default PcBuilderCategoryCard;
