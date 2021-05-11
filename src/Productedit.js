
import { useContext, useEffect, useState } from "react"
import ProductContext from "./ProductContext"


export default function Productedit(props) {



    
    let [productname, setproductname] = useState('')
    let [Brand, setBrand] = useState('')
    let [price, setprice] = useState('')
    let [department, setdepartment] = useState('')

    useEffect(async () => {
        let product = await fetch(`https://6073d49a066e7e0017e785fb.mockapi.io/products/${props.match.params.id}`)
        let productdata = await product.json();
        console.log(productdata)

       
        setproductname([productdata.productname])
        setBrand([productdata.Brand])
        setprice([productdata.price])
        setdepartment([productdata.department])
    }, [])

    let productdata = useContext(ProductContext)
    let ProductSubmit = async (e) => {
        e.preventDefault()

        productdata.setproductlist([...productdata.productlist, {
             productname, Brand, price,department
        }])


        await fetch(`https://6073d49a066e7e0017e785fb.mockapi.io/products/${props.match.params.id}`, {
            method: "PUT",
            body: JSON.stringify({  productname, Brand, price,department }),
            headers: {
                "content-type": "application/json"
            }
        })
    }
    return <>
        <div class='container'>
            <form onSubmit={ProductSubmit}>
                <div className='row'>
                    <div className='col-lg-12 p-0'>
                        <h3>Product Updation Form</h3>
                    </div>
                </div>

                <div className='row'>
                    
                    <div className='col-lg-6 mt-3'>
                        <label >Product Name</label>
                        <input className='form-control' value={productname} onChange={(e) => setproductname(e.target.value)}></input>
                    </div>
                    <div className='col-lg-6 p-0 mt-3'>
                        <label >Brand</label>
                        <input className='form-control' value={Brand} onChange={(e) => setBrand(e.target.value)}></input>
                    </div>
                    <div className='col-lg-6 mt-3'>
                        <label >Price</label>
                        <input className='form-control' value={price} onChange={(e) => setprice(e.target.value)}></input>
                    </div>
                    <div className='col-lg-6 p-0 mt-3'>
                        <label >Department</label>
                        <input className='form-control' value={department} onChange={(e) => setdepartment(e.target.value)}></input>
                    </div>
                    <div className='row'>
                        <div className='col-lg-6 mt-3'>
                            <input type="submit" value="Edit" className='btn btn-primary'></input>
                        </div>
                    </div>
                </div>


            </form>
        </div>
    </>
}
