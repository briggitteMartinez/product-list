import React, { useState, } from "react";

interface IProductContext {
    showProduct: boolean;
    addProduct: (
        name: String,
        price: String,
        type: String,
    ) => void;
    editProduct: (
        name: String,
        price: String,
        type: String,
    ) => void;
    allProducts: (
        name: String,
        price: String,
        type: String,
    ) => void;
}

export const ProductContext = React.createContext<IProductContext | undefined>(undefined);


export const ProductContextProvider: React.FC = (props) => {
    const [showProduct, setShowProduct] = useState(false);

    const addProduct = (name: String, price: String, type: String,) => { };
    const editProduct = (name: String, price: String, type: String,) => { };
    const allProducts = (name: String, price: String, type: String,) => { setShowProduct(true) };

    return (
        <ProductContext.Provider value={{ showProduct, addProduct, editProduct, allProducts }}>{props.children}</ProductContext.Provider>
    );
};