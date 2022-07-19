import React from "react";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import WorkIcon from "@material-ui/icons/Work";
import GroupWorkIcon from "@material-ui/icons/GroupWork";
import "./css/card.css";
import NotIntrestedIcon from "@material-ui/icons/NotInterested";
import PersonIcon from "@material-ui/icons/Person";

export default function Statusreport(props) {
    console.log(props.statusReport);

    return (
        <div>
            <article className="Complain_card light blue">

                <div className="Complain_card__text t-dark">
                    <div className="Complain_card__subtitle small">
                    <ul className="Complain_card__tagbox">
                    {props.statusReport.user?<li className="tag__item"> <PersonIcon/>{props.statusReport.user.role} </li>: <li className="tag__item"><PersonIcon/></li> }
                        <li className="tag__item color3"> <NotIntrestedIcon/> {props.statusReport.c_id}</li>
                    {props.statusReport.department?<li className="tag__item color3"> <GroupWorkIcon/> {props.statusReport.department.departName}</li>: <li className="tag__item color3"> <GroupWorkIcon/></li> }
                    </ul> 
                        <time>
                            <CalendarTodayIcon/> {props.statusReport.createdDate}
                        </time>
                    </div>
                    <div className="Complain_card__bar"></div>
                    <div className="Complain_card__preview-txt"><strong>Details:</strong> {props.statusReport.details}</div>
                    <div className="Complain_card__preview-txt"><strong>Comments:</strong> {props.statusReport.comments}</div>
                </div>
            </article>
        </div>
    );
}