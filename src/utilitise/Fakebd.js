import { parse } from "@fortawesome/fontawesome-svg-core"

const add = id =>{
    let shoppingCart ={}
  

    const storeCart =localStorage.getItem("shoppingCart")
    if(storeCart){
        shoppingCart= JSON.parse(storeCart)
    }
    const quantity = shoppingCart[id]
    if(quantity){
      const newQuantity = quantity+1 ;
      shoppingCart[id] = newQuantity
    }
    else{
        shoppingCart[id] =1
    }

localStorage.setItem("shoppingCart" ,JSON.stringify( shoppingCart))

}

const removeDB = (id) => {
  const storeCart =localStorage.getItem("shoppingCart")
  if(storeCart){
    const shoppingCart =JSON.parse(storeCart)
    for(id in shoppingCart ) {
      delete  shoppingCart[id]
      localStorage.setItem("shoppingCart" ,JSON.stringify( shoppingCart))
    }
  }
}
const removeShoppingCart = () => {
  localStorage.removeItem("shoppingCart")
}

const getstoreCart =() =>{
     let shoppingCart = {};
    const storeCart =localStorage.getItem('shoppingCart')
    if(storeCart){
      shoppingCart=JSON.parse(storeCart)
    }
    return shoppingCart
}


export {add ,getstoreCart,removeDB ,removeShoppingCart}