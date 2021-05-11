import { useContext,useState } from "react"
import ProductContext from "./ProductContext"


export default function Productcreate(){
    let [productname,setproductname]=useState('')
    let [department,setdepartment]=useState('')
    let [Brand,setproductbrand]=useState('')
    let [price,setprice]=useState('')

    let productdata = useContext(ProductContext)

    let ProductSubmit = async(e)=>{
        e.preventDefault()   
        productdata.setproductlist([...productdata.productlist,{
            productname,
            department,
            Brand,
            price
        }])
        await fetch('https://6073d49a066e7e0017e785fb.mockapi.io/products', {
            method: "POST",
            body: JSON.stringify({
                productname,
                department,
                Brand,
                price
            }),
            headers: {
                "content-type": "application/json"
            }
        })
    }
    return <>
   <div className = 'container'>
    <form onSubmit={ProductSubmit}>
        <div className='row'>
            <div className ='col-lg-12 p-0'>
                <h3>Product Creation Form</h3>
            </div>
        </div>
        <div className = 'row'>
          
                <div className = 'col-lg-6 p-0 mt-3'>
                    <label >Product Name</label>
                    <input className='form-control' value={productname} onChange={(e)=> setproductname(e.target.value) }></input>
                </div>
                <div className = 'col-lg-6 mt-3'>
                    <label >Department</label>
                    <input className='form-control'value={department} onChange={(e)=> setdepartment(e.target.value) }></input>
                </div>
                <div className = 'col-lg-6 p-0 mt-3'>
                    <label >Brand</label>
                    <input className='form-control'value={Brand} onChange={(e)=> setproductbrand(e.target.value) }></input>
                </div>
                <div className = 'col-lg-6 mt-3'>
                    <label >Price</label>
                    <input className='form-control'value={price} onChange={(e)=> setprice(e.target.value) }></input>
                </div>
                <div className = 'row'>
                <div className = 'col-lg-6 mt-3'>
                <input type="submit" value="Submit"className='btn btn-primary'></input>
                    </div>
                </div>
        </div>
        </form>
    </div>
    </>

}