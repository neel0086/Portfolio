import React from "react";
import "./Sidebar.css";
import Python from "./Python";
import Javascript from "./Javascript";
import PHP_SQL from "./PHP_SQL";
import SidebarOption from "./SidebarOption";
import React_Firebase from "./React_Firebase";

function Sidebar(props) {
    return (
        <div className="sidebar">
            {/* use Navigate */}
            <h1 className="lan">Languages</h1>
           
            <SidebarOption
                classname={"fab fa-python"}
                title="Python"
                onselect={() => {
                    props.onselect(Python);
                }}
                number={2}
            />
            <SidebarOption
                classname={"fab fa-js"}
                title="Javascript"
                onselect={() => {
                    props.onselect(Javascript);
                }}
                number={1}
            />
            <SidebarOption
                classname={"fab fa-php"}
                title="PHP_SQL"
                onselect={() => {
                    props.onselect(PHP_SQL);
                }}
                number={1}
            />
            <SidebarOption
                classname={"fab fa-react"}
                title="React/Firebase"
                onselect={() => {
                    props.onselect(React_Firebase);
                }}
                number={1}
            />
            
        </div>
    );
}

export default Sidebar;