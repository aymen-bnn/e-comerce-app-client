
export const useGetProduct = async(id) => {

        //get the response
        const response = await fetch(`http://localhost:4000/api/product/${id}`)
        //json the response
        const json = await response.json()
        //return it
        return json
}