import React from "react";
import DashedLine from "../components/atoms/DashedLine";
const ProductSidebar = ({ selectedCategory, onProductSelect }) => {
  return (
    //div info +list product
    <div className="w-full h-screen px-14 py-10">
      <div className="w-full">
        <h1 className="text-white text-4xl font-bold">
          {selectedCategory.name}
        </h1>
        <h4 className="mt-4 text-white text-lg font-medium">
          <p>{"13 lessons - 10h 12m of tutorial"}</p>
        </h4>

        <p className="mt-4 text-white text-sm justify-around">
          LemodemDSL-124sansfilN300ADSL2+offre des vitesses sans fil qui sont
          beaucoup plus rapides que 802.11g, vous permettant de maximiser les
          performances sans filet rester connecté où que vous soyez dans votre
          maison et le bureau{" "}
        </p>
      </div>

      <div className="mt-6">
        {selectedCategory ? (
          selectedCategory.products.map((product, idx) => (
            <div
              key={product.id}
              className="text-white"
              onClick={() => onProductSelect(product)}
            >
              <div className="py-2 flex items-center space-x-4">
                <p className="font-extrabold text-xl text-orange-400">
                  0{idx + 1}
                </p>
                <p className="font-medium text-[14px]">{product.name}</p>
              </div>

              <DashedLine css="h-px w-1 bg-gray-500" length={25} />
            </div>
          ))
        ) : (
          <p className="text-white text-center">
            Veuillez sélectionner une catégorie
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductSidebar;
