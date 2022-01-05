import React, { useEffect } from "react";
import "./ProjectList.css";




function ProjectList(props) {
    const Variable = props.title;
     
    return (
        <div className="List_Container">
            <div className="allProjects">
              {Variable}
            </div>
        </div>
    );
}

export default ProjectList;