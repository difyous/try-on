import React, { useState } from 'react';
import ProductSidebar from '../layout/ProductSidebar'; // Mise à jour de l'import
import Product3DViewer from '../Product3DViewer';
import categories from '../data/categories.json';

const Home = () => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handlePreviousCategory = () => {
    setSelectedCategoryIndex((prevIndex) => 
      prevIndex === 0 ? categories.length - 1 : prevIndex - 1
    );
    setSelectedProduct(null); // Réinitialiser le produit sélectionné lors du changement de catégorie
  };

  const handleNextCategory = () => {
    setSelectedCategoryIndex((prevIndex) => (prevIndex + 1) % categories.length);
    setSelectedProduct(null); // Réinitialiser le produit sélectionné lors du changement de catégorie
  };

  const selectedCategory = categories[selectedCategoryIndex];

  return (
    <div className="grid grid-cols-12 bg-gradient-to-b from-violet-950 to-current w-full h-full  text-sm ">
      
      <div className='h-20 bg-gradient-to-t from-violet-950 to-black  text-white  col-span-full flex items-center justify-start px-4  space-x-4 '>
        <img src="/logoattt.svg" alt="Logo" className="w-[110px] rounded-lg object-cover" />  
        
        <h2 className=''>  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-play" width="44" height="44" viewBox="0 0 24 24" stroke-width="2.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M7 4v16l13 -8z" />
        </svg>Catalogue Algérie Télécom</h2>
       
       <div>  modem et routeur  </div>
       <div>  routeur  </div>
       <div>  LES COURS ET FORMATIONS EN LIGNE</div>
       <div> SOLUTION DE PARTAGE ET STOCKAGE</div>
       <div>   BIBLIOTHÈQUENUMÉRIQUE</div>
       <div> SOLUTION ANTIVIRAL </div>

      </div>

    

      <div className="col-span-9 h-full w-full bg-gradient-to-b  from-violet-950 via via-transparent to-black relative">
        {selectedProduct ? (
          <Product3DViewer product={selectedProduct} />
        ) : (
          <div className="flex items-center justify-center h-full text-white">
            {selectedCategory ? "Veuillez sélectionner un produit." : "Veuillez sélectionner une catégorie."}
          </div>
        )}
    <div className="col-span-5 bg-white shadow-2xl h-15 rounded-full m-0  flex flex-row items-center   absolute bottom-15 left-1/2 -translate-x-1/2">
        <button
          onClick={handlePreviousCategory}
          className="w-full text-left bg-white rounded-s-3xl text-gray px-1 py-1 rounded relative  "
        >
          Précédent
        </button>
        <div className="text-gray text-center mb-2 text-xl ">
         categorie {selectedCategory.id}
        </div>
        <button
          onClick={handleNextCategory}
          className="w-full text-left bg-white text-gray px-1 py-1 rounded-e-3xl relative"
        >
          Suivant
        </button>
      </div>





      </div>
      
      <div className='h-full bg-gradient-to-b from-violet-950 to-black shadow-md rounded-md m-0 overflow-y-auto col-span-3 col-start-10'>
        <ProductSidebar
          selectedCategory={selectedCategory}
          onProductSelect={setSelectedProduct}
        />
      </div>
    </div>
  );
};

export default Home;
