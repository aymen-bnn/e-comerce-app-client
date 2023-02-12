import { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";
import { useAuthContext } from "./useAuthContext";

 
export const useLogin = () => {
    const {dispatch} = useAuthContext()

    const [error , setError] = useState(null)
    const [isLoading , setIsLoading] = useState(null)
    const login = async(email , password) => {

        setIsLoading(true)
        setError(false)

        //making post request
        const response = await fetch('http://localhost:4000/api/user/login' , {
            method: 'POST',
            headers : {'Content-Type':'application/json'},
            body:JSON.stringify({email , password})
        })
        
        const json = await response.json()

        if(!response.ok){
            setIsLoading(false),
            setError(json.error)
        }
        if(response.ok){
            //save the user to the local storage
            localStorage.setItem('user' , JSON.stringify(json))

            //update th auth context hook 
            dispatch({type : 'LOGIN' , payload : json})

            setIsLoading(false)
        }
    }
    return {login , isLoading , error}
}