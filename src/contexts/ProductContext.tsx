import React, { useState, } from "react";

interface IProductContext {
    showProduct: boolean;
    setShowProduct: (isTrue: boolean) => void
    picked: boolean;
    name: string;
    setName :(text :string) => void
    price: string;
    setPrice :(text :string) => void
    products: { name: string; price: string; type: string;}[]
    setProducts: (products: { name: string; price: string; type: string;}[]) => void
    type: string;
    setType: (type: string) => void;
    index: number;
    setIndex: (type: number) => void;
   
   
}

export const ProductContext = React.createContext<IProductContext | undefined>(undefined);


export const ProductContextProvider: React.FC = (props) => {
    const [showProduct, setShowProduct] = useState(false);
    const [picked, setPicked] = useState(false);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [products, setProducts] = useState<{ name: string; price: string; type: string;}[]>([]);
    const [type, setType] = useState("");
    const [index, setIndex] = useState(0);
    
    
    


    return (
        <ProductContext.Provider value={{ showProduct,setShowProduct, picked, name, setName,price, setPrice, products,setProducts,type ,setType, index, setIndex}}>{props.children}</ProductContext.Provider>
    );
}