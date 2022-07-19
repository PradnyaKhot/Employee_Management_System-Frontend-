import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export default function DeleteDepartment()
{
    const [userRole, setUserRole] = useState("Admin");
    const [id, setId] =useState();
    useEffect(()=> {

        if(userRole === "Admin")
        {
            let URL = "http://127.0.0.1:8080/departmentController/deleteDepartment/" + id ;
            axios.delete(URL)
             .then(res => {
                 console.log(res);
             })
             .catch(err => {
                 console.log(err);
             })    
        }
    });
    return <div>
        <div className="container">
            <div className="color3 head-font-1">
                <h1>Delete Department</h1>
                <hr />
            </div>
            <section className="query">
                <div className="flex-row container">
                    <div className="left">
                
                <form>
                <div className="input__wrapper">
                    <input className="input"
                        type="numeric"
                        id="id"
                        placeholder="Department Id" 
                        required value={id}
                        onChange={(e) => setId(e.target.value)}/>    
                </div>
                <button className="btn form-btn" id="form-submit-btn" onClick={DeleteDepartment} disabled={!id}>
                    Delete
                </button>
                </form>
                </div>
                </div>
            </section>
        </div>
    </div>
}