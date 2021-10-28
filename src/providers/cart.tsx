import { createContext, useState, ReactNode } from "react";

interface cartProps {

    children: ReactNode
}

interface itens {

    name: string;
    price: number;
}

interface cartItem {
    item: itens

}


export const CartContext = createContext({})

export const CartProvider = ({children}:cartProps) => {

    const [cart, setCart] = useState<cartItem[]>([])
    
    const addToCart =(item: cartItem) =>{

        setCart([...cart, item])

    }

    const removeFromCart = (item: cartItem) => {

        const filterCart = cart.filter((e: cartItem) => e !== item)
        setCart( filterCart)

    }

    return(
        <CartContext.Provider
        value ={{cart, addToCart, removeFromCart}}
        >
            {children}
        </CartContext.Provider>
    )


}