import * as React from "react";
import { Link } from "gatsby";


const JobCard = (props) => {
    const Job = props.JobDeets.map(JobDeet => {
        return <div className="jobCard" key={JobDeet.id}>
            <div className="jobCard__container">
                <div className="jobCard__top">
                    <div className="jobCard__refNo">
                        <p>{JobDeet.refNo}</p>
                    </div>
                    <Link className="jobCard__link" to={JobDeet.jobLink}>
                        {JobDeet.jobTitle}
                    </Link>
                    <div className="jobCard__location">
                        <span className="co_black">{JobDeet.jobType}</span> <span>in</span> <span className="co_primary">{JobDeet.jobLocation}</span>
                    </div>
                </div>
            </div>
        </div>
        
    })
    return(
        <div>
            {Job}
        </div>
    )
}



export default JobCard;
