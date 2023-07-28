import Link from "next/link";

const PcBuilderCard = ({ category }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="w-24 h-24 bg-gray-200 flex items-center justify-center rounded">
        <p className="text-5xl text-primary">{category?.icon}</p>
      </div>
      <div>
        <p className="text-2xl">{category?.category}</p>
        <p className="text-base bg-gray-200 rounded-sm px-1 text-center">
          Required
        </p>
      </div>
      <div className="grow h-3 bg-gray-200"></div>
      <Link href={`/category/product/${category.category}`}>
        <p className="px-5 py-2 hover:bg-primary hover:text-white border border-primary rounded-sm transition-all duration-200 ease-in-out">
          Choose
        </p>
      </Link>
    </div>
  );
};

export default PcBuilderCard;
