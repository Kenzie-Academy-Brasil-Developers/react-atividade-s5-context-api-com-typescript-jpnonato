import { createContext, useState, ReactNode } from "react";

interface cartProps {

    children: ReactNode
}

interface itens {

    img: string;
    info: string;
    name: string;
    price: number;
}

interface cartContextData {
    cart: itens[]
    addToCart: (item: itens) => void
    removeFromCart: (item: itens) => void
}


export const CartContext = createContext<cartContextData>({} as cartContextData )

export const CartProvider = ({children}:cartProps) => {

    const [cart, setCart] = useState<itens[]>([])
    
    const addToCart =(item: itens) =>{

        setCart([...cart, item])

    }

    const removeFromCart = (item: itens) => {

        const filterCart = cart.filter((e: itens) => e !== item)
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