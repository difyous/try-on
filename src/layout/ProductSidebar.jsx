import React from 'react';
import DashedLine from '../components/atoms/DashedLine';
const ProductSidebar = ({ selectedCategory, onProductSelect }) => {
  return (
     //div info +list product
    <div className="w-72 h-screen font-bold bg-gradient-to-b from-violet-950 to-black">

     
      <div className="w-full p-4 text-center">
          
          
          <h6 className='text-white text-2xl'> { selectedCategory.name}</h6>
          <div className="w-full p-4 text-center">
             <h2 className='text-white text-2xl h-20'>description     </h2>
             
                <h className='text-white text-xs justify-around h-60'>
                  
                  LemodemDSL-124sansfilN300ADSL2+offre des  vitesses sans fil
                  qui sont beaucoup plus rapides que 802.11g, vous permettant de
                  maximiser les performances sans filet rester connecté où que vous
                  soyez dans votre maison et le bureau     </h>

          </div>
           <div className="w-full  p-4 text-center">
             <h2 className='text-white text-2xl'>liste de Produits</h2>
          </div>
      </div>



      <div className='w-full  h-full overflow-y-auto p-4'>
        {selectedCategory ? (
         selectedCategory.products.map((product) => (
         <div
          key={product.id}
          className="product-item  text-white hover:bg-blue-700 p-6 rounded cursor-pointer     border-white"
        onClick={() => onProductSelect(product)}
        >
       
       <p>

        {product.name}
       </p>
      

       <DashedLine css="h-px w-4 bg-gray-500" />
      

      </div>
      
    ))
  ) : (
    <p className="text-white text-center">Veuillez sélectionner une catégorie</p>
  )}
</div>
    </div>
  );
};

export default ProductSidebar;
