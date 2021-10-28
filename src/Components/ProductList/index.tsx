import Button from "../Button";
import { useContext } from "react";
import {CardMain, Sec, Countainer} from './styles'
import { CatalogueContext } from "../../providers/catalogue";
import { CartContext } from "../../providers/cart";


interface Prop {
    type: string
}

export const ProductList = ({type}: Prop) => {

    const { catalogue } = useContext(CatalogueContext);
    const { cart } = useContext(CartContext);

    return (
        <Countainer>
          
            {
              type === "catalogue" && <h2> Catalogue: </h2>
            }
            <Sec>
              {
                type === "catalogue" &&
                  catalogue.map((item, index) => (
                      <CardMain key={index}>
                        <img src={item.img} />
                        <p>{item.name}</p>  
                        <p className='price'>R$ {item.price}</p> 
                        <Button type={type} item={item} />
                      </CardMain>
                  ))
              }
            </Sec>
            
            
  
           
            {
              type === "cart" && <h2> Cart: </h2>
            }
            <Sec>
              {
                type === "cart" &&
                  cart.map((item, index) => (
                    <CardMain key={index}>
                      <img src={item.img} />
                      <p>{item.name}</p> 
                      <Button type={type} item={item} />
                    </CardMain>
                  ))
              }
            </Sec>
           
        </Countainer>
    );
};
  
 