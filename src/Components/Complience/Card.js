import React from "react";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import WorkIcon from "@material-ui/icons/Work";
import GroupWorkIcon from "@material-ui/icons/GroupWork";

export default function ComplainsCard(props) {

    return (
        <div>
            <article className="Complain_card light blue">

                <div className="Complain_card__text t-dark">
                    <h1 className="Complain_card__title blue">{props.complain.complianceType}</h1>
                    <div className="Complain_card__subtitle small">
                        <time>
                            <CalendarTodayIcon/> {props.complain.complianceDate}
                        </time>
                    </div>
                    <div className="Complain_card__bar"></div>
                    <div className="Complain_card__preview-txt">{props.complain.complianceDescription}</div>
                    <ul className="Complain_card__tagbox">
                        <li className="tag__item"> <WorkIcon/> {props.complain.complianceStatus}</li>
                        <li className="tag__item color3"> <GroupWorkIcon/> {props.complain.department.departName}</li>
                    </ul> 
                </div>
            </article>
        </div>
    );
}