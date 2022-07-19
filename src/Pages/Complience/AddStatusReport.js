import React from "react";
import axios from "axios";
import "./css/StatusReport/statusreport.css"
import "./css/StatusReport/Responsive/statusreport.css"

export default function AddStatusReport() {

    const [comments, setcomments] = React.useState("");
    const [details,setdetails ] = React.useState("");
    const [departmentID, setdepartmentID] = React.useState("");
    const [userID, setuserID] = React.useState("");
    const [complianceID, setcomplianceID] = React.useState("");

    // Function to send post request to server to rAdd status report
    const addStatusReport = () => {
        const URL = "http://127.0.0.1:8080/statusReport/addStatusReport";

        const statusReport = {
            "comments": comments,
            "details": details,
            "d_id": 1,
            "u_id": 1,
            "c_id": 6
        }
        axios.post(URL, statusReport)
            .then(res => {
                console.log(res);
            }
            )
            .catch(err => {
                console.log(err);
            }
            )
        alert("Status Report added successfully");
    }

    return <div>
        <div className="container" >

            <div className="color3 head-font-1" >
                <h1>Add Status Report</h1>
                <hr />
            </div>
            <section className="query">

                <div className="flex-row container">
                    <div className="left">

                        <form >
                            <div className="input__wrapper">
                            <textarea
                                name="complianceDescription"
                                className="input"
                                placeholder="Comments"
                                value={comments}
                                onChange={(event) => setcomments(event.target.value)}
                            />
                            </div>
                            <div className="input__wrapper">
                            <textarea
                                    className="input"
                                    type="text"
                                    name="details"
                                    id="details"
                                    placeholder="Details"
                                    required
                                    value={details}
                                    onChange={(e) => setdetails(e.target.value)}
                                />
                            </div>
                            <div className="input__wrapper">
                                <input
                                    className="input"
                                    type="number"
                                    name="d_id"
                                    id="d_id"
                                    placeholder="Department ID"
                                    required
                                    value={departmentID}
                                    onChange={(e) => setdepartmentID(e.target.value)}
                                />
                            </div>
                            <div className="input__wrapper">
                                <input
                                    className="input"
                                    type="number"
                                    name="u_id"
                                    id="u_id"
                                    placeholder="User ID"
                                    required
                                    value={userID}
                                    onChange={(e) => setuserID(e.target.value)}
                                />
                            </div>
                            <div className="input__wrapper">
                                <input
                                    className="input"
                                    type="number"
                                    name="c_id"
                                    id="c_id"
                                    placeholder="Compliance ID"
                                    required
                                    value={complianceID}
                                    onChange={(e) => setcomplianceID(e.target.value)}
                                />
                            </div>
                            
                            
                            <button className="btn form-btn" id="form-submit-btn" onClick={addStatusReport} disabled={!comments || !details || !departmentID || !userID || !complianceID } >
                                Submit
                            </button>
                        </form>
                    </div>
                    <div className="right">
                        <img
                            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                            alt=""
                        />
                    </div>
                </div>
            </section>
        </div>
    </div>
}
