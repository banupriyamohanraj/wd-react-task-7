import {Link} from "react-router-dom"
import {useContext, useEffect, useState} from 'react'
import ProductContext from './ProductContext'

export default function Productlist(){

    let products = useContext(ProductContext);

    let [productdatalist,setproductdatalist] = useState([]);
    useEffect(async()=>{
        let products = await fetch("https://6073d49a066e7e0017e785fb.mockapi.io/products");
        let productdata = await products.json();
        console.log(productdata);
        setproductdatalist([...productdata]);
    },[])

    return <>
   
                <Link to ='/Productcreate'>Create Product</Link>
              
                 
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Product List</h6>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            
                                            <th>Product Name</th>
                                            <th>Brand</th>
                                            <th>Price</th>
                                            <th>Department</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    
                                    <tbody>
                                       
                                        {
                                            productdatalist.map((obj)=>{
                                                
 
                                            return <tr>
                                               
                                                <td>{obj.productname}</td>
                                                <td>{obj.Brand}</td>
                                                <td>{obj.price}</td>
                                                <td>{obj.department}</td>
                                                <td>
                                                    <Link to={`/Productedit/${obj.productid}`}>Edit Product</Link>
                                                </td>
                                            </tr>
                                            })
                                        }
                                      

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

 
    </>

}