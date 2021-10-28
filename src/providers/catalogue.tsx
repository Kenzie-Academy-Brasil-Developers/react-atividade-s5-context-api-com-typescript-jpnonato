// fazer os imports
import { createContext, useState, ReactNode } from 'react';

interface catalogueProps{

    children: ReactNode
}

interface itens {

    name: string;
    price: number;
}

interface catalogueItem {
    item: itens

}


// criar o context
export const CatalogueContext = createContext([]);

// criar o provider

const list = [
    { name: "Book", price: 20 },
    { name: "T-shirt", price: 50 },
    { name: "Banana", price: 3 }
];
export const CatalogueProvider = ({ children}: catalogueProps) => {
	const [catalogue, setCatalogue] = useState([list])

        // criar a lógica para adicionar
  const addToCatalogue = (item: catalogueItem) => {
    setCatalogue([...catalogue, item]);
  };

	// criar a lógica para remover
  const removeFromCatalogue = (item) => {
    const newCatalogue = catalogue.filter( (elt) => elt.name !== item.name);
    setCatalogue(newCatalogue);
  };

return (
  <CatalogueContext.Provider
   value={{ catalogue, addToCatalogue, removeFromCatalogue }}
   >
	{children}
  </CatalogueContext.Provider>
 )
}