import { useAuthContext } from "./useAuthContext"
export const useLogout = () => {

    const {dispatch} = useAuthContext()

    const logout = () =>  {
        //logout from the application by deleting the localstorage 
        //and update the globalstate

        localStorage.removeItem('user')

        //dispatch logout
        dispatch({type : 'LOGOUT'})

    }
    return {logout} 
}