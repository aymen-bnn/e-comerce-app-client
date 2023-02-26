
import { ProductsContext } from "../context/productContext";

import { useContext } from "react";

export const useProductContext = () => {

    const context = useContext(ProductsContext)

    if(!context){
        throw Error("useProduct context must be inside productcontext")
    }
    return context
}