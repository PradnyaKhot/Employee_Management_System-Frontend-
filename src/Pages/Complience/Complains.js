import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "./css/Complains/complains.css";
import ComplainsCard from "../../Components/Complience/Card";

export default function Complains() {
    const [complains, setComplains] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [userId, setUserId] = useState(1);
    const [userRole, setUserRole] = useState("Admin");

    useEffect(() => {
        if (userRole === "Admin") {

            const URL = "http://127.0.0.1:8080/compliance/getAllCompliance";
            axios.get(URL)
                .then(res => {
                    setComplains(res.data);
                    setIsLoading(false);
                    res.data.map(complain => {
                        console.log(complain);
                    }
                    )
                }
                )
                .catch(err => {
                    console.log(err);
                }
                )
        }
        else {
            const URL = "http://127.0.0.1:8080/compliance/getComplianceByUserId/" + userId;
            axios.get(URL)
                .then(res => {
                    setComplains(res.data);
                    setIsLoading(false);
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
                        <h1>Complains</h1>
                        <hr />
                    </div>

                    {isLoading ?
                        <div className="d-flex justify-content-center">
                            <div className="spinner-border" role="status">
                                <span className="sr-only"></span>
                            </div>
                        </div> :

                        <div >
                            {complains.map(complain => (
                                
                                    <ComplainsCard key={complain.complianceId} complain={complain} />
                            ))}
                        </div>
                    }
                </div>
            </section>

        </div>
    );
}
