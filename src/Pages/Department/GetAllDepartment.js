import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";


export default function GetAllDepartment() {
    const [departments, setDepartments] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [maxPage, setMaxPage] = useState(1);
    const [userRole, setUserRole] = useState("Admin");

    let URL = "http://127.0.0.1:8080/departmentController/getAllDepartment";
    axios.get(URL)
        .then(res => {
            setDepartments(res.data);
            setIsLoading(false);
            console.log("Department loader")
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
            setIsLoading(false);
        }, []);




    return (
        <div>
            <section>
                <div className="container py-2">
                    <div className="color3 head-font-1">
                        <h1>Departments</h1>
                        <hr />
                    </div>

                    {isLoading ?
                        <div className="d-flex justify-content-center">
                            <div className="spinner-border" role="status">
                                <span className="sr-only"></span>
                            </div>
                        </div> :
                        <div>
                            {departments.map(department => (
                                <p>

                                    {department.departName}</p>


                            ))}
                        </div>
                    }
                </div>
            </section>
        </div>
    );
}