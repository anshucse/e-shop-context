import React , { createContext } from "react"
import useCategoryApi from './Api/CategoryApi';
import useProductApi from "./Api/ProductApi";

export const ProductContext = createContext();

function ProductProvider(props) {

    const data = {
        categoryApi:useCategoryApi(),
        productApi: useProductApi()
    };

return (
    <ProductContext.Provider value={data}>
                    { props.children }
    </ProductContext.Provider>
) 
}

export default ProductProvider

