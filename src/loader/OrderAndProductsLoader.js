import { getstoreCart } from "../utilitise/Fakebd";

export const orderAndProductLoader = async () => {
    const productData =await fetch('product.json')
    const products = await productData.json()
 


    const savedCart = getstoreCart();
    const initialCart = []

    for(const id in savedCart){
       const addedProduct = products.find( product => product.id === id)
      
       if(addedProduct){
        const quantity = savedCart[id]
         addedProduct.quantity =quantity;
         initialCart.push(addedProduct)

       }
    }

    

return {products ,initialCart};
}