import React from "react";

export function List(props) {
  return (
    <ul className="todo-list">
      {props.items.map((item, index) => (
        <li key={index}>
          <div className="view">

            <input className="toggle"
                   checked={item.completed}
                   onChange={() => props.actions.check(item)}
                   type="checkbox"/>

            <label>{item.title}</label>

            <button className="destroy"
                    onClick={() => props.actions.remove(item)}/>
          </div>
          <input className="edit"/>
        </li>
      ))}
    </ul>
  )
}