import {Link } from "react-router-dom"
import {useContext, useEffect, useState} from 'react'
import UserContext from './UserContext'

export default function Userlist(){
    let users = useContext(UserContext);


    
    let [userdataList,setuserdataList] = useState([]);
    useEffect(async ()=>{
      let users = await fetch('https://6073d49a066e7e0017e785fb.mockapi.io/data')
      let userdata = await users.json();
        console.log(userdata)
        setuserdataList([...userdata]);
    },[])



    return <>
 <h1 class="h3 mb-2 text-gray-800">Tables</h1>
                    <p class="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
                        For more information about DataTables, please visit the <a target="_blank"
                            href="https://datatables.net">official DataTables documentation</a>.</p>
                
                <Link to ='/UserCreate'>Create New User</Link>
              
                 
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
                        </div>
                        <div class="card-body">
                            {
                                userdataList.length > 0 ?  <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Email</th>
                                            <th>Password</th>
                                            <th>Action</th>
                                            
                                        </tr>
                                    </thead>
                                    
                                    <tbody>
                                    
                                        {
                                            userdataList.map((obj)=>{
                                            return <tr>
                                                <td>{obj.firstname}</td>
                                                <td>{obj.lastname}</td>
                                                <td>{obj.email}</td>
                                                <td>{obj.password}</td>
                                                <td>
                                                    <Link to={`/UserEdit/${obj.id}`}>Edit User</Link>
                                                </td>
                                            </tr>
                                            })
                                        }
                                        
                                        
                                    </tbody>
                                </table>
                            </div> : <>
                            <h1>Loading...</h1>
                            </>

                            }  

                        </div>
                    </div>

    </>

}