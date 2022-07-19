import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Statusreport from "../../Components/Complience/Statusreport";


export default function GetAllStatusReport() {
    const [statusReports, setStatusReports] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [userId, setUserId] = useState(0);
    const [userRole, setUserRole] = useState("Admin");

    useEffect(() => {
        if (userRole === "Admin") {
            const URL = "http://127.0.0.1:8080/statusReport/allStatusReport";
            axios.get(URL)
                .then(res => {
                    setStatusReports(res.data);
                    setIsLoading(false);
                    console.log(res.data);
                }
                )
                .catch(err => {
                    console.log(err);
                }
                )
        }

    }, []);

    return (
        <div>
            <section>
                <div className="container py-2">
                    <div className="color3 head-font-1" >
                        <h1>Status Reports</h1>
                        <hr />
                    </div>
                    {isLoading ?
                        <div className="d-flex justify-content-center">
                            <div className="spinner-border" role="status">
                                <span className="sr-only"></span>
                            </div>
                        </div> :

                        <div >
                            {statusReports.map(statusReport => (
                                <Statusreport key={statusReport.statusReportId} statusReport={statusReport} />
                            ))}
                        </div>
                    }
                </div>
            </section>
        </div>

    );



}