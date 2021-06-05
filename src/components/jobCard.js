import * as React from "react";
import { Link } from "gatsby";


const JobCard = ({ refNo, jobLink, jobTitle, jobType, jobLocation }) => (
    <div className="jobCard">
        <div className="jobCard__container">
            <div className="jobCard__top">
                <div className="jobCard__refNo">
                    <p>{refNo}</p>
                </div>
                <Link className="jobCard__link" to={jobLink}>
                    {jobTitle}
                </Link>
                <div className="jobCard__location">
                    <span className="co_black">{jobType}</span> <span>in</span> <span className="co_primary">{jobLocation}</span>
                </div>
            </div>
        </div>
    </div>
)



export default JobCard;
