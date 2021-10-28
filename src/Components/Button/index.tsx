import { useContext } from "react";
import { ButtonStyled } from './styles'
import { CartContext } from "../../providers/cart";
import { CatalogueContext } from "../../providers/catalogue";

interface itens {
  img: string;
  info: string;
  name: string;
  price: number;
}



interface Props {
    type: string
    item: itens
}

const Button = ({ type, item }: Props) => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const { catalogue, addToCatalogue, removeFromCatalogue } = useContext( CatalogueContext);

  const text = type === "catalogue" ? "Add to cart" : "Remove";

  const handleClick = () => {
    if (type === "catalogue") {
      removeFromCatalogue(item);
      addToCart(item);
    } else {
      removeFromCart(item);
      addToCatalogue(item);
    }
  };

  return <ButtonStyled onClick={handleClick}>{text}</ButtonStyled>;
};

export default Button;