import React from "react";
import "./SidebarOption.css";
import Icon from "@material-ui/core/Icon";

function SidebarOption(props) {
    return (
        <div
            className="sidebarOption"
            onClick={() => {
                props.onselect();
            }}
        >
            <Icon className={props.classname} />
            <h3>{props.title}</h3>
            <p>{props.number}</p>
        </div>
    );
}

export default SidebarOption;