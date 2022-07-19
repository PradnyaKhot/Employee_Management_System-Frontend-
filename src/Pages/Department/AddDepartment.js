import React from "react";
import axios from "axios";
import "./css/AddDepartment/Responsive/adddepartment.css"
import "./css/AddDepartment/adddepartment.css"
export default function AddDepartment()
{
    const[name, setname] = React.useState("");

    const adddepartment = () =>
    {
        const URL ="http://127.0.0.1:8080/departmentController/addDepartment";

        const addDepartment = {
            "name": "name"
        }
        axios.post(URL, addDepartment)
            .then(res => {
                console.log(res);
            })
             .catch(err => {
                 console.log(err);
             })
             alert("Department added successfully");
    }

    return <div>
        <div className="container">
            <div className="color3 head-font-1">
                <h1>Add Department</h1>
                <hr />
            </div>
            <section className="query">
                <div className="flex-row container">
                    <div className="left">
                
                <form>
                <div className="input__wrapper">
                    <input className="input"
                        type="text"
                        name="name"
                        placeholder="Department Name" 
                        required value={name}
                        onChange={(e) => setname(e.target.value)}/>    
                </div>
                <button className="btn form-btn" id="form-submit-btn" onClick={AddDepartment} disabled={!name}>
                    SUBMIT
                </button>
                </form>
                </div>
                </div>
            </section>
        </div>
    </div>
}