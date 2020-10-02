import React from "react";
import {CaretDownOutlined, CaretUpOutlined} from "@ant-design/icons";


type SortPropsType = {
    onSortUp:() => void;
    onSortDown:() => void;
}

export const Sort: React.FC<SortPropsType> = React.memo((props) => {

    return (
        <div style={{display: "flex", flexDirection: 'column'}}>
            <CaretUpOutlined onClick={props.onSortUp}/>
            <CaretDownOutlined onClick={props.onSortDown}/>
        </div>
    );
});