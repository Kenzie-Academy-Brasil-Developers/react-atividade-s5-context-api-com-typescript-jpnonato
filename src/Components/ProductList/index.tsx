import Button from "../Button";
import { useContext } from "react";
import {CardMain, Sec} from './styles'
import { CatalogueContext } from "../../providers/catalogue";
import { CartContext } from "../../providers/cart";


interface Prop {
    type: string
}

export const ProductList = ({type}: Prop) => {

    const { catalogue } = useContext(CatalogueContext);
    const { cart } = useContext(CartContext);

    return (
        <div>
          <section>
            {
              type === "catalogue" && <p> Catalogue: </p>
            }
            <Sec>
              {
                type === "catalogue" &&
                  catalogue.map((item, index) => (
                      <CardMain key={index}>
                        <p>{item.name}</p> 
                        <Button type={type} item={item} />
                      </CardMain>
                  ))
              }
            </Sec>
            
            </section>
  
           <section>
            {
              type === "cart" && <p> Cart: </p>
            }
            <Sec>
              {
                type === "cart" &&
                  cart.map((item, index) => (
                    <CardMain key={index}>
                      <p>{item.name}</p> 
                      <Button type={type} item={item} />
                    </CardMain>
                  ))
              }
            </Sec>
           </section>
        </div>
    );
};
  
 