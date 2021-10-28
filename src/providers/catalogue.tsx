// fazer os imports
import { createContext, useState, ReactNode } from 'react';
import Notebook_1 from  '../img/Notebook-Lenovo-Ultrafino-ideapad-S145.jpg'
import Notebook_2 from  '../img/Notebook-Gamer-Legion5i.jpg'
import Notebook_3 from  '../img/Notebook-Dell-Inspiron-i15-3501.jpg'
import Notebook_4 from  '../img/Notebook-ASUS-M515DA-EJ533T.jpg'


interface catalogueProps{

    children: ReactNode
}

interface itens {
    
    img: string;
    info: string;
    name: string;
    price: number;
}

interface catalogueContextData {
    catalogue: itens[]
    addToCatalogue: (item: itens) => void
    removeFromCatalogue: (item: itens) => void
}



// criar o context
export const CatalogueContext = createContext({} as catalogueContextData );

// criar o provider

const list = [
  { 
    img:   Notebook_1,
    name: 'Lenovo ideapad S145 ',
    info: 'AMD RYZEN 7 , Radeon RX Vega 10 , 8 GB RAM , 512 GB SSD , Windows 10',
    price: 4999
  },
  { 
    
    img:   Notebook_2,
    name: 'Gamer Legion 5i',
    info: 'Tela 15.6" FULL HD, Intel Core i7-10750H , 16GB RAM, 512GB SSD, RTX2060, Windows 10',
    price: 7999
  },
  { 
    img:   Notebook_3,  
    name: 'Dell Inspiron i15-3501',
    info: 'Tela 15.6" HD, 11ª Geração Intel Core i7, 8GB RAM, 256GB SSD, Windows 10',
    price: 5999
  },
  { 
    
    img:   Notebook_4,
    name: 'ASUS M515DA',
    info: 'Tela 15.6" HD, AMD RYZEN 7 3700U, 8GB RAM, 256GB SSD, Radeon RX Vega 10, Windows 10',
    price: 3999
  }
];
export const CatalogueProvider = ({ children}: catalogueProps) => {
	const [catalogue, setCatalogue] = useState<itens[]>(list)

        // criar a lógica para adicionar
  const addToCatalogue = (item: itens) => {
    setCatalogue([...catalogue, item]);
  };

	// criar a lógica para remover
  const removeFromCatalogue = (item: itens) => {
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