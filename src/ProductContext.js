import React, { useState } from 'react';

let ProductContext = React.createContext();

export default ProductContext;


export const ProductProvider = ({children})=>{

    let [productlist,setproductlist] = useState([])
    return <ProductContext.Provider value={{productlist,setproductlist}}>
        {children}
    </ProductContext.Provider>
}