import React from 'react';
import "../App.css";

const List = props => (
    <ul className="List">
        {
        props.list.map((item, index) =>
          <li key={index} className="ListItem" >

            <a onClick={() => props.removeItem(index)}>{item}</a>            
          </li>)
        }
      </ul>
);

export default List;
