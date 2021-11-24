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
    setProducts: React.Dispatch<React.SetStateAction<{
        name: string;
        price: string;
        type: string;
    }[]>>
    type: string;
    setType: (type: string) => void;
   
   
}

export const ProductContext = React.createContext<IProductContext | undefined>(undefined);


export const ProductContextProvider: React.FC = (props) => {
    const [showProduct, setShowProduct] = useState(false);
    const [picked, setPicked] = useState(false);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [products, setProducts] = useState([{name:"", price:"", type:""}],);
    const [type, setType] = useState("");
    
    


    return (
        <ProductContext.Provider value={{ showProduct,setShowProduct, picked, name, setName,price, setPrice, products,setProducts,type ,setType}}>{props.children}</ProductContext.Provider>
    );
}