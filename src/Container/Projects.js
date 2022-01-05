import React from "react";
import "./Projects.css";
import Sidebar from "./Sidebar";
import { useState } from "react";
import ProjectList from "./ProjectList";
import Python from "./Python";

function Projects(props) {
    const [title, setTitle] = useState(null);

    const setTitleValue = (title) => {
        setTitle(title);
    };

    return (
        <div className="Project_Container">
            <Sidebar onselect={setTitleValue} />
            {title ? <ProjectList title={title} /> : <Python />}
        </div>
    );
}

export default Projects;