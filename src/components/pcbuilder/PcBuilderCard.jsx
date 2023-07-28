import Link from "next/link";

const PcBuilderCard = ({ category }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 lg:w-24 h-10 lg:h-24 bg-gray-200 flex items-center justify-center rounded">
        <p className="text-2xl lg:text-5xl text-primary">{category?.icon}</p>
      </div>
      <div>
        <p className="text-base lg:text-2xl">{category?.category}</p>
        <p className="text-xs lg:text-base bg-gray-200 rounded-sm px-1 text-center">
          Required
        </p>
      </div>
      <div className="grow h-2 lg:h-3 bg-gray-200"></div>
      <Link href={`/category/product/${category.category}`}>
        <p className="px-5 py-2 hover:bg-primary hover:text-white border border-primary rounded-sm transition-all duration-200 ease-in-out">
          Choose
        </p>
      </Link>
    </div>
  );
};

export default PcBuilderCard;
