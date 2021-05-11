import { useContext,useEffect, useState } from "react"
import UserContext from "./UserContext"


export default function UserEdit(props) {



let [firstname,setfirstname]=useState('')
let [lastname,setlastname]=useState('')
let [email,setemail]=useState('')
let [password,setpassword]=useState('')


    // let [useredit, setuseredit] = useState([]);
    useEffect(async () => {
        let user = await fetch(`https://6073d49a066e7e0017e785fb.mockapi.io/data/${props.match.params.id}`)
        let userdata = await user.json();
        console.log(userdata)
        
        setfirstname([userdata.firstname])
        setlastname([userdata.lastname])
        setemail([userdata.email])
        setpassword([userdata.password])
    }, [])

    let userdata = useContext(UserContext)
    let UserSubmit = async (e)=>{
        e.preventDefault()
    
        userdata.setuserlist([...userdata.userlist,{
            firstname,lastname,email,password
        }])
    
        await fetch(`https://6073d49a066e7e0017e785fb.mockapi.io/data/${props.match.params.id}`,{
            method :"PUT",
            body :JSON.stringify({firstname,lastname,email,password}),
            headers : {
                "content-type" : "application/json"
            }
        })
    }
    return <>
        <div class='container'>
            <form onSubmit={UserSubmit}>
                <div className='row'>
                    <div className='col-lg-12 p-0'>
                        <h3>User Updation Form</h3>
                    </div>
                </div>
      
                    <div className='row'>
                        <div className='col-lg-6 p-0 mt-3'>
                            <label >First Name</label>
                            <input className='form-control' value={firstname} onChange={(e)=> setfirstname(e.target.value) }></input>
                        </div>
                        <div className='col-lg-6 mt-3'>
                            <label >Last Name</label>
                            <input className='form-control' value={lastname} onChange={(e)=> setlastname(e.target.value) }></input>
                        </div>
                        <div className='col-lg-6 p-0 mt-3'>
                            <label >Email</label>
                            <input className='form-control' value={email} onChange={(e)=> setemail(e.target.value) }></input>
                        </div>
                        <div className='col-lg-6 mt-3'>
                            <label >Password</label>
                            <input className='form-control' value={password} onChange={(e)=> setpassword(e.target.value) }></input>
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
