import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  return (
    <div className="bg-white z-0">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl mb-[50px] text-center font-extrabold text-pink-400 ">
          All Products
        </h2>
        <div className="mx-2 grid grid-cols-1 z-0 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products?.map((product) => (
            <ProductCard key={product.node.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
