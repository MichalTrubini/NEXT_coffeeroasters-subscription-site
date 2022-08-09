import React from 'react';

const ChoiceSingle = (props) => {
    return ( 
        <div className={props.className} dataid={props.dataid} onClick={props.onClick}>
            <h3 className="choices__card-header" dataid={props.dataid} onClick={props.onClick}>{props.header}</h3>
            <p className="choices__card-text" dataid={props.dataid} onClick={props.onClick}>{props.text}</p>
        </div>
     );
}
 
export default ChoiceSingle;