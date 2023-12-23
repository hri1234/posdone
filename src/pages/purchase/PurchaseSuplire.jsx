import react from "react"
import {useState , useEffect} from "react"
import PurchaseOrder from "./PurchaseOrder"

const PurchaseSuplire=()=>{
const[data , setData] = useState()

  const OnlineOrder = async()=>{
    const response = await fetch("https://mohammad-backend.onrender.com/api/products")
    const newValue  = await response.json()
    console.log(newValue.products)
  }
  useEffect(()=>{
    OnlineOrder()
  })




  // return(

  // )
}

export default PurchaseSuplire