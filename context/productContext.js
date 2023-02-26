
import { createContext, useReducer } from "react";

//create a context
export const ProductsContext = createContext()

//    dispatch needs type 
//  and payload to describe anydate we need for change

//dispatch({type : 'SET_PRODUCTS' , payload : [{}]})

export const productsReducer = (state , action) => {

    //state is previous value 
    switch(action.type){
        case 'SetProducts' : 
        return{
            products : action.payload ,
        }
        default : 
        return state
    }
}

export const ProductsContextProvider = ({children}) => {

    //product reducer is the initial name of state
    //second parameter is the value of the state 

    const [state , dispatch] = useReducer(productsReducer , {
        products : null
    })
    return (
        <ProductsContext.Provider value={{...state , dispatch}}>
            {children}
        </ProductsContext.Provider>
    )
}