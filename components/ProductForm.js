import { useState, useContext, useEffect } from "react";
import { formatter } from "../utils/helpers";
import ProductOptions from "./ProductOptions";
import { CartContext } from "../context/shopContext";
import { RiErrorWarningLine } from "@react-icons/all-files/ri/RiErrorWarningLine";
import { CgShoppingCart } from "@react-icons/all-files/cg/CgShoppingCart";
import { FiHeart } from "@react-icons/all-files/fi/FiHeart";
import { FaHeart } from "@react-icons/all-files/fa/FaHeart";
import { useUser } from "../utils/useUser";
import { supabase } from "../utils/supabase-client";

export default function ProductForm({ product, inventory }) {
  
  const { addToCart } = useContext(CartContext);
  

  const { session, user, signOut } = useUser();

  
 
  

  

  


  

  const allVariantOptions = product.variants.edges?.map((variant) => {
    const allOptions = {};

    variant.node.selectedOptions.map((item) => {
      allOptions[item.name] = item.value;
    });

    return {
      id: variant.node.id,
      title: product.title,
      handle: product.handle,
      image: variant.node.image?.originalSrc,
      options: allOptions,
      variantTitle: variant.node.title,
      variantPrice: variant.node.priceV2.amount,
      variantQuantity: 1,
    };
  });

  const defaultValues = {};
  product.options.map((item) => {
    defaultValues[item.name] = item.values[0];
  });

  const [selectedVariant, setSelectedVariant] = useState(allVariantOptions[0]);
  const [selectedOptions, setSelectedOptions] = useState(defaultValues);

  function setOptions(name, value) {
    setSelectedOptions((prevState) => {
      return { ...prevState, [name]: value };
    });

    const selection = {
      ...selectedOptions,
      [name]: value,
    };

    allVariantOptions.map((item) => {
      if (JSON.stringify(item.options) === JSON.stringify(selection)) {
        setSelectedVariant(item);
      }
    });
  }

  return (
    <div className="border text-center bg-white rounded-2xl p-4 shadow-lg flex flex-col w-full lg:w-1/3">
      <h1 className="text-2xl mt-5 font-bold">{product.title}</h1>
      <span className="pb-3 mt-2">
        {formatter.format(product.variants.edges[0].node.priceV2.amount)}
      </span>
      <div className="w-auto mx-5 border-b-2">

      </div>
      <p className="text-xs font-light text-gray-400 mt-1 mb-5">Description</p>
      <p className="text-center mb-2 space-y-8 md:space-x-4 lg:space-x-8 max-w-3xl w-11/12 mx-auto">
        {product.description}
      </p>
      {inventory === 0 && (
        <div className="mt-1 flex items-center justify-center text-center ml-3 mb-2 text-lg text-red-700">
          <RiErrorWarningLine />
          <h1 className="ml-2">Sold Out</h1>
        </div>
      )}
      {inventory >= 1 && (
        <button
          onClick={() => {
            addToCart(selectedVariant);
          }}
          className="bg-green-200 rounded-lg text-center items-center justify-center flex text-black hover:shadow-lg  mb-1 px-2 py-3 mt-3 hover:bg-pink-200"
        >
          <CgShoppingCart className="mr-2" />
          Add To Cart
        </button>
      )}
      <div className="relative">
        <div className="flex flex-row">

       
        
        </div>
      </div>
    </div>
  );
}
